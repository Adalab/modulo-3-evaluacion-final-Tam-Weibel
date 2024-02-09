import '../../scss/layout/Character.scss';

const CharacterDetail = ({char}) => {
  return (
    <>
      <img className='card__img' src={char.image} alt={char.name} />
      <div className='card__info'>
        <h4 className='card__info--title'>{char.name}</h4>
        <p className='card__info--specs'>{char.species}</p>
      </div>
    </>
  )
}

export default CharacterDetail