let x = 0;

if (Math.random() > 0.5) {
    x = 10;
} else {
    x = 20;
}

// с помощью тернарного оператора

x = Math.random() > 0.5 ? 10 : 20;

// плохой пример

let age = 21;
let isAdult = age > 18 ? true : false;

// хороший пример

let isAdultDoneRight = age > 18;
