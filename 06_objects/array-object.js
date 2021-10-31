let digits = [1, 2, 3, 4, 5];

for (let index in digits) {
    console.log(index + 1)
}

console.log(Object.keys(digits));
console.log(Object.values(digits));
console.log(Object.entries(digits));

console.log(typeof {}); // object
console.log(typeof []); // object
