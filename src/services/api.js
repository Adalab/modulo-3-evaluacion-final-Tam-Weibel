const getDataFromApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const dataFromApi = data.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          house: character.house,
          species: character.species,
          alive: character.alive,
          gender: character.gender
        };
      });
      return dataFromApi;
    });
};
export default getDataFromApi;
