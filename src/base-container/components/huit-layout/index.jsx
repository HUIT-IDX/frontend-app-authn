import React from 'react';

import { breakpoints } from '@openedx/paragon';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import LargeLayout from './LargeLayout';
import MediumLayout from './MediumLayout';
import SmallLayout from './SmallLayout';

// Same breakpoint ranges as the upstream default layout in ../../index.jsx:
// phones get a form-only card, tablets a banner card, desktops a split card.
const HuitLayout = ({ children }) => (
  <>
    <MediaQuery maxWidth={breakpoints.small.maxWidth - 1}>
      <SmallLayout>{children}</SmallLayout>
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
      <MediumLayout>{children}</MediumLayout>
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
      <LargeLayout>{children}</LargeLayout>
    </MediaQuery>
  </>
);

HuitLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HuitLayout;
