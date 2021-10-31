

// вызов функции
functionName();

functionAsVariable();

// объявление функции с названием functionName
function functionName() {
  // тело функции
  console.log('Вызвана функция');
}
// присваиваем функцию переменной, название после function можно опустить
let functionAsVariable = function () {
  // тело функции
  console.log('Вызвана функция из переменной');
}
