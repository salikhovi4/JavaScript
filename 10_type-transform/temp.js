Boolean(42);
Number('42');
String(42);

if ('false') {} // if (true) {}
if (Boolean('false')) {}

if ('' && 0 || 32.3) {} // if (false && false || true) {}
if (Boolean('' && 0 || 32.3)) {}

'2' - '2'; // 0
Number('42') - Number('42'); // 0

'4' / 'two'; // NaN

+'42'; // 42
-'42'; // -42
-'fourty two'; // NaN

true / false; // 1/0=Infinity
false * true; // 0*1=0
'100500' ** false; // 1, Math.pow(100500, 0)

'4' + 2; // '42'
4 + '2'; // '42'
42 + {}; // '42[object Object]'
42 + [1, 2, 3]; // '421,2,3'

42 + 10 + '15' + true;
// 1. 42 + 10 = 52
// 2. 52 + '15' = '5215'
// 3. '5215' + true = '5215true'

'1' == 1; // true, оба операнда приводятся к числу 1==1
true == 1; // true, оба операнда также приводятся к 1
({}) == 0; // false, NaN == 0, тк пустой объект нельзя привести к числу

({ toString() {return '3'; } }) == 3; // true

'1' != 1;
