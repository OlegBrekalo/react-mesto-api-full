import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function InfoTooltip({ isOpen, title, type, onClose }) {
  const popupStyle = classNames('popup', { popup_opened: isOpen });

  const iconImageStyle = classNames('popup__info-icon', {
    'popup__info-icon_type_ok': type === 'ok',
    'popup__info-icon_type_error': type === 'error',
  });

  const handleClosePopupByClickOutside = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <div className={popupStyle} role="presentation" onClick={handleClosePopupByClickOutside}>
      <div className="popup__container popup__container_type_inform">
        <button
          type="button"
          aria-label="Закрыть информационное всплывающее окно"
          className="popup__close-icon"
          onClick={onClose}
        />
        <div className={iconImageStyle} />
        <p className="popup__informSubtitle">{title}</p>
      </div>
    </div>
  );
}

InfoTooltip.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(['ok', 'error']),
  onClose: PropTypes.func.isRequired,
};

InfoTooltip.defaultProps = {
  isOpen: false,
  title: '',
  type: '',
};

export default InfoTooltip;
