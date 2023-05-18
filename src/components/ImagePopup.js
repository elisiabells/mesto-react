import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_img ${card ? 'popup_opened' : ''}`}>
      <div className="popup__full-img-container">
        <button type="button" className="popup__button-close" onClick={onClose}></button>
        <figure className="popup__full-img">
          <img src={card?.link} alt={card?.name} className="popup__full-img-img" />
          <figcaption className="popup__full-img-caption">{card ? card.name : ''}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
