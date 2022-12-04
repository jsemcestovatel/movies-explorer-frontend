import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import AuthHeader from '../AuthHeader/AuthHeader';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login({ onSignIn, requestSignInError }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const isDisabled = !isValid;

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onSignIn(values);
  }

  React.useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

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
        isSubmitDisabled={isDisabled}
        onChange={handleChange}
        value={values}
        error={errors}
        requestError={requestSignInError}
      />
    </>
  );
}

export default Login;
