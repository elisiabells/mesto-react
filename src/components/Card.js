import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext'; 

function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  
  const cardLikeButtonClassName = `element__like-button ${isLiked ? 'element__like-button_active' : ''}`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  return (
    <li className="element">
      <img src={card.link} alt={card.name} className="element__img" onClick={handleClick} />
      {isOwn && <button type="button" className="element__delete-button" onClick={handleDeleteClick}></button>}
      <div className="element__text">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;