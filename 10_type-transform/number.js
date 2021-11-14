Number('42'); // 42
Number('3.14'); // 3.14 (запятая не работает)
Number('-42'); // -42
Number('+42'); // 42

Number('0b1001'); // 9

Number('\n\t 42 \n\t'); // 42, пробельные символы не учитываются

Number('Как сделать число?'); // NaN

Number(true); // 1
Number(false); // 0

Number(null); // 0
Number(undefined); // NaN

Number({}); // NaN
Number([1, 2, 3, 4, 5]); // NaN
Number(() => {}); // NaN

const value = 'точно не число';

// этот код не сработает, тк выражение NaN === NaN это false
if (Number(value) === NaN) {
  console.log('Никогда не выполнится');
}

// так работает
if (isNaN(Number(value))) {
  console.log('Не удалось разобрать число');
}

parseInt('42');
parseFloat('3.14');
