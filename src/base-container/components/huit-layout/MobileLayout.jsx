import React from 'react';

import { getConfig } from '@edx/frontend-platform';

import './index.scss';

const MobileLayout = ({ children }) => {
  const bgImage = getConfig().HUIT_BG_IMAGE;
  const overlayColor = getConfig().HUIT_OVERLAY_COLOR || 'rgba(3, 78, 162, 0.85)';

  return (
    <div className="huit-auth-page huit-auth-page--mobile" style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}>
      <div className="huit-auth-overlay" style={{ backgroundColor: overlayColor }}>
        <div className="huit-auth-card huit-auth-card--mobile">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
