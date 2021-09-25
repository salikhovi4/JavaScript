// Пропорции для рецепта Кровавой Мэри.
// Даны пропорции ингредиентов для Кр. Мэри и объем напитка, который
// нужно получить. Вычислить необходимый объем ингредиентов из этих
// данных

// ингредиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

// желаемый объем напитка
let volume = 500;

// коэффициент для полученияобъема ингредиента
let k = (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

// сколько нужно водки для желаемого объема Кр. Мэри
console.log(k * vodka);

// Вычисление дискриминанта и решения квадратного уравнения
// a*x*x + b*x + c = 0
// Даны параметры a, b и c для квадратного уравнения.
// Нужно вывести возможные значения х этого уравнения.

let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

// Корень дискриминанта
let dRoot = Math.sqrt(d);
console.log('x1 =', (-b + dRoot) / (2 * a));
console.log('x1 =', (-b - dRoot) / (2 * a));

// Вычисляем n чисел ряда Фибоначчи.
// Каждое следующее число - сумма двух предыдущих.

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
  prevPrev = prev;
  prev = current;
  current += prevPrev;
  console.log(current);
}
