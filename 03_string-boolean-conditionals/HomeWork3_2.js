//Задание 2
//Задание:
/*В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами,
и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы —
к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и
console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того,
были ли исходные строки равны преобразованным.*/

let name, surname;

//name = "OLEg";
//surname = "BeDrin";
name = "Oleg";
surname = "Bedrin";


nameNew = name[0].toUpperCase() + name.substring(1).toLowerCase()
surnameNew = surname[0].toUpperCase() + surname.substring(1).toLowerCase()
if (name === nameNew && surname === surnameNew) {
  console.log(`Имя ${name} ${surname} осталось без изменений`);
} else {
  console.log(`Имя ${name} ${surname} было преобразовано ${nameNew} ${surnameNew}`);
}
