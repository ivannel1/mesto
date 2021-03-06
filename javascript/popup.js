let popupOpen = document.querySelector(".profile-info__edit-button");
let popupClose = document.querySelector(".popup__close");

let profileName = document.querySelector(".profile-info__name");
let profileAbout = document.querySelector(".profile-info__about");

let popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form") 
let nameInput = document.querySelector(".popup__name") 
let jobInput = document.querySelector(".popup__about")

function openPopup(){
    popup.classList.add("popup_opened");
}
// Какие данные должна заносить данная функция?В задании ничего про это на написано

function closePopup(){
    popup.classList.remove("popup_opened");
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    let nameValue = document.querySelector(".popup__name").value;
    let aboutValue = document.querySelector(".popup__about").value;
    // Если запрашивать значение переменных заранее,код выдает ошибку,подскажи пожалуйста,как её избежать

    
    profileName.textContent = nameValue;
    profileAbout.textContent = aboutValue;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

popupOpen.addEventListener ('click',openPopup);
popupClose.addEventListener ('click',closePopup);