// Задание 1.

// Цель задания:
// Попрактиковаться в использовании сложных структур данных (массив объектов) и работе со свойствами.

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

// Критерии оценки:
// Автоматические тесты для MR проходят успешно. Названия переменных, функций и аргументов достаточно информативные.

// Рекомендации к выполнению:
// Не забывайте о том, что массивы и объекты передаются по ссылке. Поэтому для формирования массива-результата нужно создать
// новый отдельный массив, а не изменять старый, который пришёл в качестве параметра.


let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];


function fn(obj_list, property, value) {
    let new_list = Array();
    for (let i = 0; i < obj_list.length; i += 1) {
        if (obj_list[i][property] == value) {
            new_list.push(obj_list[i])
        }
    }
    return new_list
}

console.log(fn(objects, 'name', 'Иван'));
// export default fn