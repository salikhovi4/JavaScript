/* Задание 2:
    Напишите функцию, создающую выпадающий список на веб-странице (HTML select) из массива объектов со значениями.
    Массив должен содержать объекты со свойствами:
    value — значение для атрибута value тэга option
    label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)
    Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента).
    По умолчанию выбирается 0-й элемент массива значений. Если переданное значение не найдено в
    массиве элементов, то нужно также выбрать 0-й элемент.
    Возвращаемое значение — DOM-элемент select.
    Создайте базовую html-разметку в файле index.html. В неё поместите получившийся код с
    помощью <script src="./main.js"></script>.
    Внутри другого тэга script перед </body> поместите код, который создаст новый select с
    произвольным массивом значений и поместит его в любое место в body.
AND
Задание 3:
    Дополнительное задание
    Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания
    выпадающего списка могла обрабатывать не только массив объектов, но и другие виды входящих значений, а именно:
    Массив примитивных значений типа string или number. В таком случае value и label будут равны.
    Например: [1, 2, 'три', 'четыре', ...]
    Объект с произвольными свойствами и значениями типа string или number. В таком случае каждый элемент должен формироваться
    из ключа (value) и значения (label) каждого свойства переданного объекта. Например: { value1: 'Значение 1', value2: 'Значение 2', ... }
*/


function createSelect(arr, str) {
    let select = document.createElement("select");
    // Type checking
    let mixed = false
    for (let obj of arr) {
        if (typeof obj !== "object" ) {
            mixed = true;
        }
    }
    if (!mixed) {
      for (let e of arr) {
        let value = e.value;
        let isSelected = str === value;
        let option = new Option(e.label, value, isSelected, isSelected);
        select.options.add(option);
      }
    } else {
        for (let e of arr) {
            let value = e;
            let isSelected = str === value;
            let option = new Option(value, value, isSelected, isSelected);
            select.options.add(option);
          }
    }
    return select;
};