// Написать генератор нечётных случайных чисел в диапазоне между n и m включительно.
// Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log
let n, m;
// n = -100, m = -102;
// n = 0, m = 3;
// n = -2, m = 2;
n = 300, m = -5;
let range = Math.abs(m - n);
let numberInRange = Math.round(Math.random() * range);
let min = Math.min(n, m);


/* все числа больше минимула можно уменьшить,если сгенерировалось число на ниждей
границе и оно четрное, то его можно только увеличивать, подходит только для положительных чисел,
для отрицательных обратная логика*/
let number = min + numberInRange;
if (Math.abs(number % 2) === 1) {
    console.log('Сгенерированное число', number);
}
else if (number > min && min >= 0) {
    console.log('Сгенерированное число', number - 1);
}
else if (min >= 0){
  console.log('Сгенерированное число', number + 1);
}
else if (number === min && min < 0) {
    console.log('Сгенерированное число', number + 1);
}
else if (min < 0){
  console.log('Сгенерированное число', number - 1);
}

console.log('Сгенерированное число без корретировки', number);
