// Задание 2:
// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом. Введённый в поле текст должен отображаться внутри h2-элемента,
// но с задержкой в 300 мс. При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и
// запускает новый. Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в h2.

// Цель задания:
// Получить практику создания DOM-элементов из JavaScript.Научиться работать с отложенными вызовами функций.


document.addEventListener("DOMContentLoaded", function () {
    let inp = document.createElement("input");
    inp.type = "text";
    inp.id = "inp-text";
    document.body.append(inp);
    let out = document.createElement("h2");
    out.id = "out-text";
    document.body.append(out);
    function delayedUpdate () {
        document.getElementById('out-text').textContent = document.getElementById('inp-text').value;
        window.setTimeout(delayedUpdate, 300);
    }
    delayedUpdate();
})
