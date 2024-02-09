import header from '../images/header.png'

import '../scss/layout/Header.scss'

const Header = () => {
  return (
    <figure className='header'>
      <img className='header__img' src={header} alt="Harry Potter" />
    </figure>
  )
}

export default Header