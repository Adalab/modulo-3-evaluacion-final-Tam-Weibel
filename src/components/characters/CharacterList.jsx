import { Link } from 'react-router-dom';
import '../../scss/layout/Character.scss';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const renderCharacters = characters.map((char) => {
    console.log(characters);
    return (
        <li className='card' key={char.id}>
          <Character char={char} />
        </li>
        // {/*  <Link to={`/character/${character.id}`}> </Link> */}
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
