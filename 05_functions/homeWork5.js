// Задание 1:
// Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов
// функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.

function validator(data, blockList) {

    let newArray = [];
    
    for (let value of data) {

        if (!(blockList.includes(value))) {
            newArray.push(value);
        }
    }    
    return newArray;
  }

let myEmails = ['2test@mail.ru', 'test@yahoo.com', 'test@gmail.com', 'bla@mail.ru', 'bla@gmail.com', '123456789@yandex.ru'];
let blockList = ['123456789@yandex.ru', 'test@yahoo.com']

let result = validator(myEmails, blockList);
console.log(result);

// Задание 2:
// Напишите функцию, которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок.
// В качестве аргументов функция принимает 3 параметра:

// - Общая сумма корзины
// - Количество товаров в корзине
// - Промокод (по умолчанию null)

// Правила и порядок (порядок важен!) начисления скидок:
// - Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
// - При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
// - При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
// - Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
// Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.

function calculateDiscount(totalAmount, countGoods, promo = null) {

    if (promo === 'ДАРИМ300') {
      if (totalAmount > 300) {
        totalAmount -= 300;
      } else {
        return 0; 
      }
    }
    if (countGoods >= 10) {
      totalAmount *= 0.95;
    }
    if (totalAmount > 50000) {
      totalAmount = 50000 + ((totalAmount - 50000) * 0.8);
    }
    if (promo === 'СКИДКА15' && totalAmount >= 20000) {
      totalAmount *= 0.85;
    }
    return totalAmount;
  }
  
  calculateDiscount(2000, 10, 'ДАРИМ300'); // 1 615
  calculateDiscount(80000, 400, 'ДАРИМ300'); // 70 572
  calculateDiscount(290, 2, 'ДАРИМ300'); // 0
  calculateDiscount(2000, 2, 'СКИДКА15'); // 1 700
  calculateDiscount(80000, 400, 'СКИДКА15'); // 64 600
  result = calculateDiscount(2000, 2); // 2 000
  console.log(result);