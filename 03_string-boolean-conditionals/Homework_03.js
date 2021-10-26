let password = 'qaz-xsw'
if (password.length > 4 && (password.includes('-') || password.includes('_'))) {
    console.log('Пароль надежный')
} else {
    console.log('Пароль недостаточно надежный')
}


let name = 'РомаН'
let surname = 'СтепаНЮК'
let new_name = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase()
let new_surname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase()
console.log(new_name, new_surname)
if (new_name === name && new_surname === surname) {
    console.log('Имя осталось без изменений')
} else {
    console.log('Имя было преобразовано')
}
