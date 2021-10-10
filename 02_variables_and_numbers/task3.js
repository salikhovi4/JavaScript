// Задание 3
// Написать генератор нечётных случайных чисел в диапазоне между n и m включительно.
// Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. 
// Вывести результат с помощью console.log.

let n = -3;
let m = -10;
// кол-во цифр, которые могут быть сгенерированы
let range = Math.abs(m - n);
// округленное число от 0 до range
let numberInRange = Math.floor(Math.random() * range);
// Левая граница возможного числа
let min = Math.min(n, m);
let candidate = min + numberInRange

if (Math.abs(candidate % 2) === 1) {
    console.log('Сгенерированное число', candidate);
}
else {
    console.log('Сгенерированное число', candidate + 1);
}
