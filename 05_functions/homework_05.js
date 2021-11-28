
//Задача №1.
let mails = ["mail.ru", "gmail.com", "outlook.com", "yandex.ru"];
let symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
function getRandomArbitrary(min = 0, max = 35) {
    return Math.round(Math.random() * (max - min) + min);
}


function getRandomString() {
    let stringName = ""
    let lenWord = getRandomArbitrary(5, 10)
    for (let i = 0; i < lenWord; i++) {
        let randomSymbol = getRandomArbitrary()
        stringName += symbols[randomSymbol];
    }
    return stringName;
}


function generateEmail() {
    let mail = getRandomArbitrary(0, 3)
    let mailBox  = mails[mail];
    let string1 = getRandomString()
    let string2 = getRandomString()
    return string1 + "." + string2 + "@" + mailBox;
}


function generateMails() {
    let blackList = []
    let allList = []
    for (let i = 0; i<20; i++) {
        let mail = generateEmail()
        let randomControl = getRandomArbitrary(0, 1)
        // console.log(randomControl)
        if (randomControl === 1) {
            blackList.push(mail)
        }
        allList.push(mail)
    }
    return {blackList, allList}
}


function checkEmail(blackListEmails = blackList, generalListEmails = allList) {
    let whiteList = []
    for (let mail in generalListEmails) {
        if (! blackListEmails.includes(generalListEmails[mail])) {
            whiteList.push(generalListEmails[mail])
        }
    }
    return whiteList
}


let {blackList, allList} = generateMails()
let whiteList = checkEmail()
console.log({allList, blackList, whiteList})


//Задача №2.

function giveBasketPrice(generalPrice, quantityGoods, promo = null) {
    if (promo === 'ДАРИМ300') {
        if (generalPrice < 300) {
            generalPrice = 0
        }
        else{
            generalPrice -= 300
        }
    }
    if (quantityGoods >= 10) {
        generalPrice *= 0.95
    }
    if (generalPrice > 50000) {
        generalPrice = 50000 + (generalPrice - 50000) * 0.8
    }
    if (promo === 'СКИДКА15') {
        if (generalPrice >= 20000) {
            generalPrice *= 0.85
        }
    }
    return generalPrice
}
// Проверял все варианты, все сходится, ниже один из последних.
console.log(giveBasketPrice(51000, 9, 'СКИДКА15'))
