<!--Задание 1:-->
<!--Создайте HTML-страницу с полем для ввода числа, кнопкой и div-элементом с числом 0. В поле для ввода должно вводиться число с-->
<!--количеством секунд, а кнопка должна запускать таймер. При запуске таймера число в div-элементе должно замениться на-->
<!--введённое в поле. Затем каждую секунду оно должно уменьшаться на единицу до тех пор, пока не дойдёт до 0. При этом таймер-->
<!--должен корректно работать, если во время его работы пользователь запускает его заново.-->
function stop() {
            window.clearInterval(window.timerId);
}
function start() {
    stop()
    document.getElementById('timer').textContent = document.getElementById('inp-duration').value;
    window.timerId = window.setInterval(timer, 1000);
}
function timer() {
    let seconds = document.getElementById('timer');
    seconds.textContent = parseInt(seconds.textContent) - 1;
    if (parseInt(seconds.textContent) === 0) {
        stop();
    }
}