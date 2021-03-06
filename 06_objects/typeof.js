// простые
typeof 1; //number
typeof 'asd'; // string
typeof false; // boolean
typeof 123n; // bigint
typeof Symbol(); // symbol

// составные
typeof {}; // object
typeof []; // object
typeof function () {}; // function

// нулевые
typeof undefined; // undefined
typeof null; // object

// расхождения typeof и системы типов
typeof null; // object, хотя реальный тип значения - null
typeof function () {}; // function, хотя в системе типов функция не выделяется в отдельный тип

// пример использования
function getStringValue(unknown) {
  if (typeof unknown === 'string') {
    return unknown;
  }
  if (typeof unknown === 'function') {
    return unknown();
  }
  if (typeof  unknown === 'object') {
    return unknown.toString();
  }
  return '';
}

console.log(getStringValue('String'));
console.log(getStringValue(function () {
  return new Date().getFullYear();
}));
console.log(getStringValue([1, 2, 3]));
console.log(getStringValue({}));
console.log(getStringValue(true));
