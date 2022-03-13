import { FC } from 'react';

import bonos_01 from '../../images/cover2.jpeg';

const MadeBy: FC = () => {
  return <div className='fs-2 color-ivory d-flex align-items-start h-100 shadow-charcoal goldleaf ps-4'>Made with ♥ by Oscar</div>
}

const Footer: FC = () => {
    return (
      <footer className=''>
        <div className='d-none d-xl-block h-400' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -240, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '100%', height: '500px', filter: 'blur(1px)'}}><MadeBy /></div>
        <div className='d-none d-lg-block d-xl-none h-400' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -80, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '100%', height: '400px', filter: 'blur(1px)'}}><MadeBy /></div>
        <div className='d-none d-md-block d-lg-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -80, backgroundSize: 'cover', maxWidth: '100%', height: '300px', filter: 'blur(1px)'}}><MadeBy /></div>
        <div className='d-none d-sm-block d-md-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -50, backgroundSize: 'cover', maxWidth: '100%', height: '200px', filter: 'blur(0px)'}}><MadeBy /></div>
        <div className='d-xs-block d-sm-none' style={{ backgroundImage: `url(${bonos_01})`, backgroundPositionY: -35, backgroundSize: 'cover', maxWidth: '100%', height: '150px', filter: 'blur(0px)'}}><MadeBy /></div>
      </footer>
    );
}

export default Footer;