import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

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

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Anatoliy',
    email: 'hello@yandex.ru',
  });

  function handleSignIn(email, password) {
    setIsLoggedIn(true);
    history.push('/movies');
  }

  function handleSignUp(name, email, password) {
    setIsLoggedIn(true);
    history.push('/movies');
  }

  function handleSignOut(name, email, password) {
    setIsLoggedIn(false);
    setCurrentUser({
      name: '',
      email: '',
    });
    history.push('/');
  }

  function handleEditProfile(name, email) {
    setIsLoggedIn(true);
    history.push('/movies');
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
          ></ProtectedRoute>

          <ProtectedRoute
            component={Profile}
            exact
            path='/profile'
            isLoggedIn={isLoggedIn}
            onSignOut={handleSignOut}
            onEditProfile={handleEditProfile}
          ></ProtectedRoute>

          <ProtectedRoute
            component={SavedMovies}
            exact
            path='/saved-movies'
            isLoggedIn={isLoggedIn}
          ></ProtectedRoute>

          <Route path='/signup'>
            {isLoggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Register onSignUp={handleSignUp} />
            )}
          </Route>

          <Route path='/signin'>
            {isLoggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Login onSignIn={handleSignIn} />
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
