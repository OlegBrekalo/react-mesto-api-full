const cardsRouter = require('express').Router();
const parserJSON = require('body-parser').json();
const { getCards, postCard, deleteCardbyID, putLike, deleteLike } = require('../controllers/cards');

cardsRouter.get('/', getCards);
cardsRouter.post('/', parserJSON, postCard);
cardsRouter.delete('/:id', parserJSON, deleteCardbyID);
cardsRouter.put('/:id/likes', putLike);
cardsRouter.delete('/:id/likes', deleteLike);

module.exports = cardsRouter;
