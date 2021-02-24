import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon';

// Component to be shadowed
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import HomepageBannerBackground from '../../images/mas.png';

const BannerText = () => (
  <>
    <h1 className="banner-text-blurb">
      IBM Maximo EAM to Manage Technology Upgrade & Considerations
    </h1>
  </>
);

const customProps = {
  Banner: (
    <HomepageBanner renderText={BannerText} image={HomepageBannerBackground} />
  ),
  FirstCallout: <></>,
  SecondCallout: <></>,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
