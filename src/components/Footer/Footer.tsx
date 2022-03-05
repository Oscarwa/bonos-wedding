import { FC } from 'react';
import { ParallaxBanner } from "react-scroll-parallax";

import bonos_01 from '../../images/bonos_01.webp';

const Footer: FC = () => {
    return (
      <footer>
        <img src={bonos_01} alt="bonos" style={{objectFit: 'cover', width: '100%', height: '400px'}} />
      </footer>
    );
}

export default Footer;