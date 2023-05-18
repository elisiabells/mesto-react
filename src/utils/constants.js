// buttons //
export const closeButtons = document.querySelectorAll('.popup__button-close');
export const editButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
export const editAvatarButton = document.querySelector('.profile__avatar-button');

// popups //
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupImg = document.querySelector('.popup_img');
export const popupDelete = document.querySelector('.popup_delete')
export const popupAvatar = document.querySelector('.popup_avatar')

// forms //
export const formEdit = popupEdit.querySelector('.popup__form-edit');
export const formAdd = popupAdd.querySelector('.popup__form-add');
export const formDelete = popupDelete.querySelector('.popup__form-delete')

// inputs //
export const popupInputTypeName = formEdit.querySelector('.popup__input_type_name');
export const popupInputTypeInfo = formEdit.querySelector('.popup__input_type_about');
export const nameInput = formAdd.querySelector('.popup__input_type_card');
export const linkInput = formAdd.querySelector('.popup__input_type_url');

// template //
export const cardsContainer = document.querySelector('.elements');
export const cardTemplateSelector = '.element-template';

// content //
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const fullImg = popupImg.querySelector('.popup__full-img-img');
export const fullImgCaption = popupImg.querySelector('.popup__full-img-caption');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// validation //
export const validationParams = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};