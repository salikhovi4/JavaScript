// синтаксис стрелочной ф-ции: (аргументы) => { тело ф-ции }
const arrowFn1 = (name, surname) => {
  console.log(name, ' ', surname);
};
arrowFn1('John', 'Snow');

// Если у ф-ции единственный аргумент, то можно опустить скобки
const arrowFn2 = name => {
  console.log(name)
};
arrowFn2();

// Для ф-ций без аргументов указываются пустые скобки
const arrowFn3 = () => {
  console.log('Emma');
}
arrowFn3();

// А если опустить фигурные скобки, то ф-ция вернет результат выражения
const arrowFn4 = (name, surname) => `Hello, ${name} ${surname}`; // ({ name, surname }) для объекта
console.log(arrowFn4('Emma', 'Hewitt'));

// То же самое с фигурными скобками для наглядности
const arrowFn5 = (name, surname) => {
  return `Hello, ${name} ${surname}`;
};
console.log(arrowFn5('Emma', 'Hewitt'));

const me = {
  name: 'Dinar',
  surname: 'Batyrshin',
  // Ф-ция метод объекта, this будет указывать на сам объект
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
  // Аналогичная ф-ция, объявленная как стрелочная
  getFullNameArrow: () => `${this.name} ${this.surname}`,
}

// Работает
console.log(me.getFullName());
// Не сработает, тк в стрелочной ф-ции нет собственного this
console.log(me.getFullNameArrow());
