import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Knowledge Center',
    href:
      'https://www.ibm.com/support/knowledgecenter/SSRHPA_current/appsuite/kc_welcome.html',
  },
  {
    title: 'Download Document',
    href: 'https://www.ibm.com/support/pages/node/5694195',
  },
  {
    title: 'System Requirements',
    href:
      'https://www.ibm.com/support/pages/ibm-maximo-application-suite-system-requirements',
  },
  {
    title: 'IBM Cloud Pak Playbook',
    href: 'https://playbook.cloudpaklab.ibm.com/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = (props) => (
  <ResourceLinks {...props} shouldOpenNewTabs links={links} />
);

export default CustomResources;
