import Character from './Character';
import { Link } from 'react-router-dom';
import '../../scss/layout/Character.scss';

const CharacterList = ({ characters }) => {
  const renderCharacters = characters.map((character) => {
    console.log(characters);
    return (
      <li className='card' key={character.id}>
        <img className='card__img' src={character.image} alt={character.name} />
        <div className='card__info'>
          <h4 className='card__info--title'>{character.name}</h4>
          <p className='card__info--specs'>{character.species}</p>
        </div>
        {/* <Character character={character} /> */}
        {/* // <Link to={`/character/${character.id}`}>
        //   />
        // </Link> */}
      </li>
    );
  });

  return (
    <>
      <section className='characters'>
        <ul className='cards'>{renderCharacters}</ul>
      </section>
    </>
  );
};

export default CharacterList;
