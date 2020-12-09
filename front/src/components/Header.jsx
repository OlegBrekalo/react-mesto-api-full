import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/mesto-logo.svg';
import CurrentUserContext from '../contexts/currentUser';

function Header({ loggedIn, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className="header content-section">
      <Link to="/">
        <img src={logo} alt="Место-Логотип" className="header__logo" />
      </Link>
      {loggedIn ? (
        <>
          <p className="header__login-email">{currentUser.email}</p>
          <button
            className="header__logout-button"
            type="button"
            aria-label="Выход из учетной записи"
            onClick={onSignOut}
          >
            Выйти
          </button>
        </>
      ) : (
        <>
          <p className="header__login-email" />
          <Link className="header__link-to-sing-up" to="/sign-up">
            Регистрация
          </Link>
        </>
      )}
    </header>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  onSignOut: PropTypes.func.isRequired,
};

Header.defaultProps = {
  loggedIn: false,
};

export default Header;
