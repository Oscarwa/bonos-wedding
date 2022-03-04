import { FC } from 'react';
import { ParallaxBanner } from "react-scroll-parallax";

import bonos_01 from '../../images/bonos_01.webp';

const Footer: FC = () => {
    return (
      <>
        <ParallaxBanner
          layers={[{ image: bonos_01, speed: 0}]}
          className="footer"
          style={{ height: "250px" }}
        />
      </>
    );
}

export default Footer;