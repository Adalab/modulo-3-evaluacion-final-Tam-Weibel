import '../scss/core/ErrorPage.scss'

const ErrorPage = () => {
  const errorImg = 'https://cdn.dribbble.com/users/2851002/screenshots/6870633/harry_potter.gif';
  return (
    <div className="errorPage">
      <h1 className="errorPage__title">Ups!</h1>
      <p className="errorPage__text">Parece que algo ha ido mal.</p>
      <p className="errorPage__text">El personaje que buscas no existe.</p>
      <figure className="errorPage__figure" >
        <img className="errorPage__figure--img" src={errorImg} alt='not found' />
      </figure>
    </div>
  );
};

export default ErrorPage;
