import { FC } from 'react';

import bonos_01 from '../../images/cover2.jpeg';

const Footer: FC = () => {
    return (
      <footer>
        <div className='d-none d-xl-block h-400' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -240, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '100%', height: '500px', filter: 'blur(1px)'}} />
        <div className='d-none d-lg-block d-xl-none h-400' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -80, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '100%', height: '400px', filter: 'blur(1px)'}} />
        <div className='d-none d-md-block d-lg-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -80, backgroundSize: 'cover', maxWidth: '100%', height: '300px', filter: 'blur(1px)'}} />
        <div className='d-none d-sm-block d-md-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -50, backgroundSize: 'cover', maxWidth: '100%', height: '200px', filter: 'blur(0px)'}} />
        <div className='d-xs-block d-sm-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -35, backgroundSize: 'cover', maxWidth: '100%', height: '150px', filter: 'blur(0px)'}} />
      </footer>
    );
}

export default Footer;