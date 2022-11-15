import { useHistory } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  const history = useHistory();

  return (
    <section className='page404'>
      <h2 className='page404__title'>404</h2>
      <p className='page404__description'>Страница не найдена</p>
      <button className='button page404__back link' onClick={() => history.goBack()}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
