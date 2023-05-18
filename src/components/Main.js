import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/Api';
import Card from './Card';
import ImagePopup from './ImagePopup';

function Main({
   onEditProfile,
   onAddPlace,
   onEditAvatar,
   onCardClick,
   isEditProfilePopupOpen,
   isAddPlacePopupOpen,
   isEditAvatarPopupOpen,
   onClose,
   selectedCard
}) {
   const [userName, setUserName] = useState('');
   const [userDescription, setUserDescription] = useState('');
   const [userAvatar, setUserAvatar] = useState('');
   const [cards, setCards] = useState([]);

   useEffect(() => {
      api.getUserInfo()
         .then(userInfo => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);
         })
         .catch(error => {
            console.log(error);
         });
   }, []);

   useEffect(() => {
      api.getInitialCards()
         .then(initialCards => {
            setCards(initialCards);
         })
         .catch(error => {
            console.log(error);
         });
   }, []);

   return (
      <main className="main">
         <section className="profile">
            <div
               className="profile__avatar"
               style={{ backgroundImage: `url(${userAvatar})` }}>
            </div>
            <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
            <div className="profile__info">
               <div className="profile__info-title">
                  <h1 className="profile__title">{userName}</h1>
                  <button type="button" aria-label="edit" className="profile__edit-button" onClick={onEditProfile}></button>
               </div>
               <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button type="button" aria-label="add" className="profile__add-button" onClick={onAddPlace}></button>
         </section>
         <section className="cards">
            <ul className="elements">
               {cards.map(card => (
                  <Card key={card._id} card={card} onCardClick={onCardClick} />
               ))}
            </ul>
         </section>

         <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
            onClose={onClose}>
            <input type="text" name="name" required placeholder="Имя" className="popup__input popup__input_type_name" id="name-input" minLength="2" maxLength="40" />
            <span className="popup__input-error name-input-error"></span>
            <input type="text" name="about" required placeholder="О себе" className="popup__input popup__input_type_about" id="about-input" minLength="2" maxLength="200" />
            <span className="popup__input-error about-input-error"></span>
         </PopupWithForm>

         <PopupWithForm
            name="add"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={onClose}>
            <input type="text" name="name" required placeholder="Название" className="popup__input popup__input_type_card" id="card-input" minLength="2" maxLength="30" />
            <span className="popup__input-error card-input-error"></span>
            <input type="url" name="link" required placeholder="Ссылка на картинку" className="popup__input popup__input_type_url" id="url-input" />
            <span className="popup__input-error url-input-error"></span>
         </PopupWithForm>

         <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={onClose}>
            <input type="url" name="avatar" required placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" id="avatar-input" />
            <span className="popup__input-error avatar-input-error"></span>
         </PopupWithForm>

         <ImagePopup card={selectedCard} onClose={onClose} />

      </main>
   );
}

export default Main;
