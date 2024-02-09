import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

const Filters = ({
  handleFilterByName,
  filterByName,
  handleFilterByHouse,
  filterByHouse,
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
    </form>
  );
};

export default Filters;
