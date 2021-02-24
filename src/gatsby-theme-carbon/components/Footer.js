import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const currentYear = new Date().getFullYear();
const lastUpdated = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date());

const Content = () => (
  <>
    <p>
      Have questions? Email (sbudhira@us.ibm.com) or open an issue in{' '}
      <a href="https://github.ibm.com/maximo/manage-playbook/issues/new/choose">
        GitHub
      </a>
      .
      <br />
      <br />
      Last updated {lastUpdated}
      <br />
      Copyright © {currentYear} IBM
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of Use' },
    { href: 'https://www.ibm.com/', linkText: 'IBM.com' },
  ]
 
};

const CustomFooter = props => (
  <Footer {...props} links={links} Content={Content} />
);

export default CustomFooter;
