// Задание 2
// Задание:
// В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами,
// и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы —
// к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и
// console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того,
// были ли исходные строки равны преобразованным.

let name = 'EvGeNiY';
let surname = 'ZyAyKiN';

if (name.slice(0, 1) === name.slice(0, 1).toUpperCase() && name.slice(1) === name.slice(1).toLowerCase() &&
surname.slice(0, 1) === surname.slice(0, 1).toUpperCase() && surname.slice(1) === surname.slice(1).toLowerCase()) {
	console.log('The name remains unchanged');
	console.log(`name: ${name}`);
	console.log(`surname: ${surname}`);
} else {
	new_name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
	new_surname = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase()
	console.log('The name has been converted');
	console.log(`name: ${new_name}`);
	console.log(`surname: ${new_surname}`);
}