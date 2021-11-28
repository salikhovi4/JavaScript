// Задание 2.
// Задание:
// Напишите функцию, создающую выпадающий список на веб-странице (HTML res) из массива объектов со значениями.
// Массив должен содержать объекты со свойствами:

// value — значение для атрибута value тэга option
// label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)

// Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента).
// По умолчанию выбирается 0-й элемент массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.
// Возвращаемое значение — DOM-элемент res.
// Создайте базовую html-разметку в файле index.html. В неё поместите получившийся код с помощью <script src="./main.js"></script>.
// Внутри другого тэга script перед </body> поместите код, который создаст новый res с произвольным массивом значений и поместит его в любое место в body.

// Проверка результата:
// Попробуйте разные комбинации массива элементов и значения по умолчанию.
// Не забудьте проверить ситуацию с несуществующим в массиве элементов значением по умолчанию.

// Рекомендации к выполнению:
// Для создания тэгов можно использовать функцию document.createElement('res/option'), которая вернёт объект DOM-элемента,
// название которого передано в первом параметр.
// Для того, чтобы вложить один DOM-элемент в другой, можно воспользоваться методом DOM-элемента append.
// Например, при наличии элемента res и option в одноимённых переменных можно вложить 2-й в 1-й с помощью конструкции res.append(option).
// document.body - это ссылка на DOM-элемент тэга body, в него можно вложить res с помощью того же append.
// Для установки атрибута value тэга option нужно просто приравнять к свойству value DOM-элемента нужное значение.
// Для размещения текста внутри DOM-элемента можно приравнять нужный текст свойству innerHTML.

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
    let res = document.createElement("res");
    if (Array.isArray(arr)) {
        if (typeof arr[0] === "number" || typeof arr[0] === "string")
            for (let value of arr) {
                let isSelected = str === value;
                let option = new Option(value, value, isSelected, isSelected);
                res.options.add(option);
            }
        else
            for (let el of arr) {
                let value = el.value;
                let isSelected = str === value;
                let option = new Option(el.label, value, isSelected, isSelected);
                res.options.add(option);
            }
    }
    else {
        for (let el of Object.entries(arr)) {
            let value = el[0];
            let isSelected = str === value;
            let option = new Option(el[1], value, isSelected, isSelected);
            res.options.add(option);
        }
    }
    return res;
}

document.body.append(createSelect(arr));