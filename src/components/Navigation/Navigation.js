import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <NavLink exact to='/' activeClassName='navigation__item_active' className='navigation__item navigation__item_hidden link'>
        Главная
      </NavLink>
      <NavLink exact to='/movies' activeClassName='navigation__item_active' className='navigation__item link'>
        Фильмы
      </NavLink>
      <NavLink exact to='/saved-movies' activeClassName='navigation__item_active' className='navigation__item link'>
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
