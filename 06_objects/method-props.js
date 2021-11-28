let name = '';
let lastName = '';

function getFullName() {
  return this.name + ' ' + this.lastName;
}

let obj = { name, lastName, getFullName };

console.log(obj.getFullName());

obj.whoAmI = function () {
  console.log('My name is', this.name, this.lastName);
}

obj.whoAmI();

delete obj.getFullName;

// ошибка, свойства уже не существует
// console.log(obj.getFullName());

// добавляем функцию другому объекту 2 раза с разными названиями
let otherObj = {
  someMethod: getFullName,
};
otherObj.someOtherMethod = getFullName;

// Меня зовут undefined undefined
console.log(otherObj.someMethod());
console.log(otherObj.someOtherMethod());
