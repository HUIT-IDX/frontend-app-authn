import React from 'react';

import { getConfig } from '@edx/frontend-platform';

import './index.scss';

const DesktopLayout = ({ children }) => {
  const bgImage = getConfig().HUIT_BG_IMAGE;
  const cardImage = getConfig().HUIT_CARD_IMAGE;
  const overlayColor = getConfig().HUIT_OVERLAY_COLOR || 'rgba(3, 78, 162, 0.85)';
  const logoUrl = getConfig().LOGO_WHITE_URL || getConfig().LOGO_URL;

  return (
    <div className="huit-auth-page" style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}>
      <div className="huit-auth-overlay" style={{ backgroundColor: overlayColor }}>
        <div className="huit-auth-card">
          <div className="huit-auth-card__form">
            {logoUrl && <img src={logoUrl} alt="HUIT" className="huit-auth-card__form-logo" />}
            {children}
          </div>
          <div className="huit-auth-card__image" style={{ backgroundImage: cardImage ? `url(${cardImage})` : undefined }}>
            {cardImage && (
              <div className="huit-auth-card__image-content">
                <h2 className="huit-auth-card__slogan">Học tập chủ động - Làm việc sáng tạo</h2>
                <h2 className="huit-auth-card__slogan">Sống có trách nhiệm</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
