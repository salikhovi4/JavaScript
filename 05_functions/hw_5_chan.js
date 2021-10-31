// Задание 1

function validator(inp_list, black_list) {
    let out_list = [];
    for (let el of inp_list) {
        if (!(black_list.includes(el))) {
            out_list.push(el)
        }
    }
    console.log(out_list);
    return out_list;
}

let inp_list = ['chan@mail.ru', 'noname@yandex.ru', 'chemoinformatics@kpfu.ru', 'lol@vk.me', 'kek@ffl.ru'];
let black_list = ['lol@vk.me', 'kek@ffl.ru'];
validator(inp_list, black_list);

// Задание 2

function getDiscountedPriсe(price, numGoods, promoCode = null) {

    if ('ДАРИМ300' === promoCode) {
        if (price > 300) {
            price -= 300
        } else {
            console.log(0);
            return 0;
        }
    }
    if (numGoods >= 10) {
        price *= 0.95
    }
    if (price > 50000) {
        price = 50000 + (price - 50000) * 0.8
    }
    if (promoCode === 'СКИДКА15' && price >= 20000) {
        price *= 0.85
    }
    console.log(price);
    return price;
}

getDiscountedPriсe(100000, 15, 'ДАРИМ300');
getDiscountedPriсe(7000, 3, 'СКИДКА15');
getDiscountedPriсe(300, 12);
getDiscountedPriсe(40000, 2, 'СКИДКА15');