/*Задание 1:
Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны
передаваться в качестве аргументов.*/

function extractFeatures(objects, property, propertyValue){
  let res = []
  for (let variable of objects) {
    if (variable.hasOwnProperty(property)) {
      if (variable[property] === propertyValue) {
        res.push(variable)
      }
    }
  }
  return res
}

let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' },
{ name: 'Иван', surname: 'Инов' }
];

/*let result = extractFeatures(objects, 'name', 'Иван');
console.log(result)*/

export default {extractFeatures};
