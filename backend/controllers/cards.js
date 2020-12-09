const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: `Ошибка чтения карточек. Error message: ${err}` })
    );
};

module.exports.postCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((newCard) => {
      res.send({ data: newCard });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: `Ошибка валидации. Error message: ${err}` });
      } else {
        res.status(500).send({ message: `Ошибка сохранения карточки. Error message: ${err}` });
      }
    });
};

module.exports.deleteCardbyID = (req, res) => {
  const cardID = req.params.id;
  Card.findByIdAndDelete(cardID)
    .then((deletedCard) => {
      if (deletedCard) {
        res.send({ message: `Карточка ${cardID} успешно удалена.` });
      } else {
        res.status(404).send({ message: `Карточка для удаления не найдена.` });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).send({ message: `Карточка для удаления не найдена.` });
      } else {
        res.status(500).send({ message: `Ошибка удаления карточки. Error message: ${err}` });
      }
    });
};

module.exports.putLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.id, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((data) => {
      if (data) {
        res.send({ data });
      } else {
        res.status(404).send({ message: `Карточка для лайка не найдена.` });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).send({ message: `Карточка для лайка не найдена.` });
      } else {
        res.status(500).send({ message: `Ошибка лайка карточки. Error message: ${err}` });
      }
    });
};

module.exports.deleteLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.id, { $pull: { likes: req.user._id } }, { new: true })
    .then((data) => {
      if (data) {
        res.send({ data });
      } else {
        res.status(404).send({ message: `Карточка для дизлайка не найдена.` });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).send({ message: `Карточка для дизлайка не найдена.` });
      } else {
        res.status(500).send({ message: `Ошибка дизлайка карточки. Error message: ${err}` });
      }
    });
};
