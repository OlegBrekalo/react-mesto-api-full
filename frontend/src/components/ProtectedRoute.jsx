/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, loggedIn, ...props }) {
  return <Route>{() => (loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />)}</Route>;
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  loggedIn: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  loggedIn: false,
  exact: false,
};

export default ProtectedRoute;
