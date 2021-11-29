/* Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов
функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке. */

function validator(whiteList, blacklist) {
    let filteredList = [];
    for (let item of whiteList) {
      if (!(blacklist.includes(item)) ) {
        filteredList.push(item);
      }
    }
    console.log('Filtered list:')
    console.log(filteredList);
    return filteredList;
}
  
let wlist = [
    'dvbabadeev@kpfu.ru', 
    'dbabadeev@mail.ru', 
    'dvbabadeev@stud.kpfu.ru', 
    'dvbabadeev@gmail.com', 
    'dvbabadeev@yandex.ru'
];
let blist = [
    'babadeev@kpfu.ru', 
    'babadeev@mail.ru', 
    'vbabadeev@stud.kpfu.ru', 
    'dvbabadeev@gmail.com', 
    'dvbabadeev@yandex.ru'
];
validator(wlist, blist);