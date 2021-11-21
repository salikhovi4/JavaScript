// Задание 1: Напишите функцию, фильтрующую массив объектов по значению свойства. 
// Массив, название свойства и нужное значение должны передаваться в качестве аргументов.
// Цель задания:
// Попрактиковаться в использовании сложных структур данных (массив объектов) и работе со свойствами.

let objects = [
    { name: "Василий", surname: "Васильев" },
    { name: "Иван", surname: "Иванов" },
    { name: "Пётр", surname: "Петров" },
    ];
    
function filterByProp(objects, propName, propValue) {
    let out_objects = [];
    for (let i = 0; i < objects.length; i++){
    if (objects[i][propName] == propValue){
        out_objects.push(objects[i]);
    }
    }
    return out_objects;
}

console.log(filterByProp(objects, "name", "Иван"));

export default {filterByProp}
