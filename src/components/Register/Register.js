import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import AuthHeader from '../AuthHeader/AuthHeader';
import useForm from '../../hooks/useForm';

function Register({onSignUp}) {
  const { values, handleChange, setValues } = useForm({});

  // React.useEffect(() => {
  //   setValues({
  //     name: values.name,
  //     email: values.email,
  //     password: values.password,
  //   });
  // }, [values]);

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onSignUp();
  }

  return (
    <>
      <AuthHeader title='Добро пожаловать!'/>
      <AuthForm
        formName='form-signup'
        buttonText='Зарегистрироваться'
        text='Уже зарегистрированы? '
        linkText='Войти'
        link='/signin'
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={values}
      />
    </>
  );
}

export default Register;