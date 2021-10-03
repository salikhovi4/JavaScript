// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.
let a, b, n, aFount, bFount;
//a = 13.123456789, b = 2.123, n = 5;
// a = 13.890123, b = 2.891564, n = 2;
a = 13.890123, b = 2.891564, n = 3;
aFount = Math.round(a % 1 * Math.pow(10, n));
bFount = Math.round(b % 1 * Math.pow(10, n));
console.log(aFount);
console.log(bFount);
console.log(aFount > bFount);
console.log(aFount < bFount);
console.log(aFount >= bFount);
console.log(aFount <= bFount);
console.log(aFount === bFount);
console.log(aFount !== bFount);
