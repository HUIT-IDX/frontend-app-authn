import React from 'react';

import { mergeConfig } from '@edx/frontend-platform';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { render, screen } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';

import HuitLayout from './index';

const renderAtWidth = (width) => render(
  <IntlProvider locale="en">
    <HuitLayout>
      <form aria-label="form">
        <input type="text" />
      </form>
    </HuitLayout>
  </IntlProvider>,
  {
    wrapper: ({ children }) => (
      <ResponsiveContext.Provider value={{ width }}>
        {children}
      </ResponsiveContext.Provider>
    ),
  },
);

describe('HuitLayout tests', () => {
  beforeEach(() => {
    mergeConfig({
      HUIT_BG_IMAGE: 'https://example.com/bg.jpg',
      HUIT_CARD_IMAGE: 'https://example.com/card.jpg',
      HUIT_OVERLAY_COLOR: 'rgba(3, 78, 162, 0.85)',
    });
  });

  it('renders the form-only card on small screens', () => {
    const { container } = renderAtWidth(375);

    expect(screen.getByRole('form')).toBeDefined();
    expect(container.querySelector('.huit-auth-card--small')).not.toBeNull();
    expect(container.querySelector('.huit-auth-card__image')).toBeNull();
    expect(container.querySelector('.huit-auth-card__banner')).toBeNull();
  });

  it('renders the banner card on medium screens', () => {
    const { container } = renderAtWidth(820);

    expect(screen.getByRole('form')).toBeDefined();
    expect(container.querySelector('.huit-auth-card--medium')).not.toBeNull();
    expect(container.querySelector('.huit-auth-card__banner')).not.toBeNull();
  });

  it('renders the split card with slogans on large screens', () => {
    const { container } = renderAtWidth(1400);

    expect(screen.getByRole('form')).toBeDefined();
    expect(container.querySelector('.huit-auth-card--large')).not.toBeNull();
    expect(container.querySelector('.huit-auth-card__image')).not.toBeNull();
    expect(screen.getByText('Sống có trách nhiệm')).toBeDefined();
  });

  it('renders only one layout per breakpoint', () => {
    const { container } = renderAtWidth(700);

    expect(container.querySelectorAll('.huit-auth-card').length).toBe(1);
  });

  it('falls back to a narrow card when no card image is configured', () => {
    mergeConfig({ HUIT_CARD_IMAGE: '' });
    const { container } = renderAtWidth(1400);

    expect(container.querySelector('.huit-auth-card--no-image')).not.toBeNull();
    expect(container.querySelector('.huit-auth-card__image')).toBeNull();
  });
});
