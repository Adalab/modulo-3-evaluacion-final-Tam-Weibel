import '../../scss/layout/Character.scss';

const Character = ({ character }) => {
  return (
    <>
      <img className='card__img' src={character.image} alt={character.name} />
      <div className='card__info'>
        <h4 className='card__info--title'>{character.name}</h4>
        <p className='card__info--specs'>{character.species}</p>
      </div>
    </>
  );
};

export default Character;
