import React from 'react';
import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav/LeftNav';

// ensure the left nav is always given the bx--side-nav--website--light class for light styling, instead of dark
const CustomLeftNav = props => <LeftNav {...props} homepage={false} theme="dark"  />;

export default CustomLeftNav;
