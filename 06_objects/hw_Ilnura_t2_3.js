/* Напишите функцию, создающую выпадающий список на веб-странице (HTML select) из массива объектов со значениями.
Массив должен содержать объекты со свойствами:

value — значение для атрибута value тэга option
label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)

Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента).
По умолчанию выбирается 0-й элемент массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.
Возвращаемое значение — DOM-элемент select.
Создайте базовую html-разметку в файле index.html. В неё поместите получившийся код с помощью <script src="./main.js"></script>.
Внутри другого тэга script перед </body> поместите код, который создаст новый select с произвольным массивом значений и поместит его в любое место в body.
 */
let arr = [
    {
        value: "Value1",
        label: "Label1",
    },
    {
        value: "Value2",
        label: "Label2",
    },
    {
        value: "Value3",
        label: "Label3",
    },
    {
        value: "Value4",
        label: "Label4",
    },
    {
        value: "Value5",
        label: "Label5",
    },
];

function createSelect(arr, str) {
    let select = document.createElement("select");
    if (Array.isArray(arr)) {
        if (typeof arr[0] === "number" || typeof arr[0] === "string")
            for (let value of arr) {
                let isSelected = str === value;
                let option = new Option(value, value, isSelected, isSelected);
                select.options.add(option);
            }
        else
            for (let el of arr) {
                let value = el.value;
                let isSelected = str === value;
                let option = new Option(el.label, value, isSelected, isSelected);
                select.options.add(option);
            }
    }
    else {
        for (let el of Object.entries(arr)) {
            let value = el[0];
            let isSelected = str === value;
            let option = new Option(el[1], value, isSelected, isSelected);
            select.options.add(option);
        }
    }
    return select;
}

document.body.append(createSelect(arr));