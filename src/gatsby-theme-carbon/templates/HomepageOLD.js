import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon';

// Component to be shadowed
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import HomepageBannerBackground from '../../images/BackgroundImage-turbine.png';

const BannerText = () => (
  <>
    <h1 className="banner-text-blurb">
      IBM Maximo Application Suite, an integrated approach for managing the assets of the future.
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
