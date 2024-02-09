import '../scss/App.scss';
import ls from '../services/localStorage';
import getDataFromApi from '../services/api';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Filters from './filters/Filters';
import CharacterList from './characters/CharacterList';
import Character from './characters/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByHouse, setFilterByHouse] = useState('');

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
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
  .filter((eachHouse)=>{
    return eachHouse.house === filterByHouse;
  })
  .filter((char) =>
    char.name.toLowerCase().includes(filterByName)
  );
  
console.log(filteredCharacters);
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
              <CharacterList characters={filteredCharacters} />
            </>
          }
        />
        <Route
          path='/character/:idCharacter'
          element={<Character character={characters} />}
        />
      </Routes>
    </div>
  );
};

export default App;
