import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import EntryPoint from './EntryPoint';

function Register({ onSubmit }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const handleRegisterUserSubmit = (evt) => {
    evt.preventDefault();
    const cleanUp = () => {
      setEmail('');
      setPassword('');

      history.push('/sign-in');
    };

    onSubmit(email, password, cleanUp);
  };

  return (
    <EntryPoint
      onSubmit={handleRegisterUserSubmit}
      inputs={
        <>
          <h2 className="form__title form__title_type_login">Регистрация</h2>
          <label className="form__label form__label_type_login" htmlFor="register-email-input">
            <input
              id="register-email-input"
              className="form__input-text form__input-text_type_login"
              type="email"
              placeholder="Email"
              required
              minLength="2"
              maxLength="30"
              value={email}
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
            />
          </label>
          <label className="form__label form__label_type_login" htmlFor="register-password-input">
            <input
              id="register-password-input"
              className="form__input-text form__input-text_type_login"
              type="password"
              placeholder="Пароль"
              required
              minLength="2"
              maxLength="30"
              autoComplete="false"
              value={password}
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
            />
          </label>
          <button className="form__submit-button login__submit_type_login" type="submit">
            Зарегистрироваться
          </button>
          <Link className="form__sign-in-link" to="/sign-in">
            Уже зарегистрированы? Войти
          </Link>
        </>
      }
    />
  );
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Register;
