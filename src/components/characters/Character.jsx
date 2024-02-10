import '../../scss/layout/Character.scss';

const Character = ({ character }) => {
  return (
    <>
      
      <div className='card__info'>
        <img className='card__info--img' src={character.image} alt={character.name} />
        <h4 className='card__info--title'>{character.name}</h4>
        <p className='card__info--specs'>{character.species}</p>
      </div>
    </>
  );
};

export default Character;
