import { Link } from 'react-router-dom';
import header from '../images/header.png';

import '../scss/layout/Header.scss';

const Header = () => {
  return (
    <Link to='/'>
      <figure className='header'>
        <img className='header__img' src={header} alt='Harry Potter' />
      </figure>
    </Link>
  );
};

export default Header;
