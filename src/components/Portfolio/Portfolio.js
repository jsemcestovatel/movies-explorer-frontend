import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='link'
            href='https://github.com/jsemcestovatel/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            <div className='portfolio__container'>
              <p className='portfolio__name'>Статичный сайт</p>
              <p className='portfolio__name'>&#8599;</p>
            </div>
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='link'
            href='https://github.com/jsemcestovatel/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            <div className='portfolio__container'>
              <p className='portfolio__name'>Адаптивный сайт</p>
              <p className='portfolio__name'>&#8599;</p>
            </div>
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='link'
            href='https://github.com/jsemcestovatel/react-mesto-api-full'
            target='_blank'
            rel='noreferrer'
          >
            <div className='portfolio__container'>
              <p className='portfolio__name'>Одностраничное приложение</p>
              <p className='portfolio__name'>&#8599;</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
