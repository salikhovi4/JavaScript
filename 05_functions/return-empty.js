function checkAdult(age) {
  console.log('Вам', age, 'лет');
  if (age >= 18) return;
  console.log(`Потерпи еще ${18 - age} лет до совершеннолетия`);
}

// все сообщения будут выведены
checkAdult(8);

// функция перестанет выполняться после первого сообщения
checkAdult(23);
checkAdult(18);

// undefined
console.log(checkAdult(8)); // undefined
let x = checkAdult(18);
console.log(x); // undefined

let empty;
console.log(empty);
