import React from 'react';
import PropTypes from 'prop-types';
import EntryPoint from './EntryPoint';

function Login({ onSubmit }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegisterUserSubmit = (evt) => {
    evt.preventDefault();
    const cleanUp = () => {
      setEmail('');
      setPassword('');
    };

    onSubmit(email, password, cleanUp);
  };

  return (
    <EntryPoint
      onSubmit={handleRegisterUserSubmit}
      inputs={
        <>
          <h2 className="form__title form__title_type_login">Вход</h2>
          <label className="form__label form__label_type_login" htmlFor="login-email-input">
            <input
              id="login-email-input"
              className="form__input-text form__input-text_type_login"
              type="text"
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
          <label className="form__label form__label_type_login" htmlFor="login-password-input">
            <input
              id="login-password-input"
              className="form__input-text form__input-text_type_login"
              type="password"
              autoComplete="false"
              placeholder="Пароль"
              required
              minLength="2"
              maxLength="30"
              value={password}
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
            />
          </label>
          <button className="form__submit-button login__submit_type_login" type="submit">
            Войти
          </button>
        </>
      }
    />
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
