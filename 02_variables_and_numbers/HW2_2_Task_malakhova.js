
// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

let a = 13.123456789;
let b = 2.123;
let n = 5;

let firstNormalized = Math.round(
  a * Math.pow(10, n)
);
let secondNormalized = Math.round(
  b * Math.pow(10, n)
);

console.log('Исходные числа равны', a === b);
console.log('Числа равны', firstNormalized === secondNormalized);
console.log('Первое число больше', firstNormalized > secondNormalized);
console.log('Первое число меньше', firstNormalized < secondNormalized);
console.log('Первое число больше или равно второму', firstNormalized >= secondNormalized);
console.log('Первое число меньше или равно второму', firstNormalized <= secondNormalized);
