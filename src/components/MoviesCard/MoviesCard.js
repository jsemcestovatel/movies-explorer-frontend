import React from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ card }) {
  const currentPathname = useLocation();
  
  const [isBookmark, setIsBookmark] = React.useState(false);
  function handleBookmarkClick() {
    setIsBookmark(!isBookmark);
  }

  const savedMoviesPage = currentPathname.pathname === '/saved-movies';
  const buttonClassName = savedMoviesPage ? `element__bookmark element__bookmark_delete link` : `element__bookmark ${
    isBookmark ? 'element__bookmark_add' : 'element__bookmark_empty'
  } link`

  return (
    <li className='element'>
      <div className='element__description'>
        <div>
          <h4 className='element__name'>{card.name}</h4>
          <p className='element__duration'>{card.duration}</p>
        </div>
        <button
          className={buttonClassName}
          type='button'
          onClick={handleBookmarkClick}
        ></button>
      </div>
      <img
        src={card.link}
        alt={`Иллюстрация фильма ${card.name}`}
        className='element__image'
      />
    </li>
  );
}

export default MoviesCard;
