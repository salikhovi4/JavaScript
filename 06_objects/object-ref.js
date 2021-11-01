let digit = 20;
let otherDigit = digit;

// исходное значениене меняется, так как otherDigit копирует значение digit
otherDigit += 5;

// digit 20, otherDigit 25

let obj = {model: 'KIA SPORTAGE' };
let otherObj = obj;

// obj и otherObj ссылаются на один и тот же объект, поэтому свойство поменяется и там, и там
otherObj.model = 'KIA OPTIMA'

console.log(digit);
console.log(otherDigit);
console.log(obj);
console.log(otherObj);

// compare
// obj1 и obj2 - ссылки на один и тот же объект...
let obj1 = { name: 'Какой то объект' };
let obj2 = obj1;

// ...и они равны
console.log(obj1 === obj2);

// obj2 становится ссылкой на новый объект, хоть и с такими же свойствами
obj2 = { name: 'Какой то объект' };

// и теперь obj1 и obj2 - ссылки на разные объекты, то есть они не равны
console.log(obj1 === obj2);

let me = {
  name: 'Dinar',
};

// функция вернет получившийся объект, но это будет тот же объект,
// который мы передали в первый аргумент, то есть она изменит объект me и вернет его
let newMe = Object.assign(me, { name: 'not Dinar' }, { lastName: 'not Batyrshin' });

// me и newMe - один и тот же объект, и мы его изменили
console.log(me);
console.log(newMe);

console.log(me === newMe); // true


me = {
  name: 'Dinar',
};

// подмешиваем свойства в свежесозданный пустой объект
newMe = Object.assign({}, me, { name: 'not Dinar' }, { surname: 'not Batyrshin' });
// ...или делаем то же самое с помощью spread
let newMeWithSpread = { ...me, name: 'not Dinar', surname: 'not Batyrshin' };

console.log(me);
