let singleQuote = 'Строка в одиночных кавычках';
let doubleQuote = "Строка в двойных кавычках";
let tickQuote = `Строка в обратных кавычках`;

let multiline1 = 'Строка\nс\nпереносами';
let multiline2 = `Строка
с
переносами`;

// concat
let str1 = 'Первая строка';
let str2 = 'Вторая строка';

let concat = str1 + '\n' + str2; // Первая строка\nВторая строка

let tickConcat = `${str1}
${str2}`; // Первая строка\nВторая строка

let greetings = 'Привет';
let name = 'Dinar';
console.log(`${greetings}, ${name}! Welcome!`); // Привет, Dinar! Welcome!
