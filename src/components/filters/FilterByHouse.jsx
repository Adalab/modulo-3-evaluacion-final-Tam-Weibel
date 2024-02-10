import '../../scss/layout/Filter.scss';

const FilterByHouse = ({ handleFilterByHouse, filterByHouse }) => {
  return (
    <fieldset className='fieldset'>
      <label htmlFor='house'>Selecciona la casa: </label>
      <select
        type='text'
        id='house'
        onChange={(ev) => handleFilterByHouse(ev.target.value)}
        value={filterByHouse}
        className='input'
      >
        <option value='Gryffindor'>Gryffindor</option>
        <option value='Ravenclaw'>Ravenclaw</option>
        <option value='Slytherin'>Slytherin</option>
        <option value='Hufflepuff'>Hufflepuff</option>
        <option value='none'>Sin casa</option>
        <option value=''>Todos</option>
      </select>
    </fieldset>
  );
};

export default FilterByHouse;
