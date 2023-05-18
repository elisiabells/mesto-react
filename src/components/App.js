import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

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
               onCardClick={handleCardClick}
               isEditProfilePopupOpen={isEditProfilePopupOpen}
               isAddPlacePopupOpen={isAddPlacePopupOpen}
               isEditAvatarPopupOpen={isEditAvatarPopupOpen}
               selectedCard={selectedCard}
               onClose={closeAllPopups} />
            <Footer />
         </div>
      </div>
   );
}

export default App;
