import '../../scss/layout/Filter.scss';

const FilterByGender = ({ handleFilterByGender, filterByGender }) => {
  return (
    <fieldset className='fieldset byGender'>
      <label htmlFor='gender'>Busca por genero: </label>
      <select
        type='text'
        id='gender'
        onChange={(ev) => handleFilterByGender(ev.target.value)}
        value={filterByGender}
        className='input'
      >
        <option value='mujer'>Mujer</option>
        <option value='hombre'>Hombre</option>
        <option value=''>Todos</option>
      </select>

    </fieldset>
  );
};

export default FilterByGender;