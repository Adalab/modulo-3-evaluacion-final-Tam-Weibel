import '../../scss/layout/Character.scss';
import { Link } from 'react-router-dom';
import Character from './Character';

const CharacterList = ({filteredCharacters, filterByName}) => {
  const noResults = "https://custom-doodle.com/wp-content/uploads/doodle/harry-potter-scar-glasses/harry-potter-scar-glasses-doodle.gif";

  const renderCharacters = filteredCharacters.map((character) => {
    return (
      <li className='card' key={character.id}>
        <Link to={`/character/${character.id}`}>
          <Character character={character}/>
        </Link>
      </li>
    );
  });
  
  return (
    <>
      <section className='cards'>
        <h2 className='cards__title'>Resultados de tu busqueda:</h2>
        <ul className='cards__list'>{filteredCharacters.length !== 0 ? (
            renderCharacters
          ) : (
            <li className='noResults'>
              <img className='noResults__img' src={noResults} alt="No results" />
              <p className='noResults__text'>No hay ningún personaje que coincida con la palabra {filterByName.toUpperCase()}</p>
            </li>
          )}
        </ul>
      </section>
    </>
  );
};

export default CharacterList;
