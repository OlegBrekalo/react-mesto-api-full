const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: `Ошибка чтения пользователей. Error message: ${err}` })
    );
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: `Пользователь не найден.` });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).send({ message: `Пользователь не найден.` });
      } else {
        res.status(500).send({ message: `Ошибка чтения пользователя. Error message: ${err}` });
      }
    });
};

module.exports.postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: `Ошибка валидации. Error message: ${err}` });
      } else {
        res.status(500).send({ message: `Ошибка сохранения пользователя. Error message: ${err}` });
      }
    });
};

module.exports.updateUserInfo = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { runValidators: true, new: true })
    .then((updatedUser) => {
      res.send({ data: updatedUser });
    })
    .catch((err) => {
      switch (err.name) {
        case 'ValidationError':
        case 'CastError':
          res.status(400).send({ message: `Ошибка валидации. Error message: ${err}` });
          break;
        default:
          res
            .status(500)
            .send({ message: `Ошибка обновлении пользователя. Error message: ${err}` });
          break;
      }
    });
};

module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { runValidators: true, new: true })
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: `Ошибка валидации. Error message: ${err}` });
      } else {
        res.status(500).send({ message: `Ошибка обновлении пользователя. Error message: ${err}` });
      }
    });
};
