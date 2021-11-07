// Задание 1:
// Доработайте приложение TODO, добавив к нему следующее:
// Сделайте так, чтобы у кнопки в форме устанавливался атрибут disabled, когда поле ввода пустое. Не забудьте, что disabled
// должен устанавливаться и при загрузке приложения, так как изначально поле тоже пустое.
// Добавьте к функции createTodoApp третий опциональный аргумент с массивом дел,
// которые должны быть в списке сразу после
// загрузки приложения. Каждое дело должно быть объектом вида { name: 'Название дела', done: false/true }. Измените код
// функции таким образом, чтобы список дел сразу добавлялся в DOM.
function addListener() {
  let checkInput = document.getElementById("check-input");
  let button = document.getElementById("button-addition");
  button.disabled = true;

  checkInput.oninput = function (text) {
    button.disabled = text.target.value === "";
  }
}
