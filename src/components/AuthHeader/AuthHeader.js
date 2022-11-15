import projectlogo from '../../images/LogoProject.svg';
import { Link } from 'react-router-dom';
import './AuthHeader.css';

function AuthHeader({ title }) {
  return (
    <header className='auth-header'>
      <Link to='/'>
        <img src={projectlogo} alt='Логотип проекта' className='auth-header__logo' />
      </Link>
      <h2 className='auth-header__title'>{title}</h2>
    </header>
  );
}

export default AuthHeader;
