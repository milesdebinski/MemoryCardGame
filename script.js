document.addEventListener('DOMContentLoaded', () => {

  cardsFront = [
    { name: 'one', img: 'img/1.jpg' },
    { name: 'one', img: 'img/1.jpg' },
    { name: 'two', img: 'img/2.jpg' },
    { name: 'two', img: 'img/2.jpg' },
    { name: 'three', img: 'img/3.jpg' },
    { name: 'three', img: 'img/3.jpg' },
    { name: 'four', img: 'img/4.jpg' },
    { name: 'four', img: 'img/4.jpg' },
    { name: 'five', img: 'img/5.jpg' },
    { name: 'five', img: 'img/5.jpg' },
    { name: 'six', img: 'img/6.jpg' },
    { name: 'six', img: 'img/6.jpg' },
    { name: 'seven', img: 'img/7.jpg' },
    { name: 'seven', img: 'img/7.jpg' },
    { name: 'eight', img: 'img/8.jpg' },
    { name: 'eight', img: 'img/8.jpg' },
  ];



  // Global variables
  const board = document.querySelector('.board')
  let cardsNames = [];
  let cardsIds = [];

  // Set cards on the board
  const setCards = () => {
    for (let i = 0; i < cardsFront.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('class', 'card')
      card.setAttribute('src', 'img/back.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
    }
  }
  // Flip chosen card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsNames.push(cardsFront[cardId].name)
    cardsIds.push(cardId);
    this.setAttribute('src', cardsFront[cardId].img)
    if (cardsNames.length == 2) {
      setTimeout(checkCards, 200)

    }
  }
  // Check chosen cards
  function checkCards() {
    let cards = document.querySelectorAll('.card')
    if (cardsNames[0] !== cardsNames[1]) {
      cards[cardsIds[0]].setAttribute('src', 'img/back.jpg')
      cards[cardsIds[1]].setAttribute('src', 'img/back.jpg')
    } else {
      cards[cardsIds[0]].setAttribute('src', 'img/empty.jpg')
      cards[cardsIds[1]].setAttribute('src', 'img/empty.jpg')
    }
    cardsNames = [];
    cardsIds = [];
  }





  setCards();


})