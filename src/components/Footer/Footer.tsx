import { FC } from 'react';

import bonos_01 from '../../images/bonos_01.webp';

const Footer: FC = () => {
    return (
      <footer>
        <div className='d-none d-lg-block h-400' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -120, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '100%', height: '400px'}} />
        <div className='d-none d-md-block d-lg-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -50, backgroundSize: 'cover', maxWidth: '100%', height: '300px'}} />
        <div className='d-none d-sm-block d-md-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -50, backgroundSize: 'cover', maxWidth: '100%', height: '200px'}} />
        <div className='d-xs-block d-sm-none d-md-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -35, backgroundSize: 'cover', maxWidth: '100%', height: '150px'}} />
      </footer>
    );
}

export default Footer;