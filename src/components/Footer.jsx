import '../scss/layout/Footer.scss';
import logo from '../images/logo.png';
import adalab from '../images/logo-adalab.png';

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/Tam-Weibel' target='_blank'>
        <img className='footer__img' src={logo} alt='logo TW' />
      </a>
      <a href='https://adalab.es/' target='_blank'>
        <img className='footer__img' src={adalab} alt='logo Adalab' />
      </a>
    </div>
  );
};

export default Footer;
