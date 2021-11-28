// Задание 1:
// Создайте HTML-страницу с полем для ввода числа, кнопкой и div-элементом с числом 0. В поле для ввода должно вводиться число с
// количеством секунд, а кнопка должна запускать таймер. При запуске таймера число в div-элементе должно замениться на
// введённое в поле. Затем каждую секунду оно должно уменьшаться на единицу до тех пор, пока не дойдёт до 0. При этом таймер
// должен корректно работать, если во время его работы пользователь запускает его заново.

let container = document.querySelector('.container');
let countDisplay = document.getElementById('printNumber');
let startButton = document.getElementById('startCount');
let valueTimer = document.getElementById("numToCount");

// Styles
container.style.display = "grid";
container.style.margin = "10%"
countDisplay.style.textAlign = "center";

let interval;

function startTimer() {
  clearInterval(interval);
  if (valueTimer.value > 0) {
    countDisplay.textContent = valueTimer.value;
    interval = setInterval(tick, 1000);
    valueTimer.value = "";
  }
}

function tick() {
  let currentCount = parseInt(countDisplay.textContent);
  countDisplay.textContent = currentCount - 1;
  if (parseInt(countDisplay.textContent) === 0) {
    clearInterval(interval);
  }
}

startButton.addEventListener('click', startTimer);