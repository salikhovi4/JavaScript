// Задание 2.

// Цель задания:
// Получить практику создания DOM-элементов из JavaScript.Научиться работать с отложенными вызовами функций.

// Задание:
// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом. Введённый в поле текст должен отображаться внутри h2-элемента,
// но с задержкой в 300 мс. При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и
// запускает новый. Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в h2.

// Проверка результата:
// По ходу ввода текста содержимое в h2 не изменяется. Содержимое обновляется через 300 мс после завершения ввода.

// Критерии оценки:
// Код должен быть простым и понятным, без ненужных усложнений и лишних сущностей.
// В setTimeout первым параметром передаётся функция (НЕ строка с кодом).

// Рекомендации к выполнению:
// В JavaScript есть специальный механизм, позволяющий запускать произвольную функцию с указанной задержкой. Для этого есть 2 функции:

// setTimeout для запуска функции с задержкой. Подробнее: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout.
// Важно! Хоть функция и позволяет это делать, никогда не передавайте первым параметром строку с кодом! Только функцию.
// Код должен быть кодом, а не строкой - так его гораздо проще контролировать.

// clearTimeout для отмены запуска. Подробнее: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout.
// Не бойтесь вызывать clearTimeout даже если не уверены, что запуск функции с задержкой запланирован. В таком случае не будет ошибки,
// просто ничего не произойдёт.


let print_block = document.querySelector('.print-block');
let text_container = document.getElementById('message');
let timeout_id;

function displaysText() {
    print_block.textContent = text_container.value;
}

function delayedDisplaysText() {
    window.clearTimeout(timeout_id);
    timeout_id = window.setTimeout(displaysText, 300);
}

text_container.addEventListener('keyup', delayedDisplaysText)
