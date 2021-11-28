// Задание 1
// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными,
// а также может быть n > m или n < m. Выведите результат с помощью console.log.
// Проверка результата:
// Для проверки подставляйте различные значения count, m, n и смотрите на корректность результата. Примеры значений для проверки:
// n = 0, m = 100, count = 100;
// n = 2, m = 5, count = 50;
// n = 100, m = -5, count = 70;
// n = -3, m = -10, count = 42.

let n = 0;
let m = 100;
let count = 100;
let array = [];
let range = Math.abs(m - n);
let min = Math.min(n, m);
for (let i = 1; i <= count; i++) {
	array.push(min + Math.round(Math.random() * range));
}
console.log(array)