import '../../scss/layout/Filter.scss';

const FilterByName = ({ handleFilterByName, filterByName }) => {

  return (
    <fieldset className='fieldset byName'>
      <label htmlFor='name'>Busca por personaje: </label>
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

export default FilterByName;
