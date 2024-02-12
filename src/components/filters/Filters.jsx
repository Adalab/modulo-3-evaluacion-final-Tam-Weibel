import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';
import PropTypes from 'prop-types';


const Filters = ({
  handleFilterByName,
  filterByName,
  handleFilterByHouse,
  filterByHouse,
  handleFilterByGender,
  filterByGender,
  handleFilterBySpecies,
  filterBySpecies,
  handleReset,
  filteredCharacters,
}) => {
  return (
    <>
      <form className='form'>
        <h2 className='form__title'>Busca tu personaje favorito:</h2>
        <FilterByName
          handleFilterByName={handleFilterByName}
          filterByName={filterByName}
        />
        <FilterByHouse
          handleFilterByHouse={handleFilterByHouse}
          filterByHouse={filterByHouse}
        />
        <FilterByGender
          handleFilterByGender={handleFilterByGender}
          filterByGender={filterByGender}
        />
        <FilterBySpecies
          filteredCharacters={filteredCharacters}
          handleFilterBySpecies={handleFilterBySpecies}
          filterBySpecies={filterBySpecies}
        />
        <button className='reset' onClick={handleReset}>
          Limpiar
        </button>
      </form>
    </>
  );
};

Filters.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
  handleFilterByHouse: PropTypes.func.isRequired,
  handleFilterByGender: PropTypes.func.isRequired,
  handleFilterBySpecies: PropTypes.func.isRequired,
  filterByName: PropTypes.string.isRequired,
  filterByHouse: PropTypes.string.isRequired,
  filterByGender: PropTypes.string.isRequired,
  filterBySpecies: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
  filteredCharacters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filters;
