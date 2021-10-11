// Задание 3

let n, m;
n = 2;
m = 5;
let range = Math.abs(m - n);
let numInRange = Math.round(Math.random() * range);
let min = Math.min(n, m);
let num = min + numInRange;
if (Math.abs(num % 2) === 1) {
  console.log('Сгенерированное число', num);
}
else if (num > min && min >= 0) {
  console.log('Сгенерированное число', num - 1);
}
else if (min >= 0){
  console.log('Сгенерированное число', num + 1);
}
else if (num === min && min < 0) {
  console.log('Сгенерированное число', num + 1);
}
else if (min < 0){
  console.log('Сгенерированное число', num - 1);
}
console.log('Сгенерированное число без корретировки', num);
