// Задание 2:
// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом.
// Введённый в поле текст должен отображаться внутри h2-элемента, но с задержкой в 300 мс.
// При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и
// запускает новый. Таким образом программа должна ожидать завершения ввода пользователя и
// только после этого изменять текст в h2.

let printBlock = document.querySelector('.print-block');
let textContainer = document.getElementById('message');
let timeoutID;

function displaysText() {
  printBlock.textContent = textContainer.value;
}

function delayedDisplaysText() {
  window.clearTimeout(timeoutID);
  timeoutID = window.setTimeout(displaysText, 300);
}

textContainer.addEventListener('keyup', delayedDisplaysText)
