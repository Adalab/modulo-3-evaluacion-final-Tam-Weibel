import '../scss/App.scss';
import ls from '../services/localStorage';
import getDataFromApi from '../services/api';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Filters from './filters/Filters';
import CharacterList from './characters/CharacterList';
import CharacterDetail from './characters/CharacterDetail';

const noImage =
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdpbHIycG85aWx1a2NweTkxZmFqdnVpMWNmZzQ5d2lrc2t4a2pyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3zhxq2ttgN6rEw8SDx/giphy.gif';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState(ls.get('filterByName') || '');
  const [filterByHouse, setFilterByHouse] = useState(ls.get('filterByHouse') || 'Gryffindor');

  useEffect(() => {
    getDataFromApi().then((dataFromApi) => {
      const cleanData = dataFromApi.map((character) => {
        character.image = character.image !== '' ? character.image : noImage;
        character.house = character.house !== '' ? character.house : 'none';
        character.gender = character.gender === 'female' ? 'mujer' : 'hombre';
        character.alive = character.alive ? 'vivo/a ❤️' : 'muerto/a 💀';
        return character;
      });
      setCharacters(cleanData);
    });
  }, []);

  const handleFilterByName = (value) => {
    setFilterByName(value);
  };

  const handleFilterByHouse = (value) => {
    setFilterByHouse(value);
  };

  ls.set('filterByName', filterByName);
  ls.set('filterByHouse', filterByHouse);

  const filteredCharacters = characters
    .filter((char) => filterByHouse === '' || char.house === filterByHouse)
    .filter((char) => char.name.toLowerCase().includes(filterByName))
    .sort((a, b) => a.name.localeCompare(b.name));

  const { pathname } = useLocation();
  const routeData = matchPath('/character/:idCharacter', pathname);
  const characterId = routeData !== null ? routeData.params.idCharacter : '';
  const characterData =
    characters.find((char) => char.id === characterId) ||
    ls.get('characterData');

  const handleReset = () => {
    ls.clear('filterByName', 'filterByHouse');
    setFilterByName('');
    setFilterByHouse('Gryffindor');
  };

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Filters
                handleFilterByName={handleFilterByName}
                filterByName={filterByName}
                handleFilterByHouse={handleFilterByHouse}
                filterByHouse={filterByHouse}
                handleReset={handleReset}
              />
              <CharacterList
                filteredCharacters={filteredCharacters}
                filterByName={filterByName}
              />
            </>
          }
        />
        <Route
          path='/character/:characterId'
          element={<CharacterDetail characterData={characterData} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;