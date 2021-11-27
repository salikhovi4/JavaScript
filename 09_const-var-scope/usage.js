// Function Declaration/Expression
// 1. Методы объектов
const obj = {
  name: 'Name',
  printName() {
    console.log(this.name);
  }
};
obj.printName();

// 2. Обработчики событий, когда нужен this
input.addEventListener('input', function () {
  console.log(this.value);
});

// 3. Простые именованные ф-ции
function makeMeSandwich() {
  //
}


// Arrow Function
// 1. Обработчики событий
input.addEventListener('input', () => {
  console.log('input event');
});

// 2. При передаче фнонимной ф-ции в качестве параметра другой ф-ции
setInterval(() => {
  console.log('tick');
}, 1000);

// 3. IIFE
(() => {})(); // vs (function() {})()
