/* eslint-disable class-methods-use-this */
import escape from 'escape-html';
import getResponseData from './getResponseData';

class AuthAPI {
  constructor(url) {
    this._url = url;
  }

  signUp(email, password) {
    return fetch(`${this._url}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: escape(email),
        password: escape(password),
      }),
    }).then((res) => {
      return getResponseData(res);
    });
  }

  signIn(email, password) {
    return fetch(`${this._url}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: escape(email),
        password: escape(password),
      }),
    }).then((res) => {
      return getResponseData(res);
    });
  }

  // return fetch(`${this._url}users/me`, {

  validateToken(jwt) {
    return fetch(`localhost:4000/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => {
      return getResponseData(res);
    });
  }
}

export default new AuthAPI('localhost:4000/');
