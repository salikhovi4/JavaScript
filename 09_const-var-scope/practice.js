(() => { // чтобы не засорять нашу глобальную область
  const divElements = document.querySelectorAll('div');
  for (const el of divElements) el.style.border = '1px solid red'; // const el доступен только внутри тела цикла
})();

// // пустой body
// document.addEventListener('DOMContentLoaded', () => { // стрелочная ф-ция
//   const button = document.createElement('button'); // константа
//
//   let count = 0;
//
//   function increment() {
//     button.textContent = count++; //замыкание
//   }
//
//   increment();
//   button.addEventListener('click', increment);
//   document.body.append(button);
// });

// применяем задержку для минимизации запросов к серверу
(() => {
  const WAIT_TIME_MS = 500;

  const textInput = document.createElement('input');
  const display = document.createElement('div');

  let timeout;

  // замыкание трех переменных
  textInput.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      display.textContent = textInput.value;
    }, WAIT_TIME_MS);
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.append(textInput);
    document.body.append(display);
  });
})();
