import React from 'react';

import PropTypes from 'prop-types';

import { getHuitLayoutConfig, HUIT_SLOGANS } from './layout-config';

import './index.scss';

const MediumLayout = ({ children }) => {
  const {
    bgImage, cardImage, overlayColor, logoUrl,
  } = getHuitLayoutConfig();

  return (
    <div
      className="huit-auth-page huit-auth-page--medium"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
    >
      <div className="huit-auth-overlay" style={{ backgroundColor: overlayColor }}>
        <div className="huit-auth-card huit-auth-card--medium">
          {cardImage && (
            <div
              className="huit-auth-card__banner"
              style={{ backgroundImage: `url(${cardImage})` }}
            >
              <div className="huit-auth-card__banner-content">
                {HUIT_SLOGANS.map(slogan => (
                  <h2 key={slogan} className="huit-auth-card__slogan">{slogan}</h2>
                ))}
              </div>
            </div>
          )}
          <div className="huit-auth-card__form">
            {logoUrl && <img src={logoUrl} alt="HUIT" className="huit-auth-card__form-logo" />}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

MediumLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MediumLayout;
