import '../../scss/layout/Character.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faAngleLeft} />
const CharacterDetail = ({characterData}) => {
  
  return (
    <>
      <Link to='/'>
        <p className='return'>{element} Volver</p>
      </Link>
      <div className='cardDetail'>
        <img className='card__img' src={characterData.image} alt={characterData.name} />
        <div className='card__info'>
          <h4 className='card__info--title'>{characterData.name}</h4>
          <p className='card__info--specs'>Genero: {characterData.gender}</p>
          <p className='card__info--specs'>Estatus vital: {characterData.alive}</p>
          <p className='card__info--specs'>Especie: {characterData.species}</p>
          <p className='card__info--specs'>Casa: {characterData.house}</p>
        </div>
      </div>
    </>
  )
}

export default CharacterDetail