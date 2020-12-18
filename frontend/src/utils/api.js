import escape from 'escape-html';
import getResponseData from './getResponseData';

class Api {
  constructor(url) {
    this._url = url;
  }

  getUserInfo(jwt) {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => getResponseData(res));
  }

  updateUserInfo(jwt, newName, newAbout) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        name: escape(newName),
        about: escape(newAbout),
      }),
    }).then((res) => getResponseData(res));
  }

  updateUserAvatar(jwt, newAvatar) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        avatar: escape(newAvatar),
      }),
    }).then((res) => getResponseData(res));
  }

  getCards(jwt) {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => getResponseData(res));
  }

  addNewCard(jwt, cardName, cardLink) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        name: escape(cardName),
        link: escape(cardLink),
      }),
    }).then((res) => getResponseData(res));
  }

  deleteCard(jwt, cardID) {
    return fetch(`${this._url}cards/${cardID}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => getResponseData(res));
  }

  putLike(jwt, cardID) {
    return fetch(`${this._url}cards/likes/${cardID}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => getResponseData(res));
  }

  removeLike(jwt, cardID) {
    return fetch(`${this._url}cards/likes/${cardID}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => getResponseData(res));
  }
}

const api = new Api('http://api.brekalo.students.nomoreparties.space/');

export default api;
