import React from 'react';

import { breakpoints } from '@openedx/paragon';
import MediaQuery from 'react-responsive';

import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

const HuitLayout = ({ children }) => (
  <>
    <MediaQuery maxWidth={breakpoints.small.maxWidth - 1}>
      <MobileLayout>{children}</MobileLayout>
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.small.minWidth}>
      <DesktopLayout>{children}</DesktopLayout>
    </MediaQuery>
  </>
);

export default HuitLayout;
