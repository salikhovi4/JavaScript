// Задание 1

// Цель задания:
// Практика сложных условий. Научиться искать подстроку внутри строки.

// Задание:
// В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля. Пароль является надёжным,
// когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'. Выведите в консоль сообщения
// «Пароль надёжный» или «Пароль недостаточно надёжный».

// Проверка результата:
// Для проверки запустите код с разными вариантами надёжных и ненадёжных паролей. Примеры корректных паролей:

// 1234-
// 4321_
// qaz-xsw
// _zxd

// Примеры некорректных паролей:

// _-a
// qaz
// _-3
// 123456789

// Пароль является надёжным, когда в нём есть хотя бы 4 символа, среди которых есть хотя бы один из символов «-», «_».

// Критерии оценки:
// Код корректно выводит сообщение в зависимости от значения переменной password.

// Рекомендации к выполнению:
// Для проверки наличия в строке другой строки можно воспользоваться конструкцией password.includes('x'), где 'x' — строка для поиска.


let password = '32344rffdc_--rfr';
let is_correct = false;
if (password.length >= 4) {
    if (password.includes('-') || password.includes('_')) {
        is_correct = true
    }
}

console.log(is_correct)