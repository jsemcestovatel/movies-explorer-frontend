import React from 'react';
import { useLocation } from 'react-router-dom';
import './Movies.css';

import Header from '../Header/Header';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import { SHORTTIME } from '../../utils/const';

function Movies({
  onBookmark,
  onCheckBookmark,
  requestSearchError,
  searchMovie,
  movies,
  isLoggedIn,
  isLoading,
}) {
  const location = useLocation();
  const [isShort, setIsShort] = React.useState(false);

  function handleIsShort() {
    setIsShort(!isShort);
    localStorage.setItem('shortMovie', !isShort);
  }

  React.useEffect(() => {
    if (localStorage.getItem('shortMovie')) {
      setIsShort(JSON.parse(localStorage.getItem('shortMovie')));
    }
  }, [location]);

  // Применение фильтра
  const listMovies = isShort
    ? movies.filter((item) => item.duration <= SHORTTIME)
    : movies;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <Search
        onIsShort={handleIsShort}
        isShort={isShort}
        searchMovie={searchMovie}
      />

      <ErrorMessage requestSearchError={requestSearchError} />

      {isLoading && <Preloader />}

      {!isLoading && (
        <MoviesCardList
          onBookmark={onBookmark}
          onCheckBookmark={onCheckBookmark}
          movies={listMovies}
        />
      )}

      <Footer />
    </>
  );
}

export default Movies;
