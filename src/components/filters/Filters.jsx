import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';

const Filters = ({
  handleFilterByName,
  filterByName,
  handleFilterByHouse,
  filterByHouse,
  handleFilterByGender,
  filterByGender,
  handleReset
}) => {
  return (
    <form className='form'>
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
      <button className='reset' onClick={handleReset}>Limpiar</button>
    </form>
  );
};

export default Filters;
