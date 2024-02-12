import '../../scss/layout/Filter.scss';
import PropTypes from 'prop-types';

const FilterByGender = ({ handleFilterByGender, filterByGender }) => {
  return (
    <fieldset className='fieldset byGender'>
      <div className='genderOptions'>
      <legend>Busca por género:</legend>
        <label className='genderOptions__label'>
          <input
            type='radio'
            name='gender'
            value='mujer'
            checked={filterByGender === 'mujer'}
            onChange={() => handleFilterByGender('mujer')}
          />
          Mujer
        </label>

        <label className='genderOptions__label'>
          <input
            type='radio'
            name='gender'
            value='hombre'
            checked={filterByGender === 'hombre'}
            onChange={() => handleFilterByGender('hombre')}
          />
          Hombre
        </label>

        <label className='genderOptions__label'>
          <input
            type='radio'
            name='gender'
            value=''
            checked={filterByGender === ''}
            onChange={() => handleFilterByGender('')}
          />
          Todos
        </label>
      </div>
    </fieldset>
  );
};

FilterByGender.propTypes = {
  handleFilterByGender: PropTypes.func.isRequired,
  filterByGender: PropTypes.string.isRequired,
};

export default FilterByGender;