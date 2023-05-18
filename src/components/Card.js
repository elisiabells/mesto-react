import React from 'react';

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="element">
      <img src={card.link} alt={card.name} className="element__img" onClick={handleClick} />
      <button type="button" className="element__delete-button"></button>
      <div className="element__text">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button type="button" className="element__like-button"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
