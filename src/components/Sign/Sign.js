import { Link } from 'react-router-dom';
import './Sign.css';

function Sign() {
  return (
    <div className='sign'>
      <Link to='/signup' className='sign__link link'>
        Регистрация
      </Link>
      <Link to='signin' className='sign__link sign__link_active link'>
        Войти
      </Link>
    </div>
  );
}

export default Sign;
