import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

const Filters = ({
  handleFilterByName,
  filterByName,
  handleFilterByHouse,
  filterByHouse,
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
        handleReset={handleReset}
      />
    </form>
  );
};

export default Filters;
