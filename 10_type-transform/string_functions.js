const str = 'Строка Для ПроВеркИ';

str.includes('Для'); // true
str.includes('42'); // false

str.startsWith('Строка '); // true
str.startsWith('Для'); // false

str.endsWith('ВеркИ'); // true

str.toLowerCase(); // 'строка для проверки'
str.toUpperCase(); // 'СТРОКА ДЛЯ ПРОВЕРКИ'

str.replace('о', 'а'); // Страка Для ПроВеркИ
str.split(' '); // [ 'Строка', 'Для', 'ПроВеркИ' ]
str.split('о').join('а'); // Страка Для ПраВеркИ

'\n\t 42 \n\t'.trim(); // 42

'0123456789'.substr(3); // 3456789
'0123456789'.substr(3, 2); // 34
'0123456789'.substr(3, 5); // 34567
'0123456789'.substr(3, 100500); // 3456789

'0123456789'.substr(-5); // 56789
'0123456789'.substr(-5, 2); // 56
'0123456789'.substr(-100500, 2); // 01

const fullName = 'Динар Батыршин';
const surname = 'Батыршин';
// получаем индекс фамилии в строке с полным именем, если подстрока не найдена, метод вернет -1
const surnameIndex = fullName.indexOf(surname); // ищет с начала, а lastIndexOf с конца

console.log('Фамилия начинается с индекса', surnameIndex);

// перемещаем фамилию в начало строки
if (surnameIndex > 0) {
  console.log(surname + ' ' + fullName.replace(surname, '').trim());
}
else {
  console.log(fullName)
}
