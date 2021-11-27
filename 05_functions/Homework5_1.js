/*Задание 1:
Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов
функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.*/

function validator(dataList, blocklist) {
  let allowList = [];
  for (let item of dataList) {
    if (!(blocklist.includes(item)) ) {
      allowList.push(item);
    }
  }
  console.log(allowList);
  return allowList;
}

let dl = ['apple@kpfu.ru', 'exuberant@fdkl.ru', 'grapes@kpfu.ru', 'mango@kpfu.ru', 'orange@kpfu.ru'];
let bl = ['spray@khd.ru', 'apple@khd.ru', 'exuberant@fdkl.ru'];
validator(dl, bl);
dl = ['2', '3', '5', '6', '7', '1'];
bl = ['1', '4', '6'];
validator(dl, bl);
