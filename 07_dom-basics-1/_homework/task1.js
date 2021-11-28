// Задание 1.

// Цель задания:
// Получить практику работы с DOM-элементами и событиями. Научиться выполнять код с заданной периодичностью.

// Задание:
// Создайте HTML-страницу с полем для ввода числа, кнопкой и div-элементом с числом 0. В поле для ввода должно вводиться число с
// количеством секунд, а кнопка должна запускать таймер. При запуске таймера число в div-элементе должно замениться на
// введённое в поле. Затем каждую секунду оно должно уменьшаться на единицу до тех пор, пока не дойдёт до 0. При этом таймер
// должен корректно работать, если во время его работы пользователь запускает его заново.

// Проверка результата:
// При запуске таймера он корректно работает, уменьшая число каждую секунду.
// Если нажать на кнопку запуска таймера ещё раз, предыдущий интервал остановится и таймер начнёт свою работу заново.
// Таймер заканчивает работу сразу при достижении 0.

// Критерии оценки:
// Код должен быть простым и понятным, без ненужных усложнений и лишних сущностей.
// В setInterval первым параметром передаётся функция (НЕ строка с кодом).

// Рекомендации к выполнению:
// В JavaScript есть специальный механизм, позволяющий запускать произвольную функцию с заданным интервалом. Для этого есть 2 функции:

// setInterval для запуска таймера. Подробнее: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval.
// Важно! Хоть функция и позволяет это делать, никогда не передавайте первым параметром строку с кодом! Только функцию.
// Код должен быть кодом, а не строкой - так его гораздо проще контролировать.

// clearInterval для остановки таймер. Подробнее: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval.
// Не бойтесь вызывать clearInterval даже если не уверены, что таймер запущен. В таком случае не будет ошибки, просто ничего не произойдёт.

console.log(document);
let count_display = document.querySelector('.printBlock');
let start_button = document.querySelector('.start-button');
let value_timer = document.getElementById("valueTimer");

let n_interv_id;

function startTimer() {
    clearInterval(n_interv_id);
    if (value_timer.value > 0) {
        count_display.textContent = value_timer.value;
        n_interv_id = setInterval(tickTimer, 1000);
        value_timer.value = "";
    }
}

function tickTimer() {
    let current_count = parseInt(count_display.textContent);
    count_display.textContent = current_count - 1;
    if (parseInt(count_display.textContent) === 0) {
        clearInterval(n_interv_id);
    }
}

start_button.addEventListener('click', startTimer);
