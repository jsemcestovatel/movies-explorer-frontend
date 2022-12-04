import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import * as params from '../../utils/const';
import { useLocation } from 'react-router-dom';

function MoviesCardList({
  onBookmark,
  onCheckBookmark,
  removeSavedMovies,
  movies,
}) {
  const location = useLocation();
  const savedMoviesPage = location.pathname === '/saved-movies';

  // стейт отображаемого количества карточек фильмов
  const [moviesOnView, setMoviesOnView] = React.useState(0);
  // стейт значения шириины дисплея пользователя
  const [screen, setScreen] = React.useState(window.innerWidth);

  // Значения беру из констант
  function countCards() {
    if (screen >= params.LARGESCREEN) {
      setMoviesOnView(params.DEFAULTONLARGESCREEN);
    } else if (screen < params.LARGESCREEN && screen >= params.MIDDLESCREEN) {
      setMoviesOnView(params.DEFAULTONMIDDLESCREEN);
    } else if (screen <= params.MIDDLESCREEN) {
      setMoviesOnView(params.DEFAULTONSMALLSCREEN);
    }
  }

  React.useEffect(() => {
    countCards();
  }, []);

  window.onresize = function () {
    setTimeout(() => {
      countCards();
      setScreen(window.innerWidth);
    }, 1000);
  };

  function handleLoadMore() {
    if (screen >= params.LARGESCREEN) {
      setMoviesOnView(moviesOnView + params.INCREASEONLARGESCREEN);
    } else if (screen < params.LARGESCREEN && screen >= params.MIDDLESCREEN) {
      setMoviesOnView(moviesOnView + params.INCREASEONMIDDLESCREEN);
    } else if (screen <= params.MIDDLESCREEN) {
      setMoviesOnView(moviesOnView + params.INCREASEONSMALLSCREEN);
    }
  }

  return (
    <section className='movies'>
      <ul className='movies__elements'>
        {movies.slice(0, savedMoviesPage ? movies.length : moviesOnView).map((item) => (
          <MoviesCard
            key={item.id || item.movieId}
            card={item}
            onBookmark={onBookmark}
            onCheckBookmark={onCheckBookmark}
            removeSavedMovies={removeSavedMovies}
          />
        ))}
      </ul>

      {/* скрою кнопку если карточек не достаточно или на странице сохранённых фильмов*/}
      {!savedMoviesPage && movies.length > moviesOnView && (
        <More onLoadMore={handleLoadMore} />
      )}
    </section>
  );
}

export default MoviesCardList;
