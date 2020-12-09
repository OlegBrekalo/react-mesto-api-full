import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onSubmit }) {
  const [newName, setNewName] = React.useState('');
  const [newSrc, setNewSrc] = React.useState('');

  const handleAddPlaceFormSubmit = (buttonRef) => {
    const cleanUp = () => {
      setNewName('');
      setNewSrc('');
    };
    onSubmit(newName, newSrc, buttonRef, cleanUp);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Новое место"
      name="add"
      buttonText="Создать"
      onClose={onClose}
      onSubmit={handleAddPlaceFormSubmit}
      inputs={
        <>
          <label htmlFor="add-form_name" className="form__label">
            <input
              id="add-form_name"
              name="add-form_name"
              type="text"
              required
              minLength={1}
              maxLength={30}
              placeholder="Название"
              className="form__input-text add-form__input-text_type_name"
              value={newName}
              onChange={(evt) => setNewName(evt.target.value)}
            />
            <span id="add-form_name-error" className="form__input-error" />
          </label>
          <label htmlFor="add-form_src" className="form__form-label">
            <input
              id="add-form_src"
              name="add-form_src"
              type="url"
              required
              placeholder="Ссылка на картинку"
              className="form__input-text add-form__input-text_type_src"
              value={newSrc}
              onChange={(evt) => setNewSrc(evt.target.value)}
            />
            <span id="add-form_src-error" className="form__input-error" />
          </label>
        </>
      }
    />
  );
}

AddPlacePopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

AddPlacePopup.defaultProps = {
  isOpen: false,
};

export default AddPlacePopup;
