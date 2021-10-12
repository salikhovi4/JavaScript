//Задание 2
//
// Цель задания:
// Научиться округлять и надёжно сравнивать дробные части чисел с помощью console.log
//
// Задание:
// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.
//
// Проверка результата:
// Для проверки подставляйте разные значения переменных a, b и n и проверяйте получившийся результат.
// Сравнения должны давать соответствующий результат true или false в зависимости от получившихся дробных частей.
//
// Примеры для проверки:
// Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
// Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
// Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.
precision = Math.round(Math.random()*9+1);    // от 1 до 10 знаков точность
let first = (Math.round(Math.random()*1e3)) + Math.random();
let second = (Math.round(Math.random()*10) + Math.random());
let firstNormalized = Math.floor((first-Math.floor(first)) * Math.pow(10, precision));
let secondNormalized = Math.floor((second-Math.floor(second)) * Math.pow(10, precision));
console.log(first, second, 'Точность= ', precision)
console.log(firstNormalized, secondNormalized)
console.log('Сравниваем дробные части чисел')
console.log('Первое больше второго: ', firstNormalized>secondNormalized)
console.log('Первое больше, либо равно второму: ', firstNormalized >= secondNormalized)
console.log('Первое меньше второго: ', firstNormalized<secondNormalized)
console.log('Первое меньше, либо равно второму: ', firstNormalized <= secondNormalized)
console.log('Первое равно второму: ', firstNormalized===secondNormalized)
console.log('Первое не равно второму: ', firstNormalized !== secondNormalized)
//console.log(first, Math.floor(first), second, Math.floor(second), precision, firstNormalized, secondNormalized)

