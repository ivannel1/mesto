let popupOpen = document.querySelector(".profile__edit-button");
let popupClose = document.querySelector(".popup__close");

let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

let popupName = document.getElementById("name");
let popupAbout = document.getElementById("about");

let popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");

function openPopup(){
    popup.classList.add("popup_opened");
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}
// Эта ссылка ведет на сайт доступный только для ревьюверов,у студентов ничего об этом не сказано

function closePopup(){
    popup.classList.remove("popup_opened");
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;

    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

popupOpen.addEventListener ('click',openPopup);
popupClose.addEventListener ('click',closePopup);