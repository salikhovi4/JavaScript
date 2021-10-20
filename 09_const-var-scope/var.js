function doSomethingStupid() {
  console.log(x); // Ошибки не будет, в консоль выведется undefined
  var x = 123;
  console.log(x); // 123
}

doSomethingStupid();

// Код выше можно переписать так
function doSomethingStupid() {
  // Объявление (не присваивание) всплыло
  var x;
  console.log(x);
  // только присваивание при этом осталось на месте
  x = 123;
  console.log(x);
}

doSomethingStupid();

// // второй пример
// function doSomethingStupid() {
//   console.log(x); // undefined
//   // кажется, что этот блок никогда не выполнится, только это не совсем так
//   if (false) {
//     var x = 123;
//   }
//   console.log(x); // undefined
// }
//
// // перепишем так
// function doSomethingStupid() {
//   // Объявление всплывает даже из вложенных блоков (а не ф-ций)
//   var x;
//   console.log(x);
//   if (false) {
//     x = 123;
//   }
//   console.log(x);
// }
