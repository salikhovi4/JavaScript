console.log(console === window.console);
console.log(Math === window.Math);
console.log(parseInt === window.parseInt);
console.log(document === window.document);

Math = 14;
Math.random();

delete console;
console.log();

x = 123;
window.x;

function myFunc() {};
window.myFunc();

// global namespace pollution - загрязнение глобальной области видимости
