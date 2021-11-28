// Задание 2

let a, b, n, aFount, bFount;
a = 13.890123;
b = 2.891564;
n = 2;
aFount = Math.round(a % 1 * Math.pow(10, n));
bFount = Math.round(b % 1 * Math.pow(10, n));
console.log('Дробная часть а:', aFount);
console.log('Дробная часть b:', bFount);
console.log(aFount > bFount);
console.log(aFount < bFount);
console.log(aFount >= bFount);
console.log(aFount <= bFount);
console.log(aFount === bFount);
console.log(aFount !== bFount);
