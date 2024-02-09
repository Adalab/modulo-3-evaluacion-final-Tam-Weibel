import header from '../images/header.png'
import '../scss/layout/Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <img className='header__img' src={header} alt="Harry Potter" />
    </div>
  )
}

export default Header