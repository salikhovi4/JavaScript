// функция с двумя аргументами
// при этом второй аргумент имеет значение по умолчанию
function findCardIndex(cards, wantedCard = 'Туз') {
  console.log('Ищем в колоде карту', wantedCard);

  let foundIndex = -1;

  for (let index in cards) {
    let card = cards[index];
    console.log('Из колоды вытянута карта', card);
    if (card === wantedCard) {
      foundIndex = index;
      break;
    }
  }

  console.log(foundIndex > -1 ? `Мы нашли карту ${wantedCard}` : `В колоде нет карты ${wantedCard}`);
  return foundIndex;
}

let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

let aceIndex = findCardIndex(myCards);
let jackIndex = findCardIndex(myCards, 'Валет');

console.log(aceIndex);
console.log(jackIndex);
