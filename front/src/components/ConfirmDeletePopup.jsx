import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup({ isOpen, onClose, onSubmit }) {
  const handleConfirmDeleteFormSubmit = (buttonRef) => {
    onSubmit(buttonRef);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Вы уверены?"
      name="delete-card"
      buttonText="Да"
      onClose={onClose}
      onSubmit={handleConfirmDeleteFormSubmit}
    />
  );
}

ConfirmDeletePopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ConfirmDeletePopup.defaultProps = {
  isOpen: false,
};

export default ConfirmDeletePopup;
