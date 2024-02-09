import '../scss/App.scss';
import ls from '../services/localStorage';
import getDataFromApi from '../services/api';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
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
      console.log(dataFromApi)
      const cleanData = dataFromApi.map((character) => {
        if (character.image === '') {
          character.image = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdpbHIycG85aWx1a2NweTkxZmFqdnVpMWNmZzQ5d2lrc2t4a2pyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3zhxq2ttgN6rEw8SDx/giphy.gif';
        }
        if (character.house === '') {
          character.house = 'none';
        }
        if (character.gender === 'female'){
          character.gender = 'mujer'
        } else{
          character.gender = 'hombre'
        }
        if (character.alive){
          character.alive = '❤️'
        } else{
          character.alive = '💀'
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

    const { pathname } = useLocation();
    const routeData = matchPath("/character/:idCharacter", pathname)
    const idCharacter = routeData !== null ? routeData.params.idCharacter : null;
    const characterData = characters.find((char) => char.id === idCharacter);

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
              />
              <CharacterList filteredCharacters={filteredCharacters} />
            </>
          }
        />
        <Route path='/character/:idCharacter' element={<CharacterDetail characterData={characterData}/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
