const array = [];

array.push('в конец');
array.unshift('в начало');

const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Метод удаляет из массива первый элемент и сразу же возвращает его
const first = numbers1.shift();
console.log(first); // 0
console.log(numbers1); // 1, 2, 3, ...

// И похожий метод, который удаляет и возвращает последний элемент массива
const last = numbers1.pop();
console.log(last);
console.log(numbers1); // 1, ..., 7, 8

// удобно использовать shift pop в циклах
while (numbers1.length) {
  // На каждой итерации цикла массив уменьшается на один элемент
  console.log(`Следующий элемент: ${numbers1.pop()}`);
}

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const middle = numbers2.splice(4, 2); // после 4-го 2 элемента
console.log('middle', middle); // 4, 5
console.log(numbers2); // 0, 1, 2, 3, [отсюда убрали 2 элемента] 6, 7, ...

numbers2.splice(100, 100); // [], исходный массив не изменится
numbers2.splice(6); // [8, 9] вернутся и будут убраны из массива

numbers2.splice(4, 0, 4, 5);
console.log(numbers2); // 0, 1, 2, 3, 4, 5, 6, 7

const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersReversed = numbers3.reverse();
console.log(numbersReversed);

numbersReversed.sort(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbersReversed.push(10, 11);
numbersReversed.sort(); // [0, 1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9]

numbersReversed.sort((a, b) => a - b); // 0, 1, 2, ..., 11
numbersReversed.sort((a, b) => b - a); // 11, 10, 9, ..., 0

console.log(numbers3.slice()); // полная копия массива
console.log(numbers3.slice(3)); // копия от элемента с индексом 3 и до конца (3, 4 ... 9)
console.log(numbers3.slice(-5)); // копия 5-ти последних элементов (5, 6 ... 9)
console.log(numbers3.slice(3, 5)); // копия от индекса 3 до индекса 5, последний не включается (3, 4)
console.log(numbers3.slice(2, -2)); // копия от индекса 3 до перд-предпоследнего элемента (2-7)
console.log(numbers3.slice(100, 150)); // пустой массив, в исходном нет таких индексов

const numbers4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(numbers4.includes(100)); // false
console.log(numbers4.includes(8)); // true
console.log(numbers4.indexOf(100)); // -1
console.log(numbers4.indexOf(0)); // 0, индекс первого значения 0 в массиве
console.log(numbers4.lastIndexOf(0)); // 10, индекс последнего значения 0 в массиве

const students = [
  {name: 'John', age: 18},
  {name: 'Emma', age: 23},
  {name: 'Bruce', age: 17},
  {name: 'Kate', age: 29},
  {name: 'Sam', age: 17},
];

students.includes({name: 'John', age: 18}); // false, тк это не тот John

// вернет объект студента {name: 'John', age: 18}
students.find(student => student.name === 'John' && student.age === 18);
// вернет индекс студента, то есть 0
students.findIndex(student => student.name === 'John' && student.age === 18);

students.find(student => student.age <= 16); // undefined, таких студентов нет
students.findIndex(student => student.age <= 16); // -1

students.every(student => student.age < 30); // true, все студенты младше 30 лет
students.every(student => student.age >= 18); // false, есть несовершеннолетние

students.some(student => student.age < 18); // true, есть несовершеннолетние
students.some(student => student.name === 'Brain'); //false, ни одного Brain

// Только несовершеннолетние студенты
const kids = students.filter(student => student.age < 18);
console.log(kids);

// Все, кроме Sam
const notSam = students.filter(student => student.name !== 'Sam');
console.log(notSam);

const names = students.map(student => student.name);
console.log(names);

students.forEach((student, index) => {
  console.log('Студент №', index + 1, '-', student.name);
});

// Товары в корзине
const cardItems = [
  {name: 'Рис, 500 г', price: 50, quantity: 3},
  {name: 'Сок вишневый', price: 100, quantity: 1},
  {name: 'Молоток', price: 1000, quantity: 2},
];

// Посчитаем сумму к оплате
cardItems.reduce(
  // 1ый аргумент - ф-ция. В нее первым аргументом передается уже 'накопленное' значение
  // а вторым - очередной элемент массива.
  (total, item) => total + item.price * item.quantity,
  // 2ой аргумент - начальное значение для total
  0
);

// Чтобы стало понятнее, давайте посмотрим на то, как будет выглядеть вычисление без reduce
// начальное значение
let total = 0;

for (const item of cardItems) {
  total = total + item.price * item.quantity
}
