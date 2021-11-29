// Написать генератор нечётных случайных чисел в диапазоне между n и m включительно.
// Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log

class Random {

    randOdd(n, m) {
        this.n = n;
        this.m = m;
        this.range = Math.abs(m - n);
        this.min = Math.round(Math.min(n, m));
        let numInRange = Math.round(Math.random() * this.range);
        let number = this.min + numInRange;
        if (Math.abs(number % 2) === 1) {
            return number;
        }
        else if (number > this.min && this.min >= 0) {
            return number - 1
        }
        else if (this.min >= 0) {
            return number + 1
        }
        else if (number === this.min && this.min < 0) {
            return number + 1
        }
        else if (this.min < 0) {
            return number - 1
        }
    }
}

rand = new Random();
for (let i = 0; i < 10; i++) {
    n = Math.round(Math.random()*100);
    m = Math.round(Math.random()*100)
    console.log(`n: ${n.toFixed(2)}\nm: ${m.toFixed(2)}`)
    console.log(`Degerated odd number: ${rand.randOdd(n, m)}\n`);
}