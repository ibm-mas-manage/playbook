import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/design-system/start-designing', text: 'Start designing' },
  { href: '/design-system/start-developing', text: 'Start developing' },
  { href: '/team/designers', text: 'Team' },
  { href: '/resources', text: 'Resources' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
