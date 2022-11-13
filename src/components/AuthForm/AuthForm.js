import React from 'react';
import { Link } from 'react-router-dom';

import './AuthForm.css';

function AuthForm({
  onChange,
  onSubmit,
  formName,
  value,
  buttonText,
  text,
  link,
  linkText,
}) {
  const [isError, setIsError] = React.useState(false);

  return (
    <main className='auth'>
      <form className='auth__form' name={formName} onSubmit={onSubmit}>
        <div className='auth__list'>
          {formName === 'form-signup' && (
            <div className='auth__item'>
              <span className='auth__caption'>Имя</span>
              <input
                className={`${
                  isError ? 'auth__input auth__input_active' : 'auth__input'
                }`}
                type='text'
                id='name'
                name='name'
                minLength='2'
                maxLength='40'
                required
                onChange={onChange}
                value={value.name || ''}
              />
              <span
                className={`${
                  isError ? 'auth_error auth_error_active' : 'auth_error'
                }`}
              >
                Что-то пошло не так...
              </span>
            </div>
          )}

          <div className='auth__item'>
            <span className='auth__caption'>E-mail</span>
            <input
              className={`${
                isError ? 'auth__input auth__input_active' : 'auth__input'
              }`}
              type='email'
              id='email'
              name='email'
              required
              onChange={onChange}
              value={value.email || ''}
            />
            <span
              className={`${
                isError ? 'auth_error auth_error_active' : 'auth_error'
              }`}
            >
              Что-то пошло не так...
            </span>
          </div>

          <div className='auth__item'>
            <span className='auth__caption'>Пароль</span>
            <input
              className={`${
                isError ? 'auth__input auth__input_active' : 'auth__input'
              }`}
              type='password'
              id='password'
              name='password'
              required
              onChange={onChange}
              value={value.password || ''}
            />
            <span
              className={`${
                isError ? 'auth_error auth_error_active' : 'auth_error'
              }`}
            >
              Что-то пошло не так...
            </span>
          </div>
        </div>

        <div className='auth__submit'>
          <button className='auth__button link' type='submit'>
            {buttonText}
          </button>
          <p className='auth__text'>
            {text}
            <Link className='auth__link link' to={link}>
              {linkText}
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
export default AuthForm;
