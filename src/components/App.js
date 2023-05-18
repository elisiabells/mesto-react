import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
   const [selectedCard, setSelectedCard] = useState(null);

   const handleEditProfileClick = () => {
      setIsEditProfilePopupOpen(true);
   };

   const handleAddPlaceClick = () => {
      setIsAddPlacePopupOpen(true);
   };

   const handleEditAvatarClick = () => {
      setIsEditAvatarPopupOpen(true);
   };

   const handleCardClick = (card) => {
      setSelectedCard(card);
   };

   const closeAllPopups = () => {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setSelectedCard(null);
   };

   return (
      <div className="root">
         <div className="page">
            <Header />
            <Main
               onEditProfile={handleEditProfileClick}
               onAddPlace={handleAddPlaceClick}
               onEditAvatar={handleEditAvatarClick}
               onCardClick={handleCardClick} />
            <Footer />
            <PopupWithForm
               name="edit"
               title="Редактировать профиль"
               isOpen={isEditProfilePopupOpen}
               onClose={closeAllPopups}
               buttonText="Сохранить">
               <input type="text" name="name" required placeholder="Имя" className="popup__input popup__input_type_name" id="name-input" minLength="2" maxLength="40" />
               <span className="popup__input-error name-input-error"></span>
               <input type="text" name="about" required placeholder="О себе" className="popup__input popup__input_type_about" id="about-input" minLength="2" maxLength="200" />
               <span className="popup__input-error about-input-error"></span>
            </PopupWithForm>

            <PopupWithForm
               name="add"
               title="Новое место"
               isOpen={isAddPlacePopupOpen}
               onClose={closeAllPopups}
               buttonText="Создать">
               <input type="text" name="name" required placeholder="Название" className="popup__input popup__input_type_card" id="card-input" minLength="2" maxLength="30" />
               <span className="popup__input-error card-input-error"></span>
               <input type="url" name="link" required placeholder="Ссылка на картинку" className="popup__input popup__input_type_url" id="url-input" />
               <span className="popup__input-error url-input-error"></span>
            </PopupWithForm>

            <PopupWithForm
               name="avatar"
               title="Обновить аватар"
               isOpen={isEditAvatarPopupOpen}
               onClose={closeAllPopups}
               buttonText="Сохранить">
               <input type="url" name="avatar" required placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" id="avatar-input" />
               <span className="popup__input-error avatar-input-error"></span>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
         </div>
      </div>
   );
}

export default App;