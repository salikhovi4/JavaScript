// 0 - вс, 1 - пн, ...
let dayIndex = new Date().getDay();
let days = [
  'sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

console.log(`Today is ${days[dayIndex]}`);

// объявление функции с названием functionName
function functionName() {
  // тело функции
  console.log('Вызвана функция');
}

// вызов функции
functionName();

// присваиваем функцию переменной, название после function можно опустить
let functionAsVariable = function () {
  // тело функции
  console.log('Вызвана функция из переменной');
}
