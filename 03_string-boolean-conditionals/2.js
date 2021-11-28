/* В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами,
и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы —
к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и
console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того,
были ли исходные строки равны преобразованным. */

class Person {
    constructor(name, surname) {
        this.name = name[0].toUpperCase() + name.substring(1).toLowerCase()
        this.surname = surname[0].toUpperCase() + surname.substring(1).toLowerCase()
    }
}
Person.prototype.toString = function personToString() {
    return `${this.name} ${this.surname}`;
}

const firstName = 'DMiTRy';
const surName = 'BaBADeEv';
const person = new Person(firstName, surName);

if (`${firstName} ${surName}` === person.toString()) {
  console.log(`Имя ${person.toString()} осталось без изменений`);
} else {
  console.log(`Имя ${firstName} ${surName} было преобразовано в ${person.toString()}`);
}