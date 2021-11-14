let fruits = ['apple', 'orange', 'watermelon', 'banana', 'blueberries']; // литеральная запись

let alphabet = [];

// добавить в конец массива
alphabet.push('D');
alphabet.push('E');
alphabet.push('F', 'G', 'H');

// добавить в начало
alphabet.unshift('C');
alphabet.unshift('A', 'B');

console.log(alphabet);

alphabet.length; // 8


// массив с вариантами приветствий
let greetings = ['hello', 'good morning', 'good evning', 'good afternoon'];

console.log(greetings[2]); // ой опечатка
// исправим опечатку
greetings[2] = 'good evening';

console.log(greetings[2]); // теперь все хорошо
