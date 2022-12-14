import React from 'react';
import './SavedMovies.css';

import Header from '../Header/Header';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Footer from '../Footer/Footer';

import { SHORTTIME } from '../../utils/const';

function SavedMovies({
  requestSearchError,
  searchMovie,
  setRequestSearchError,
  removeSavedMovies,
  movies,
  isLoggedIn,
}) {
  const [isShort, setIsShort] = React.useState(false);

  function handleIsShort() {
    setIsShort(!isShort);
  }
  // Применение фильтра
  const listMovies = isShort
    ? movies.filter((item) => item.duration <= SHORTTIME)
    : movies;

  React.useEffect(() => {
    setRequestSearchError({
      isRequestError: false,
      messageRequestError: '',
    });
    listMovies.length === 0 &&
      setRequestSearchError({
        isRequestError: true,
        messageRequestError: 'Ничего не найдено',
      });
  }, [isShort]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <Search
        onIsShort={handleIsShort}
        isShort={isShort}
        searchMovie={searchMovie}
      />

      <ErrorMessage requestSearchError={requestSearchError} />

      <MoviesCardList
        movies={listMovies}
        removeSavedMovies={removeSavedMovies}
      />

      <Footer />
    </>
  );
}

export default SavedMovies;
