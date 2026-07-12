import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { getHuitLayoutConfig, HUIT_SLOGANS } from './layout-config';

import './index.scss';

const LargeLayout = ({ children }) => {
  const {
    bgImage, cardImage, overlayColor, logoUrl,
  } = getHuitLayoutConfig();

  return (
    <div
      className="huit-auth-page huit-auth-page--large"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
    >
      <div className="huit-auth-overlay" style={{ backgroundColor: overlayColor }}>
        <div
          className={classNames('huit-auth-card huit-auth-card--large', {
            'huit-auth-card--no-image': !cardImage,
          })}
        >
          <div className="huit-auth-card__form">
            {logoUrl && <img src={logoUrl} alt="HUIT" className="huit-auth-card__form-logo" />}
            {children}
          </div>
          {cardImage && (
            <div
              className="huit-auth-card__image"
              style={{ backgroundImage: `url(${cardImage})` }}
            >
              <div className="huit-auth-card__image-content">
                {HUIT_SLOGANS.map(slogan => (
                  <h2 key={slogan} className="huit-auth-card__slogan">{slogan}</h2>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

LargeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LargeLayout;
