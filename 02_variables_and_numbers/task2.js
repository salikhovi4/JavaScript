// Задание 2
// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

let a = 13.123456789;
let b = 2.123;
let n = 5;

let firstNormalized = Math.round(
    a % 1 * Math.pow(10, n)
  );
  let secondNormalized = Math.round(
    b % 1 * Math.pow(10, n)
  );
  
  console.log('Даны два числа', firstNormalized, 'и', secondNormalized)
  console.log('Первое число больше', firstNormalized > secondNormalized);
  console.log('Первое число меньше', firstNormalized < secondNormalized);
  console.log('Первое число ≥ Второе число', firstNormalized >= secondNormalized);
  console.log('Первое число ≤ Второе число', firstNormalized <= secondNormalized);
  console.log('Числа равны', firstNormalized === secondNormalized);
  console.log('Числа не равны', firstNormalized !== secondNormalized);
