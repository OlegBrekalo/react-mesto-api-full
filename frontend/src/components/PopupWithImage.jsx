import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { onErrorMockImage } from '../utils/constants';

function PopupWithImage({ isOpen, src, subtitle, onClose }) {
  const popupStyle = classNames('popup', { popup_opened: isOpen });

  const handleClosePopupByClickOutside = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <div className={popupStyle} role="presentation" onClick={handleClosePopupByClickOutside}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть всплывающее окно с картинкой"
          className="popup__close-icon"
          onClick={onClose}
        />
        <img src={src} alt="#" className="popup__image" />
        <p className="popup__img-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

PopupWithImage.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string,
  subtitle: PropTypes.string,
};

PopupWithImage.defaultProps = {
  isOpen: false,
  src: onErrorMockImage,
  subtitle: 'Неизвестное место',
};

export default PopupWithImage;
