import '../../scss/layout/Character.scss';
import { Link } from 'react-router-dom';
import Character from './Character';

const CharacterList = ({filteredCharacters}) => {
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
      <section className='characters'>
        <ul className='cards'>{filteredCharacters.length !== 0 ? (
            renderCharacters
          ) : (
            <li className='noResults'>{'No hay resultados para la búsqueda'}</li>
          )}
        </ul>
      </section>
    </>
  );
};

export default CharacterList;
