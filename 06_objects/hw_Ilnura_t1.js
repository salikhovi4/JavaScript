/* Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны
передаваться в качестве аргументов */
 
function FilterByProp (arr, prop, value){
    let satisfying_arr = [];
    for (let person of objects){
        if (person[prop] == value){
            satisfying_arr.push(person)
        }
    }
    console.log(satisfying_arr);
    return satisfying_arr;
}
let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];
FilterByProp(objects,'name', 'Пётр');
