import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function PopupWithForm({ isOpen, title, name, inputs, buttonText, onClose, onSubmit }) {
  const buttonRef = useRef(null);

  const popupStyle = classNames('popup', `popup-${name}`, { popup_opened: isOpen });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    onSubmit(buttonRef);
  };

  const handleClosePopupByClickOutside = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <div className={popupStyle} role="presentation" onClick={handleClosePopupByClickOutside}>
      <div className="popup__container popup__container_type_form">
        <button
          type="button"
          aria-label="Закрыть всплывающее окно"
          className="popup__close-icon"
          onClick={onClose}
        />
        <form className="form" autoComplete="off" onSubmit={handleSubmitForm}>
          <p className="form__title">{title}</p>
          {inputs}
          <button type="submit" className="form__submit-button" ref={buttonRef}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

PopupWithForm.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputs: PropTypes.element,
  buttonText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

PopupWithForm.defaultProps = {
  isOpen: false,
  inputs: null,
  buttonText: '',
};

export default PopupWithForm;
