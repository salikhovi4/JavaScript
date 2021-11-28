// Задание 2:
// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом.
// Введённый в поле текст должен отображаться внутри h2-элемента, но с задержкой в 300 мс.
// При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и
// запускает новый. Таким образом программа должна ожидать завершения ввода пользователя и
// только после этого изменять текст в h2.

let container = document.querySelector('.container');
let textOutput = document.getElementById('output');
let textInput = document.getElementById('message');
let timeStamp;

// Styles
container.style.display = "grid";
container.style.margin = "10%"
textOutput.style.textAlign = "center";
// Event Listener
textInput.addEventListener('keyup', () => {
    window.clearTimeout(timeStamp);
    timeStamp = window.setTimeout( () => {
      textOutput.textContent = textInput.value;
    }, 300);
  })