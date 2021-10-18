// Задание 1

// n = 0, m = 100, count = 100;
// n = 2, m = 5, count = 50;
// n = 100, m = -5, count = 70;
// n = -3, m = -10, count = 42.

let n, m, count;
n = 100;
m = -5;
count = 70;

let nums = [];
let range = Math.abs(m - n);
let min = Math.min(n, m);

for (let i = 1; i <= count;  i++) {
    nums.push(min + Math.round(Math.random() * range));  // добавить в конец массива
}
console.log(nums.length);

// Задание 2

// 'Привет, мир!' → '!рим ,тевирП';
// '1' → '1';
// '' → ''.

let str = 'Hello, world!';
let new_str = '';

for (let i in str) {
    new_str = new_str + str[str.length - 1  - i ];
}
console.log(new_str);

// Задание 3

// Для roadMines = [true, true, true, true, true, true, true, true, true, true] вывод: танк переместился на 1, танк повреждён, танк переместился на 2, танк уничтожен.
// Для roadMines = [true, false, false, false, false, false, false, false, false, true] вывод: танк переместился на 1, танк повреждён, танк переместился на 2, 3, 4, 5, 6, 7, 8, 9, 10, танк уничтожен.
// Для roadMines = [false, false, false, true, false, false, false, false, false, false] вывод: танк переместился на 1, 2, 3, 4, танк повреждён, танк переместился на 5, 6, 7, 8, 9, 10.
// Для roadMines = [false, false, false, false, false, false, false, false, false, false] вывод: танк переместился на 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

let roadMines;
let count = 0;
roadMines = [false, false, false, false, false, false, false, false, false, false];

for (let road in roadMines) {
    console.log(`The tank moved to ${parseInt(road) + 1}`);
    // parseInt - принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
    if (roadMines[road]) {
        count ++
        if (count === 1) {
            console.log('The tank destroyed');
        } else {
            break
        }
    }
}
console.log(count < 2 ? 'The tank left' : 'The tank destroyed')

// Задание 4

// Для любого указанного дня недели 1 января все дни выводятся корректно. Например, для вторника:
// 1 января, вторник
// 2 января, среда
// 3 января, четверг
// 4 января, пятница
// 5 января, суббота
// 6 января, воскресенье
// 7 января, понедельник
// и т.д.

let date = [];
let dayOfWeek= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let start = "Tuesday";
let correct;

for (let i = 1; i <= 31; i++) {
    date.push(i);
}

for (let ind in dayOfWeek) {
    if (dayOfWeek[ind] === start) {
        correct = parseInt(ind);
        break
    }
}

for (let d = 0; d < date.length; d++) {
    console.log(`${date[d]} January, ${dayOfWeek[(d + correct) % 7]}`);
}
