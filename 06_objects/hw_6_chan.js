// Задание 1

function getFeatures(objects, property, propertyValue){
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

/*let result = getFeatures(objects, 'name', 'Иван');
console.log(result)*/

export default {getFeatures};

// Задание 2

function createSelect(array, str) {
    let select = document.createElement("select");
    for (let el of array) {
        let val = el.value;
        let isSelected = str === val;
        let option = new Option(el.label, val, isSelected, isSelected);
        select.options.add(option);
    };
    return select;
};

// Задание 3

function convertsToArray(obj){
    let result = []
    if (Array.isArray(obj)) {
        for (let variation of obj) {
            if (typeof variation === "number" || typeof vari === "string") {
                result.push({value: variation,
                    label: variation})
            }
        }
    } else {
        for (let variation in obj) {
            result.push({value: variation,
                label: obj[variation]})
        }
    }

    return result
}

console.log(convertsToArray([1, 2, 'три', 'четыре']));
