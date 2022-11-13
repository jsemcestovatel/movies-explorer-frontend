import { Link } from 'react-router-dom';

import './Header.css';
import projectlogo from '../../images/LogoProject.svg';
import HeaderWithAuth from '../HeaderWithAuth/HeaderWithAuth';
import HeaderNotAuth from '../HeaderNotAuth/HeaderNotAuth';

function Header({ isLoggedIn }) {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={projectlogo} alt='Логотип проекта' className='header__logo' />
      </Link>
      {isLoggedIn ? <HeaderWithAuth /> : <HeaderNotAuth />}
    </header>
  );
}

export default Header;
