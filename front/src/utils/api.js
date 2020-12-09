import escape from 'escape-html';
import getResponseData from './getResponseData';

class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      },
    }).then((res) => getResponseData(res));
  }

  updateUserInfo(newName, newAbout) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: escape(newName),
        about: escape(newAbout),
      }),
    }).then((res) => getResponseData(res));
  }

  updateUserAvatar(newAvatar) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: escape(newAvatar),
      }),
    }).then((res) => getResponseData(res));
  }

  getCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      },
    }).then((res) => getResponseData(res));
  }

  addNewCard(cardName, cardLink) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: escape(cardName),
        link: escape(cardLink),
      }),
    }).then((res) => getResponseData(res));
  }

  deleteCard(cardID) {
    return fetch(`${this._url}cards/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    }).then((res) => getResponseData(res));
  }

  putLike(cardID) {
    return fetch(`${this._url}cards/likes/${cardID}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      },
    }).then((res) => getResponseData(res));
  }

  removeLike(cardID) {
    return fetch(`${this._url}cards/likes/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    }).then((res) => getResponseData(res));
  }
}

const api = new Api(
  'https://mesto.nomoreparties.co/v1/cohort-15/',
  '00e3d586-abb9-483a-af25-8c5b37844ed8',
);

export default api;
