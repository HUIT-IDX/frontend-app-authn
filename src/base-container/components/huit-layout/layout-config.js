import { getConfig } from '@edx/frontend-platform';

export const HUIT_SLOGANS = [
  'Học tập chủ động - Làm việc sáng tạo',
  'Sống có trách nhiệm',
];

export const getHuitLayoutConfig = () => {
  const config = getConfig();
  return {
    bgImage: config.HUIT_BG_IMAGE,
    cardImage: config.HUIT_CARD_IMAGE,
    overlayColor: config.HUIT_OVERLAY_COLOR || 'rgba(3, 78, 162, 0.85)',
    logoUrl: config.LOGO_WHITE_URL || config.LOGO_URL,
  };
};

export default getHuitLayoutConfig;
