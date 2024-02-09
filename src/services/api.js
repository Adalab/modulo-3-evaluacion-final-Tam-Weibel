const getDataFromApi = () => {
    return fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.map((character) => {
          if(character.image === ''){
            character.image ='https://placehold.co/200x270?text=No+Image+Available';
          }
          if(character.house === ''){
            character.house = 'none'
          }
          return {
            id: character.id,
            image: character.image,
            name: character.name,
            house: character.house,
            species: character.species,
            alive: character.alive,
          };
        });
        return cleanData;
      });
  };
  export default getDataFromApi;
  