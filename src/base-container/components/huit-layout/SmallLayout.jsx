import React from 'react';

import PropTypes from 'prop-types';

import { getHuitLayoutConfig } from './layout-config';

import './index.scss';

const SmallLayout = ({ children }) => {
  const { bgImage, overlayColor, logoUrl } = getHuitLayoutConfig();

  return (
    <div
      className="huit-auth-page huit-auth-page--small"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
    >
      <div className="huit-auth-overlay" style={{ backgroundColor: overlayColor }}>
        <div className="huit-auth-card huit-auth-card--small">
          <div className="huit-auth-card__form">
            {logoUrl && <img src={logoUrl} alt="HUIT" className="huit-auth-card__form-logo" />}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

SmallLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmallLayout;
