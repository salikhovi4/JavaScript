// Задание 3  Дополнительное задание
// Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания
// выпадающего списка могла обрабатывать не только массив объектов, но и другие виды входящих значений, а именно:
// Массив примитивных значений типа string или number. В таком случае value и label будут равны.
// Например: [1, 2, 'три', 'четыре', ...]
// Объект с произвольными свойствами и значениями типа string или number. В таком случае каждый элемент должен формироваться
// из ключа (value) и значения (label) каждого свойства переданного объекта. Например: { value1: 'Значение 1', value2: 'Значение 2', ... }


function convertsToArray(obj){
  let result = []
  if (Array.isArray(obj)) {
    for (let vari of obj) {
      if (typeof vari === "number" || typeof vari === "string") {
        result.push({value: vari,
                    label: vari})
      }
    }
  } else {
    for (let vari in obj) {
        result.push({value: vari,
                   label: obj[vari]})
    }
  }

  return result
}


console.log(convertsToArray([1, 2, 'три', 'четыре']));
