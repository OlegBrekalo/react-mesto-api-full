const usersRouter = require('express').Router();
const parserJSON = require('body-parser').json();

const {
  getUsers,
  getUserById,
  postUser,
  updateUserInfo,
  updateUserAvatar,
} = require('../controllers/users');

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUserById);
usersRouter.post('/', parserJSON, postUser);
usersRouter.patch('/me', parserJSON, updateUserInfo);
usersRouter.patch('/me/avatar', parserJSON, updateUserAvatar);
module.exports = usersRouter;
