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
