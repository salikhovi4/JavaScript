// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

a = Math.random()*100
b = Math.random()*100;
let n = Math.round(Math.random()*10);
let aFract = (a % 1).toFixed(n);
let bFract = (b % 1).toFixed(n);

console.log(`Part 2:\na: ${a}\nb: ${b}`)
console.log(`Fractional Part of a (${n} decimals): ${aFract}`)
console.log(`Fractional Part of b (${n} decimals): ${bFract}`)
console.log(`>: ${aFract > bFract}`);
console.log(`<: ${aFract < bFract}`);
console.log(`>=: ${aFract >= bFract}`);
console.log(`<=: ${aFract <= bFract}`);
console.log(`===: ${aFract === bFract}`);
console.log(`!==: ${aFract !== bFract}`);