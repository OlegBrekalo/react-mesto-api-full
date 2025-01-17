/* eslint-disable class-methods-use-this */
import escape from 'escape-html';
import getResponseData from './getResponseData';

class AuthAPI {
  constructor(url) {
    this._url = url;
  }

  signUp(email, password) {
    console.log(`${this._url}signin`);
    return fetch(`${this._url}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        Connection: 'keep-alive',
      },
      body: JSON.stringify({
        email: escape(email),
        password: escape(password),
      }),
    }).then((res) => {
      console.log(res);
      return getResponseData(res);
    });
  }

  signIn(email, password) {
    console.log(`${this._url}signin`);
    return fetch(`${this._url}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        Connection: 'keep-alive',
      },
      body: JSON.stringify({
        email: escape(email),
        password: escape(password),
      }),
    }).then((res) => {
      console.log(res);
      return getResponseData(res);
    });
  }

  validateToken(jwt) {
    return fetch(`${this._url}users/me`, {
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

export default new AuthAPI('https://api.brekalo.students.nomoreparties.space/');
