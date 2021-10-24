// Ошибка! Обращение к переменной, которая еще не объявлена
console.log(someVar);

let someVar = 10;

function someFunction() {}

console.log(someVar); // 10
someFunction();

// {
//   let temperature = 36.6;
//
//   console.log(temperature);
//
//   if (temperature > 0) {
//     console.log(temperature);
//   }
//
//   if (temperature > 3) {
//     // Переопределение temperature во вложенном блоке
//     let temperature = 10
//
//     console.log(temperature);
//   }
//
//   console.log(temperature);
// }
//
// // Ошибка! Имя temperature не объявлено в этой области видимости
// console.log(temperature);
