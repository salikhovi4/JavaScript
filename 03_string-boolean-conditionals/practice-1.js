// Вычисление дискриминанта и решения квадратного уравнения
// a*x*x + b*x + c = 0
// Даны параметры a, b и c для квадратного уравнения.
// Нужно вывести возможные значения х этого уравнения.

let a = 6;
let b = 5;
let c = -1;

let d = b * b - 4 * a * c;

// старое решение
// let dRoot = Math.sqrt(d);
// console.log('d =', dRoot);
// console.log('x1 =', (-b + dRoot) / (2 * a));
// console.log('x1 =', (-b - dRoot) / (2 * a));

if (d < 0) {
    console.log('Корнем является комплексное значение');
} else if (d === 0) {
    let x = -b / (2 * a);
    console.log('Корень уравнения: x =', x);
} else {
    let dRoot = Math.sqrt(d);
    let x1 = (-b + dRoot) / (2 * a);
    let x2 = (-b - dRoot) / (2 * a);

    // округлим корни до 2-х знаков после запятой
    x1 = Math.round(x1 * 100) / 100;
    x2 = Math.round(x2 * 100) / 100;
    
    console.log(`Корни уравнения: x1 = ${x1}, x2 = ${x2}`);
}

// Определяем день недели как выходной или будний день

let day = 'Tuesday';

switch(day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${day} - это будний день`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`${day} - это выходной день`);
        break;
    default:
        console.log(`Я не слышал одне недели, который называется ${day}`);
}

// Определяем четность числа

let num = 2;
if (num % 2 === 0) {
    console.log('число', num, 'четное');
} else {
    console.log('число', num, 'нечетное')
}
