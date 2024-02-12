import '../../scss/layout/Character.scss';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  return (
    <>
      <article className='card__info'>
        <img className='card__info--img' src={character.image} alt={character.name} />
        <h4 className='card__info--title'>{character.name}</h4>
        <p className='card__info--specs'>{character.species}</p>
      </article>
    </>
  );
};
Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
