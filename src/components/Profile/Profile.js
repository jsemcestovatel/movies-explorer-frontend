import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

import Header from '../Header/Header';
import './Profile.css';

function Profile({ isLoggedIn, onSignOut, onEditProfile }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});

  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах
  React.useEffect(() => {
    setValues({
      name: currentUser != null ? currentUser.name : '',
      email: currentUser != null ? currentUser.email : '',
    });
  }, [currentUser]);

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    // ...
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className='profile'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form className='profile__form' name='profile' onSubmit={handleSubmit}>
          <div className='profile__list'>
            <div className='profile__item'>
              <span className='profile__caption'>Имя</span>
              <input
                type='text'
                id='name'
                name='name'
                required
                minLength='2'
                maxLength='40'
                onChange={handleChange}
                value={values.name || ''}
                className='profile__input'
              />
            </div>
            <div className='profile__item'>
              <span className='profile__caption'>E-mail</span>
              <input
                type='email'
                id='email'
                name='email'
                required
                onChange={handleChange}
                value={values.email || ''}
                className='profile__input'
              />
            </div>
          </div>
          <button
            className='profile__button profile__button_submit button link'
            type='submit'
            onClick={onEditProfile}
          >
            Редактировать
          </button>
          <button
            className='profile__button profile__button_signout button link'
            type='button'
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
