import './NavTab.css';

function NavTab() {
  return (
    <nav>
      <ul className='nav-tab nav-tab_96'>
        <li>
          <a href='#aboutproject' className='nav-tab__item link'>О проекте</a>
        </li>
        <li>
          <a href='#techs' className='nav-tab__item link'>Технологии</a>
        </li>
        <li>
          <a href='#aboutme' className='nav-tab__item link'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
