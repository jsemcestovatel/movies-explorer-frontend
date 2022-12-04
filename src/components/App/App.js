import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import auth from '../../utils/auth.js';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const history = useHistory();
  const location = useLocation();
  // ПОЛЬЗОВАТЕЛЬ
  // стейт авторизации
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // стейт активного пользователя
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });
  // стейт прелоадера
  const [isLoading, setIsLoading] = React.useState(true);
  // стейты ошибок регистрации, авторизации и редактирования профиля
  const [requestSignUpError, setRequestSignUpError] = React.useState({
    isRequestError: false,
    messageRequestError: '',
  });
  const [requestSignInError, setRequestSignInError] = React.useState({
    isRequestError: false,
    messageRequestError: '',
  });
  const [requestEditProfileError, setRequestEditProfileError] = React.useState({
    isRequestError: false,
    messageRequestError: '',
  });
  // ФИЛЬМЫ
  // стейт полученные фильмы при загрузке
  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);

  // стейт ошибки поиска
  const [requestSearchError, setRequestSearchError] = React.useState({
    isRequestError: false,
    messageRequestError: '',
  });

  // Авторизация
  function handleSignIn(data) {
    auth
      .signInApi(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          handleTokenCheck();
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log('Ошибка авторизации');
        console.log(err);
        if (err.statusCode === 400) {
          err.message = 'Вы ввели неправильный логин или пароль';
        }
        setRequestSignInError({
          isRequestError: true,
          messageRequestError: err.message,
        });
      });
  }

  // Проверка актуальности токена
  function handleTokenCheck() {
    // console.log('check');
    const token = localStorage.getItem('jwt');
    if (token) {
      auth
        .authApi(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser({ name: res.name, email: res.email });
            mainApi.setToken(token);
            history.push(location.pathname);
          }
        })
        .catch((err) => {
          console.log(`Возникла ошибка. ${err}`);
          handleSignOut();
        });
      return;
    }
    handleSignOut();
  }

  // Регистрация
  function handleSignUp(data) {
    auth
      .signUpApi(data)
      .then((res) => {
        if (res) {
          handleSignIn(data);
        }
      })
      .catch((err) => {
        console.log('Ошибка регистрации');
        setRequestSignUpError({
          isRequestError: true,
          messageRequestError: err.message,
        });
      });
  }

  // Выйти из аккаунта
  function handleSignOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    setAllMovies([]);
    setSavedMovies([]);
    setFilteredMovies([]);
    setFilteredSavedMovies([]);
    setCurrentUser({
      name: '',
      email: '',
    });
    history.push('/');
  }

  // Редактировать данные аккаунта
  function handleUpdateProfile(data) {
    mainApi
      .editProfileApi(data)
      .then((res) => {
        if (res) {
          setCurrentUser({ name: res.name, email: res.email });
          setRequestEditProfileError({
            isRequestError: true,
            messageRequestError: 'Данные обновлены',
          });
        }
      })
      .catch((err) => {
        console.log('Ошибка обновления профиля');
        setRequestEditProfileError({
          isRequestError: true,
          messageRequestError: err.message,
        });
      });
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  // Блок фильмы
  React.useEffect(() => {
    setRequestSearchError({
      isRequestError: false,
      messageRequestError: '',
    });  
    if (isLoggedIn) {
      // localStorage.setItem('shortMovie', false);
      // localStorage.setItem('searchText', '');
      getAllMovies();
      getSavedMovies();
      if (localStorage.getItem('searchMovies')) {
        setFilteredMovies(JSON.parse(localStorage.getItem('searchMovies')));
        if (JSON.parse(localStorage.getItem('searchMovies')).length === 0) {
          setRequestSearchError({
            isRequestError: true,
            messageRequestError: 'Ничего не найдено',
          });
        }
        setIsLoading(false);
      }
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      if (!localStorage.getItem('searchMovies')) {
        setRequestSearchError({
          isRequestError: false,
          messageRequestError: '',
        });
      }
    }
    if (location.pathname === '/saved-movies') {
      setRequestSearchError({
        isRequestError: false,
        messageRequestError: '',
      });  
      setFilteredSavedMovies(savedMovies);
    }
  }, [location]);

  function getAllMovies() {
    if (localStorage.getItem('allMovies')) {
      setAllMovies(JSON.parse(localStorage.getItem('allMovies')));
    } else {
      moviesApi
        .getAllMovies()
        .then((data) => {
          localStorage.setItem('allMovies', JSON.stringify(data));
          setAllMovies(data);
        })
        .catch((err) => {
          console.log(err);
          setRequestSearchError({
            isRequestError: true,
            messageRequestError:
              'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
          });
        });
    }
  }

  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
        setFilteredSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // сохранить в избранное
  function handlerAddSavedMovies(card) {
    addSavedMovies(card);
  }

  function addSavedMovies(card) {
    mainApi
      .addMovie(card)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        setFilteredSavedMovies([...savedMovies, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // убрать из избранного
  function handlerRemoveSavedMovies(card) {
    savedMovies.forEach((i) => {
      if (i.movieId === card.id) {
        removeSavedMovies(i);
      }
    });
  }

  function removeSavedMovies(card) {
    mainApi
      .removeMovie(card._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((i) => i.movieId !== card.movieId));
        setFilteredSavedMovies(
          savedMovies.filter((i) => i.movieId !== card.movieId),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // проверка наличия у фильма отметки избранного
  function handleBookmark(card) {
    if (!onCheckBookmark(card)) {
      handlerAddSavedMovies(card);
    } else {
      handlerRemoveSavedMovies(card);
    }
  }

  function onCheckBookmark(card) {
    return savedMovies.some((i) => i.movieId === card.id);
  }
  // Поиск в Фильмы
  function searchMovie(searchText) {
    // getAllMovies();
    const allMoviesPage = location.pathname === '/movies';
    const savedMoviesPage = location.pathname === '/saved-movies';
    const movies = allMoviesPage ? allMovies : savedMovies;

    setIsLoading(true);
    setRequestSearchError({ isRequestError: false, messageRequestError: '' });
    // setFilteredMovies([]);

    const filter = movies.filter((i) =>
      i.nameRU.toLowerCase().includes(searchText.toLowerCase()),
    );

    if (savedMoviesPage) {
      setRequestSearchError({
        isRequestError: false,
        messageRequestError: '',
      });
      if (!searchText) {
        setRequestSearchError({
          isRequestError: true,
          messageRequestError: 'Нужно ввести ключевое слово',
        });
        // return;
      }
      setFilteredSavedMovies(filter);
    }

    if (allMoviesPage) {
      if (!searchText) {
        setRequestSearchError({
          isRequestError: true,
          messageRequestError: 'Нужно ввести ключевое слово',
        });
        localStorage.removeItem('searchMovies');
        setFilteredMovies([]);
        setIsLoading(false);
        return;
      }
      setRequestSearchError({
        isRequestError: false,
        messageRequestError: '',
      });
      setFilteredMovies(filter);
      localStorage.setItem('searchMovies', JSON.stringify(filter));
    }

    if (filter.length === 0) {
      setRequestSearchError({
        isRequestError: true,
        messageRequestError: 'Ничего не найдено',
      });
      setIsLoading(false);
    }

    setIsLoading(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Header isLoggedIn={isLoggedIn} />
            <Main isLoggedIn={isLoggedIn} />
            <Footer />
          </Route>

          <ProtectedRoute
            component={Movies}
            exact
            path='/movies'
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            movies={filteredMovies}
            searchMovie={searchMovie}
            onBookmark={handleBookmark}
            onCheckBookmark={onCheckBookmark}
            setRequestSearchError={setRequestSearchError}
            requestSearchError={requestSearchError}
          ></ProtectedRoute>

          <ProtectedRoute
            component={SavedMovies}
            exact
            path='/saved-movies'
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            movies={filteredSavedMovies}
            searchMovie={searchMovie}
            removeSavedMovies={removeSavedMovies}
            setRequestSearchError={setRequestSearchError}
            requestSearchError={requestSearchError}
          ></ProtectedRoute>

          <ProtectedRoute
            component={Profile}
            exact
            path='/profile'
            isLoggedIn={isLoggedIn}
            onSignOut={handleSignOut}
            onUpdateProfile={handleUpdateProfile}
            requestEditProfileError={requestEditProfileError}
          ></ProtectedRoute>

          <Route path='/signup'>
            {isLoggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Register
                onSignUp={handleSignUp}
                requestSignUpError={requestSignUpError}
              />
            )}
          </Route>

          <Route path='/signin'>
            {isLoggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Login
                onSignIn={handleSignIn}
                requestSignInError={requestSignInError}
              />
            )}
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
