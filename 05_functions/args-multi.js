// код с поиском карты в колоде карт
// функция с двумя аргументами
// при этом второй аргумент имеет значение по умолчанию
function findCard(cards, wantedCard = 'Туз') {
  console.log('Ищем в колоде карту', wantedCard);

  let found = false;

  for (let card of cards) {
    console.log('Из колоды вытянута карта', card);
    if (card === wantedCard) {
      found = true;
      break;
    }
  }

  console.log(found ? `Мы нашли карту ${wantedCard}` : `В колоде нет карты ${wantedCard}`);
}

let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

// ищем туза в переданной колоде карт
findCard(myCards);
// ищем пятерку в переданной колоде карт
findCard(myCards, '5');
