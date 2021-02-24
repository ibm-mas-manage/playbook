import React from 'react';
import Helmet from 'react-helmet';
import Meta from 'gatsby-theme-carbon/src/components/Meta';

import favicon16 from '../../images/favicons/favicon-16x16.png';
import favicon32 from '../../images/favicons/favicon-32x32.png';
import favicon64 from '../../images/favicons/favicon-64x64.png';
import favicon1024 from '../../images/favicons/favicon-1024x1024-with-padding.png';
import favicon16Dev from '../../images/favicons/favicon-16x16--dev.png';
import favicon32Dev from '../../images/favicons/favicon-32x32--dev.png';
import favicon64Dev from '../../images/favicons/favicon-64x64--dev.png';
import favicon1024Dev from '../../images/favicons/favicon-1024x1024-with-padding--dev.png';
import safariPinnedTabSVG from '../../images/favicons/safari-pinned-tab.svg';

const CustomMeta = props => {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <>
      <Meta {...props} />
      <Helmet
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${isDev ? favicon16Dev : favicon16}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${isDev ? favicon32Dev : favicon32}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '64x64',
            href: `${isDev ? favicon64Dev : favicon64}`,
          },
          {
            rel: 'apple-touch-icon',
            sizes: '1024x1024',
            href: `${isDev ? favicon1024Dev : favicon1024}`,
          },
          {
            rel: 'mask-icon',
            color: '#f3f3f3',
            href: `${safariPinnedTabSVG}`,
          },
        ]}
      />
    </>
  );
};

export default CustomMeta;
