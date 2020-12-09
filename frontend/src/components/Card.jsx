import React from 'react';
import PropTypes from 'prop-types';
import { onErrorMockImage } from '../utils/constants';
import CurrentUserContext from '../contexts/currentUser';

function Card({ id, name, link, likes, owner, onClick, onLike, onDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = likes.some((like) => like._id === currentUser.id);

  const removeIconStyle =
    currentUser.id === owner._id
      ? 'element__remove-icon  element__remove-icon_show'
      : 'element__remove-icon';
  const likeIconStyle = isLiked
    ? 'element__like-icon element__like-icon_checked'
    : 'element__like-icon';

  return (
    <li className="element">
      <button
        type="button"
        aria-label="Удаление карточки"
        className={removeIconStyle}
        onClick={() => {
          onDelete(id);
        }}
      />
      <img
        role="presentation"
        src={link}
        alt="#"
        className="element__image"
        onClick={() => {
          onClick.call(this, link, name);
        }}
        onError={(evt) => {
          // eslint-disable-next-line no-param-reassign
          evt.target.src = onErrorMockImage;
        }}
      />
      <div className="element__footer">
        <h2 className="element__title" title={name}>
          {name}
        </h2>
        <div className="element__like-block">
          <button
            type="button"
            aria-label="Лайк карточке"
            className={likeIconStyle}
            onClick={() => {
              onLike(isLiked, id);
            }}
          />
          <p className="element__like-couter">{likes ? likes.length : 0}</p>
        </div>
      </div>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  link: PropTypes.string,
  likes: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  owner: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Card.defaultProps = {
  name: 'Неизвестное место',
  link: onErrorMockImage,
  likes: [],
};

export default Card;
