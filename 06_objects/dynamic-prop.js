function printObjectProperty(obj, propName) {
  console.log(obj[propName]);
}

let me = {
  name: 'Динар',
  surname: 'Батыршин',
  middleName: 'Салихович',
  birthdate: { year: 1995, month: 4, day: 20 },
  occupation: 'Фронтенд разработчик',
  married: false,
};

printObjectProperty(me, 'name'); // Динар
printObjectProperty(me, 'middleName'); // Салихович
