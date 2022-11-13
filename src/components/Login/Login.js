import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import AuthHeader from '../AuthHeader/AuthHeader';
import useForm from '../../hooks/useForm';

function Login({ onSignIn }) {
  const { values, handleChange, setValues } = useForm({});

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onSignIn();
  }

  return (
    <>
      <AuthHeader title='Рады видеть!' />
      <AuthForm
        formName='form-signin'
        buttonText='Войти'
        text='Ещё не зарегистрированы? '
        linkText='Регистрация'
        link='/signup'
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={values}
      />
    </>
  );
}

export default Login;
