// Задание 1
// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка.
// Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. 
// Выведите результат с помощью console.log.

let x1 = 2, y1 = 3; 
let x2 = 10, y2 = 5;

let s = (Math.abs(x1 - x2) * Math.abs(y1 - y2));

console.log(s);