// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка.
// Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками.
// Выведите результат с помощью console.log.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.name = `Point (${x.toFixed(2)}, ${y.toFixed(2)})`
    }

    static square(a, b) {
        const dx = Math.abs(a.x - b.x);
        const dy = Math.abs(a.y - b.y);

        return (dx * dy).toFixed(2)
    }
}

let a = new Point(Math.random()*100, Math.random()*100)
let b = new Point(Math.random()*100, Math.random()*100)
console.log('Part 1:')
console.log(a.name)
console.log(b.name)
console.log(`Square (Point 1, Point 2): ${Point.square(a, b)}\n`);