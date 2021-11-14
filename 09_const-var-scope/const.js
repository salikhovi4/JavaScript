// Ошибка! Нельзя объявить константу без значения
// const x;

{
  // Объявляем константу healthy сщ значением 36.6
  const healthyTemp = 36.6;

  // Ошибка! Нельзя присвоить константе новое значение
  // healthyTemp += 20;
}

// Ошибка! Имя healthy не объявлено в этой области видимости
console.log(healthyTemp);


// Когда применять const
// 1. Неизменяемые величины
// Ускорение свободного падения на Земле (g)
const EARTH_FALL_ACCELERATION = 9.78; // UPPER_SNAKE_CASE
// и на марсе
const MARS_FALL_ACCELERATION = 3.711;

// 2. Значения, которые мы не хотим случайно изменить
for (const item of items) {
  console.log(item);
}


// Создаем константу с объектом
const me = { name: 'Batyrshin' };

// Мы можем свободно менять свойства свмого объекта
me.surname = me.name;
me.name = 'Dinar';

// Ошибка! Но мы не можем присвоить в константу новый объект
me = {};
