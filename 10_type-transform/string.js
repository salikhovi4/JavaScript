String(true); // 'true'
String(false); // 'false'

String(42); // '42'
String(3.14); // '3.14'

String(null); // 'null'
String(undefined); // 'undefined'

String({}); // '[object Object]'
String({
  toString() {
    return 'Вот что будет если преобразовать объект в строку'
  }
}); // Вот что будет если преобразовать объект в строку

String([
  true,
  false,
  1,
  1.1,
  'string',
  {},
  { toString() { return 'toString()' } },
  null, // ''
  undefined, // ''
]); // 'true,false,1,1.1,string,[object Object],toString(),,'

console.log(!!String([null]));
console.log(!!String([undefined]));
