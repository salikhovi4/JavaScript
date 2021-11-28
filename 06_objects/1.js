/*
Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны
передаваться в качестве аргументов.

В конце файла с кодом домашнего задания напишите конструкцию export default {название функции},
чтобы была возможность автоматической проверки получившейся функции.

Проверка результата:
Для проверки результата можете воспользоваться автоматическими тестами. Для этого можно запустить команду npm test из консоли.
*/

function filterObjects(objects, property, propertyValue){
    let filtered = []
    for (let object of objects) {
      if (object.hasOwnProperty(property)) {
        if (object[property] === propertyValue) {
          filtered.push(object)
        }
      }
    }
    return filtered
}

// export default {extractFeatures};