/*Задание 1:
Напишите генератор массивов длиной count со случайными числами от n до m. Учтите,
что n и m могут быть отрицательными,
а также может быть n > m или n < m. Выведите результат с помощью console.log.*/

let n, m, count;
m = -3;
n = -8;
count = 10;
let array = [];
let range = Math.abs(m - n);
let min = Math.min(n, m);

for (let i = 1; i <= count;  i++) {
  array.push(min + Math.round(Math.random() * range));
}
console.log(array.length);
