import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return (
    <main className='page404'>
      <h2 className='page404__title'>404</h2>
      <p className='page404__description'>Страница не найдена</p>
      <Link className='button page404__back link' to={'/'}>
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
