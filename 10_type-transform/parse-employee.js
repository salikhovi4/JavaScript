console.log(
  parseEmployeeData(`
  Батыршин Динар  Салихович,  программист
  Иванов Иван Иванович , python-разработчик
  `)
);

function parseEmployeeData(dataString) {
  return dataString
    // разбиваем текст по строкам (т.е по переносам строки)
    .split('\n')
    // убираем пустые строки и строки с пробелами
    .filter(line => line.trim().length > 0)
    // преобразуем каждую строку
    .map(line => {
      // через запятую выписаны ФИО и должность человека
      const [fullName, occupation] = line
        // разбиваем строку по запятой
        .split(',')
        // убираем пустые строки и строки с пробелами
        .map(str => str.trim())
        .filter(str => str.length > 0);
      // далее нам нужно разбить ФИО на составляющие
      const [surname, name, middleName] = fullName
        // ФИО в тексте написаны через пробел, разбиваем по пробелу
        .split(' ')
        .filter(text => text.length > 0);
      // возвращаем объекст со структурированными  данными
      return {
        surname, name, middleName, occupation
      };
    });
}
