function getPageLinkDomains() {
  // Array.from создает массив из массивоподобных структур, getElementsByTagName
  // вернет структуру, которая похожа на массив, но не является полноценным массивом,
  // т.е не имеет тех самых методов массива, о которых мы говорим.
  return Array.from(document.getElementsByTagName('a'))
    // Преобразуем массив с DOM-элементами ссылок в строки с доменом из атрибута href
    .map(link => link.href
      // убираем протоколы 'http://' 'https://'
      .replace('http://', '')
      .replace('https://', '')
      // убираем www, теперь в начале строки остался только домен
      .replace('wwww', '')
      // делим оставшуюся часть по слэшу, чтобы отделить домен от остальной части ссылки
      .split('/')
      // забираем первый элемент получившегося массива, т.е домен
      .shift()
    )
  // А теперь с помощью reduce составляем новый массив с уникальными доменами
    .reduce((uniqueDomains, domain) => {
      // возвращаем массив без изменений, если в нем уже есть этот домен
      if (uniqueDomains.includes(domain)) return uniqueDomains;
      // в противном случае возвращаем новый массив с добавленным в него доменом
      return [...uniqueDomains, domain];
    }, []);
}

getPageLinkDomains();
