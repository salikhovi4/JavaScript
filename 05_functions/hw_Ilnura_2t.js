/* Напишите функцию, которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок.
В качестве аргументов функция принимает 3 параметра:

- Общая сумма корзины
- Количество товаров в корзине
- Промокод (по умолчанию null)

Правила и порядок (порядок важен!) начисления скидок:
- Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
- При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
- При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
- Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок. */

function get_priсe(price, number_of_goods, promocode = null) {
    if (promocode === 'ДАРИМ300') {
      if (price > 300) {
        price -= 300
      } else {
        console.log(0);
        return 0; 
      }
    }
    if (number_of_goods >= 10) {
      price *= 0.95
    }
    if (price > 50000) {
      price = 50000 + (price - 50000) * 0.8
    }
    if (promocode === 'СКИДКА15' && price >= 20000) {
      price *= 0.85
    }
    console.log(price);
    return price;
  }
  
  get_priсe(25000, 11, 'ДАРИМ300');
  get_priсe(300, 11, 'ДАРИМ300');
  get_priсe(70000, 11, 'ДАРИМ300');
  get_priсe(70000, 2, 'СКИДКА15');
  get_priсe(300, 12);
  get_priсe(7000, 2, 'СКИДКА15');