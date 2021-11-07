// Задание 1:
// Создайте HTML-страницу с полем для ввода числа, кнопкой и div-элементом с числом 0. В поле для ввода должно вводиться число с
// количеством секунд, а кнопка должна запускать таймер. При запуске таймера число в div-элементе должно замениться на
// введённое в поле. Затем каждую секунду оно должно уменьшаться на единицу до тех пор, пока не дойдёт до 0. При этом таймер
// должен корректно работать, если во время его работы пользователь запускает его заново.
console.log(document);
let countDisplay = document.querySelector('.printBlock');
let startButton = document.querySelector('.start-button');
let valueTimer = document.getElementById("valueTimer");

let nIntervId;

function startTimer() {
  clearInterval(nIntervId);
  if (valueTimer.value > 0) {
    countDisplay.textContent = valueTimer.value;
    nIntervId = setInterval(tickTimer, 1000);
    valueTimer.value = "";
  }
}

function tickTimer() {
  let currentCount = parseInt(countDisplay.textContent);
  countDisplay.textContent = currentCount - 1;
  if (parseInt(countDisplay.textContent) === 0) {
    clearInterval(nIntervId);
  }
}

startButton.addEventListener('click', startTimer);
