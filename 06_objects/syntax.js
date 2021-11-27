let name = 'Динар';
let lastName = 'Батыршин';
let middleName = 'Салихович';

let me = {
  name,
  lastName,
  middleName: middle,
  birthdate: { year: 1995, month: 4, day: 20 },
  occupation: 'Фронтенд разработчик',
  married: false,
  'property with spaces': null,
};

// создаем новое свойство объекта
me.education = 'КНИТУ-КХТИ, КФУ';
// изменяем существующее свойство объекта
me.occupation = 'Безработный';

// те же действия со строками
me['property with spaces'] = 42;

// удаляем свойство из объекта
delete me.education;
delete me['property with spaces'];

// получаем значение свойства
let myName = me.name;
let myBirthYear = me.birthdate.year;

// значение несуществующего свойства - undefined
let fortyTwo = me['property with spaces'];

// пустой объекст
let emptyObj = {};
