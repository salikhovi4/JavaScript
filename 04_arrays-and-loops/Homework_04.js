// Задание 1
let count = 42
let n = -3
let m = -10
let numbers = []
for (let i = 0; i < count; ++i) {
    let range = Math.abs(m - n)
    let numberInRange = Math.random() * range
    let min = Math.min(n, m)
    number = min + numberInRange
    numbers.push(number)
}
console.log(numbers)


// Задание 2
let str = 'Привет, мир!'
inv_str = ''
for (let i in str) {
    inv_str += str[str.length-i-1]
}
console.log(inv_str)


// Задание 3
roadMines = [true, false, false, false, false, false, false, false, false, true]
damage = 0
for (let i in roadMines) {
    console.log(`Танк переместился на ${Number(i) + 1}`)
    if (roadMines[i] === true) {
        damage += 1
        if (damage === 2) {
            console.log('Танк уничтожен')
            break
        } else {
            console.log('Танк поврежден')
        }
    }
}


// Задание 4
let month = []
for (let day_month = 1; day_month < 32; ++day_month) {month.push(day_month)}
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
first_day = 'воскресенье'
day_week = week.indexOf(first_day)
for (day_month of month) {
    console.log(`${day_month} января, ${week[day_week % 7]}`)
    day_week += 1
}
