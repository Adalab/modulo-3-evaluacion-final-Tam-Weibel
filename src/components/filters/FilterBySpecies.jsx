import '../../scss/layout/Filter.scss';
import PropTypes from 'prop-types';

const FilterBySpecies = ({ filteredCharacters, handleFilterBySpecies, filterBySpecies }) => {
  const speciesOptions = Array.from(new Set(filteredCharacters.map((char) => char.species)));

  return (
    <fieldset className='fieldset bySpecies'>
      <label>Buscar por la especie:</label>
      <select
        className='input'
        value={filterBySpecies}
        onChange={(ev) => handleFilterBySpecies(ev.target.value)}
      >
        <option value=''>Todos</option>
        {speciesOptions.map((species) => (
          <option key={species} value={species}>
            {species}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

FilterBySpecies.propTypes = {
  filteredCharacters: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFilterBySpecies: PropTypes.func.isRequired,
  filterBySpecies: PropTypes.string.isRequired
};

export default FilterBySpecies;