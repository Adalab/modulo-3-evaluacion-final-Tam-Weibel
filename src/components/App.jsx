import '../scss/App.scss';
import ls from '../services/localStorage';
import getDataFromApi from '../services/api';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Filters from './filters/Filters';
import CharacterList from './characters/CharacterList';
import Character from './characters/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByHouse, setFilterByHouse] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData);
    })
  }, [])

  const handleFilterByName= (value) => {
    setFilterByName(value);
  }  

  const handleFilterByHouse= (value) => {
    setFilterByHouse(value);
  }  

  return (
    <div className='main'>
      <h2>Harry Potter!!!</h2>

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
              <CharacterList characters={characters} />
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
