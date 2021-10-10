let fibo = [];

fibo.push(1);
fibo.push(1);
fibo.push(2); // 1 + 1
fibo.push(3); // 1 + 2
fibo.push(5); // 2 + 3
fibo.push(8); // 3 + 5
fibo.push(13); // 5 + 8

// и тд

fibo = [1, 1];

for (let i = 1; i < 49; ++i) {
  fibo.push(fibo[i] + fibo[i - 1]);
}

// 1) let i = 1
// 2) i < 49 т.е. 1 < 49 true
// 3) push(2)
// 4) ++i; i = 2
// 5) i < 49 т.е. 2 < 49 true
// 6) push(3)
// ...
// i < 49 т.е. 49 < 49 false

console.log(fibo);
