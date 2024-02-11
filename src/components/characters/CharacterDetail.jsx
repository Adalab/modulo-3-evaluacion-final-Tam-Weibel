import '../../scss/layout/CharacterDetail.scss';
import ls from '../../services/localStorage';
import Hufflepuff from '../../images/Hufflepuff.png';
import Gryffindor from '../../images/Gryffindor.png';
import Ravenclaw from '../../images/Ravenclaw.png';
import Slytherin from '../../images/Slytherin.png';
import none from '../../images/none.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faAngleLeft} />;
const CharacterDetail = ({ characterData }) => {
  ls.set('characterData', characterData)
 
  const houseImage = () => {
    let house;
    if (characterData.house === 'Gryffindor') {
      house = Gryffindor;
    } else if (characterData.house === 'Ravenclaw') {
      house = Ravenclaw;
    } else if (characterData.house === 'Slytherin') {
      house = Slytherin;
    } else if (characterData.house === 'Hufflepuff') {
      house = Hufflepuff;
    } else if (characterData.house === 'none') {
      house = none;
    } return house
  };
  return (
    <div className='detailPage'>
      <Link to='/'>
        <p className='return'>{element} volver</p>
      </Link>
      <div className='detail'>
        <img className='detail__img' src={characterData.image} alt={characterData.name}/>
        <div className='detail__info'>
          <h4 className='detail__info--title'>{characterData.name}</h4>
          <p className='detail__info--specs'>Genero: {characterData.gender}</p>
          <p className='detail__info--specs'>Estatus: {characterData.alive}</p>
          <p className='detail__info--specs'>Especie: {characterData.species}</p>
          <p className='detail__info--specs'>Casa: {characterData.house}</p>
        </div>
        <img className='detail__house' src={houseImage()} alt={characterData.house}/>
      </div>
    </div>
  );
};

export default CharacterDetail;
