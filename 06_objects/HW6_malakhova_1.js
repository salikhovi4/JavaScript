// Задание 1.
// Задание:
// Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны
// передаваться в качестве аргументов. Пример использования:
// let objects = [
// { name: 'Василий', surname: 'Васильев' },
// { name: 'Иван', surname: 'Иванов' },
// { name: 'Пётр', surname: 'Петров' }
// ]

// fn - функция, которую нужно написать (хорошее название тоже нужно придумать)
// let result = fn(objects, 'name', 'Иван');

// Результат выполнения должен быть:
// [
//     { name: 'Иван', surname: 'Иванов' }
// ]

// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции},
// чтобы была возможность автоматической проверки получившейся функции.

// Проверка результата:
// Для проверки результата можете воспользоваться автоматическими тестами. Для этого можно запустить команду npm test из консоли.

let objects = [
    { name: "Василий", surname: "Васильев" },
    { name: "Иван", surname: "Иванов" },
    { name: "Пётр", surname: "Петров" },
    ];

function extract_by_value(objects, p_name, p_value) {
    let res = [];
    for (let i = 0; i < objects.length; i++){
        if (objects[i][p_name] == p_value){
            res.push(objects[i]);
        }
    }
    return res;
}

console.log(extract_by_value(objects, "name", "Иван"));