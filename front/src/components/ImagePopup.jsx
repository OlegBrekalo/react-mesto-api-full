import React from 'react';

function ImagePopup() {
  return (
    <div className="popup-img popup">
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть полноразмерную картинку"
          className="popup__close-icon"
        />
        <img src="#" alt="#" className="popup__image" />
        <p className="popup__img-subtitle" />
      </div>
    </div>
  );
}

export default ImagePopup;
