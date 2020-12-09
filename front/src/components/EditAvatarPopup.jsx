import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onSubmit }) {
  const avatarInput = useRef(null);

  const handleEditAvatarFormSubmit = (buttonRef) => {
    const cleanUp = () => {
      avatarInput.current.value = '';
    };
    onSubmit(avatarInput.current.value, buttonRef, cleanUp);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      name="avatar"
      buttonText="Сохранить"
      onClose={onClose}
      onSubmit={handleEditAvatarFormSubmit}
      inputs={
        <>
          <label htmlFor="avatar-form_src" className="form__label">
            <input
              id="avatar-form_src"
              name="avatar-form_src"
              type="url"
              required
              placeholder="Ссылка на аватар"
              className="form__input-text avatar-form__input-text_type_src"
              ref={avatarInput}
            />
            <span id="avatar-form_src-error" className="form__input-error" />
          </label>
        </>
      }
    />
  );
}

EditAvatarPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

EditAvatarPopup.defaultProps = {
  isOpen: false,
};

export default EditAvatarPopup;
