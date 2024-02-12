import '../scss/core/NotFoundPage.scss'

const NotFoundPage = () => {
  const errorImg = 'https://cdn.dribbble.com/users/2851002/screenshots/6870633/harry_potter.gif';
  return (
    <div className="notFoundPage">
      <h1 className="notFoundPage__title">Ups!</h1>
      <p className="notFoundPage__text">Parece que algo ha ido mal.</p>
      <p className="notFoundPage__text">El personaje que buscas no existe.</p>
      <figure className="notFoundPage__figure" >
        <img className="notFoundPage__figure--img" src={errorImg} alt='not found' />
      </figure>
    </div>
  );
};

export default NotFoundPage;
