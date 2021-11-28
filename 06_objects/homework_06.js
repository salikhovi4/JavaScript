let concertVisitors = [
    { name: 'Василий', surname: 'Васильев', age: 25 },
    { name: 'Иван', surname: 'Иванов', age: 38 },
    { name: 'Пётр', surname: 'Петров', age: 43 },
    { name: 'Лев', surname: 'Яковлев', age: 64 },
    { name: 'Кортран', surname: 'Камон', age: 21 },
    { name: 'Александр', surname: 'Сандров', age: 56 },
    { name: 'Белатриса', surname: 'Васильева', age: 85 },
    { name: 'Вениамин', surname: 'Пидрович', age: 61 },
    { name: 'Петриса', surname: 'Метрова', age: 22 },
    { name: 'Электриса', surname: 'Мисаунова', age: 23 },
    { name: 'Маран', surname: 'Аран', age: 21 },
    { name: 'Инокентий', surname: 'Федорович', age: 76 },
    { name: 'Маргарита', surname: 'Рязанова', age: 72 },
    { name: 'Екатерина', surname: 'Рябова', age: 25 },
    { name: 'Пётр', surname: 'Жихарев', age: 26 },
    { name: 'Елена', surname: 'Кругловая', age: 28 },
    { name: 'Валенсия', surname: 'Мерентьева', age: 24 },
    { name: 'Александра', surname: 'Угловая', age: 37 },
    { name: 'Лаура', surname: 'Мурьянова', age: 97 },
    { name: 'Вениана', surname: 'Брендина', age: 32 },
    { name: 'Кавалан', surname: 'Аранян', age: 19 },
    { name: 'Юлиан', surname: 'Царь', age: 40 },
    { name: 'Петран', surname: 'Рассел', age: 36 },
    { name: 'Керри', surname: 'Джон', age: 98 }
]


function getVisitorsBeforeAgeBorder(concertVisitors, ageVisitor, ageBorder) {
    let result = []
    for (let visitor in concertVisitors) {
        if (concertVisitors[visitor][ageVisitor] < ageBorder) {
            result.push(concertVisitors[visitor])
        }
    }
    return result
}
let results = getVisitorsBeforeAgeBorder(concertVisitors, 'age',50);
console.log(results)

