let h1 = document.createElement('h1');
h1.textContent = 'Список покупок';
document.body.append(h1);

let ol = document.createElement('ol');
document.body.append(ol);

let list = [
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li'),
];
list[0].textContent = 'Ножовка';
list[1].textContent = 'Молоко';
list[2].textContent = 'Хлеб';
ol.prepend(list[0]); // добавляем в начало
ol.prepend(list[1]);
ol.prepend(list[2]);

let eggs = document.createElement('li');
eggs.textContent = 'Яйца';
list[1].before(eggs); // добавляем значение перед вторым элементом списка (молоко)

let sausage = document.createElement('li');
sausage.textContent = 'Колбаса';
list[0].after(sausage); // добавляем значение после первого элемента списка (ножовка)
list[2].after(sausage); // перемещаем значение после третьего элемента списка (хлеб)

let breadBought = document.createElement('li');
breadBought.innerHTML = '<s>Хлеб</s>'
ol.children[0].replaceWith(breadBought); // замещаем элемент

ol.children[4].remove();

breadBought.textContent = '<s>Хлеб</s>';

ol.id = 'qwe';
ol.reversed = true;
ol.start = 20;
ol.removeAttribute('start');

ol.classList.add('class1');
ol.classList.remove('class1');
ol.classList.toggle('class1');
ol.classList.contains('class1');
ol.classList.remove('class1');
ol.classList.contains('class1');

// events.html
// click - нажатие левой кнопки мыши
// input - изменение текста в поле
function onClick() { console.log('Вы нажали на кнопку') }
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', onClick);
