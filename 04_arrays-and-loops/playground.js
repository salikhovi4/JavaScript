// простое повторное действие по счетчику
for (let i = 0; i < 10; ++i) {
    console.log(i)
}

// заполнение массива на основе счетчика
let a = [];
for (let i = 0; i < 10; ++i) {
    a.push(Math.pow(i, 2));
}

// заполнение массива на другого массива
let b = [];
for (let po2 of a) {
    b.push(po2 / 2);
}

// Заполнение пустого массива на основе другмх данных (длина массива неизвестна)
let file; // какой то файл
let lines = [];
let next;
while (next = file.nextLine()) {
    lines.push(next);
}

// Обработка значений массива
for (let line of lines) {
    console.log('Длина строки:', line.length);
}

// Обработка индексов массива
for (let number in lines) {
    console.log(`Длина строки #${number}: ${lines[number].length}`);
}

// Обработка значений или индексов массива в обратном порядке
let aReversed = [];
for (let i = a.length - 1; i >= 0; --i) {
    aReversed.push(a[i]);
}

// Цикл со счетчиком и сложной логикой изменения значения счетчика
for (let x = 0; x < 100; x += Math.round(Math.random() * 5)) {
    console.log(x);
}
