let popupOpen = document.querySelector(".profile-info__edit-button");
let popupClose = document.querySelector(".popup__close");
let popupSave = document.querySelector(".popup__save");
let popup = document.querySelector(".popup");

function openPopup(){
    popup.classList.add("popup__opened");
}

function closePopup(){
    popup.classList.remove("popup__opened");
}

// Находим форму в DOM
let formElement = document.querySelector(".popup__form") // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__name") // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__about")// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameValue = document.querySelector(".popup__name").value;
    let aboutValue = document.querySelector(".popup__about").value;
    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector(".profile-info__name");
    let about = document.querySelector(".profile-info__about");
    // Вставьте новые значения с помощью textContent
    name.textContent = nameValue;
    about.textContent = aboutValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

popupOpen.addEventListener ('click',openPopup);
popupClose.addEventListener ('click',closePopup);
popupSave.addEventListener ('click',closePopup);

// Уверен,что можно использовать один класс для всех кнопок закрытия попапа,но это пока сложно :)