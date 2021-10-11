// Задание 1

let password;
/* password = "qaz-xsw"
password = '1234-'
password = '4321_'
password = "qaz-xsw"
password = "_zxd" */
password = "123456789"

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
    console.log('The pass is strong')
} else {
    console.log('The pass is not strong enough')
}

// Задание 2

let name, surname;
// name = "Anya";
// surname = "Chan";
name = "AnYa";
surname = "cHan";

nameNew = name[0].toUpperCase() + name.substring(1).toLowerCase()
surnameNew = surname[0].toUpperCase() + surname.substring(1).toLowerCase()

if (name === nameNew && surname === surnameNew) {
    console.log(`The name ${name} ${surname} remained unchanged`);
} else {
    console.log(`The name ${name} ${surname} has been transformed ${nameNew} ${surnameNew}`);
}