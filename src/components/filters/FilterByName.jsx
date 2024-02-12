import '../../scss/layout/Filter.scss';
import PropTypes from 'prop-types';

const FilterByName = ({ handleFilterByName, filterByName }) => {

  return (
    <fieldset className='fieldset byName'>
      <label htmlFor='name'>Busca por nombre de personaje: </label>
      <input
        className='input '
        type='text'
        name='name'
        id='name'
        value={filterByName}
        onChange={(ev) => handleFilterByName(ev.target.value)}
      />
   </fieldset>
  );
};
FilterByName.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
  filterByName: PropTypes.string.isRequired,
};

export default FilterByName;
