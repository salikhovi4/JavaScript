const cards = initBoard();

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  console.log(firstCard.dataset.framework);
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function initBoard() {
  const images = [
    "./src/img/0.png",
    "./src/img/1.png",
    "./src/img/2.png",
    "./src/img/3.png",
    "./src/img/4.png",
    "./src/img/5.png"
  ]
  const array = []
  let section = document.createElement("section");
  section.classList.add("card-game");
  document.body.append(section);
  for (let path in images) {
    for (let j = 0; j < 2; j++) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-framework", path);

      let front = document.createElement("img");
      front.src = images[path];
      front.classList.add("front")

      let back = document.createElement("img");
      back.src = "./src/img/logo.svg";
      back.classList.add("back");

      card.append(front);
      card.append(back);
      section.append(card);
      array.push(card);
    }
  }
  return array;
};

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));