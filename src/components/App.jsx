import '../scss/App.scss';
import ls from '../services/localStorage';
import getDataFromApi from '../services/api';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Filters from './filters/Filters';
import CharacterList from './characters/CharacterList';
import Character from './characters/Character';
import CharacterDetail from './characters/CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByHouse, setFilterByHouse] = useState('Gryffindor');

  useEffect(() => {
    getDataFromApi().then((dataFromApi) => {
      const cleanData = dataFromApi.map((character) => {
        if (character.image === '') {
          character.image =
            'https://placehold.co/200x270?text=No+Image+Available';
        }
        if (character.house === '') {
          character.house = 'none';
        }
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

  const filteredCharacters = characters
    .filter((char) => {
      return char.house === filterByHouse;
    })
    .filter((char) => char.name.toLowerCase().includes(filterByName));

  return (
    <div className='main'>
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
              />
              <CharacterList filteredCharacters={filteredCharacters} />
            </>
          }
        />
        <Route path='/character/:idCharacter' element={<CharacterDetail />} />
      </Routes>
    </div>
  );
};

export default App;
