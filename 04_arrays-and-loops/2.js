/* С помощью цикла создать перевёрнутый вариант произвольной
 строки. Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП». */

 const string = "Привет, мир!"
 let array = []

 for (let i = 0; i < string.length; i++) {
     array.unshift(string[i]);
 }
 console.log(array.join(""));