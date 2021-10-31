let fruit = 'apple';

switch (fruit) {
    case 'apple':
        console.log('перед нами яблоко');
        break;
    case 'banana':
        console.log('перед нами банан');
        break;
    case 'watermelon':
    case 'blueberries':
        console.log('это ягода, а не фрукт');
        break;
    default:
        console.log('не знаю такого фрукта');
        break;
}
