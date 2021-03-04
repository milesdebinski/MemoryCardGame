document.addEventListener('DOMContentLoaded', () => {

  // Audio files
  let audio = new Audio('http://ccmixter.org/content/NiGiD/NiGiD_-_Lockdown_Charms.mp3');
  let audioWin = new Audio('sound/win.wav');
  let audioLose = new Audio('sound/lose.wav');
  let audioPick = new Audio('sound/pick.wav');
  let audioFlip = new Audio('sound/flip.wav');




  // Cards front
  let cardsFront = [
    { name: 'one', img: 'img/1.png' },
    { name: 'one', img: 'img/1.png' },
    { name: 'two', img: 'img/2.png' },
    { name: 'two', img: 'img/2.png' },
    { name: 'three', img: 'img/3.png' },
    { name: 'three', img: 'img/3.png' },
    { name: 'four', img: 'img/4.png' },
    { name: 'four', img: 'img/4.png' },
    { name: 'five', img: 'img/5.png' },
    { name: 'five', img: 'img/5.png' },
    { name: 'six', img: 'img/6.png' },
    { name: 'six', img: 'img/6.png' },
    { name: 'seven', img: 'img/7.png' },
    { name: 'seven', img: 'img/7.png' },
    { name: 'eight', img: 'img/8.png' },
    { name: 'eight', img: 'img/8.png' },
  ];

  // Random cards
  cardsFront.sort(() => 0.5 - Math.random())
  audio.play();
  audio.volume = 0.2;

  // Global variables
  const board = document.querySelector('.board')
  let health = document.querySelector('.health')
  let health1 = document.querySelector('.health1')
  let health2 = document.querySelector('.health2')
  let score = document.querySelector('.sco')
  let accuracy = document.querySelector('.acc')
  let tryagain = document.getElementById('tryagain')
  let youwin = document.getElementById('youwin')

  let collectedCards = [];
  let lostCards = [];
  let cardsNames = [];
  let cardsIds = [];
  let allCards = [];

  // Set cards on the board
  const setCards = () => {
    for (let i = 0; i < cardsFront.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('class', 'card')
      card.setAttribute('src', 'img/back.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)

    }
  }
  // Flip chosen card
  function flipCard() {
    audioPick.play();
    let cardId = this.getAttribute('data-id')
    cardsNames.push(cardsFront[cardId].name)
    cardsIds.push(cardId);
    this.setAttribute('src', cardsFront[cardId].img)
    if (cardsNames.length == 2) {
      setTimeout(checkCards, 350)


    }
  }
  // Check chosen cards
  function checkCards() {
    let cards = document.querySelectorAll('.card')
    if (cardsNames[0] !== cardsNames[1]) {
      // Lose
      cards[cardsIds[0]].setAttribute('src', 'img/back.png')
      cards[cardsIds[1]].setAttribute('src', 'img/back.png')
      audioPick.play();
      lostCards.push(cardsNames);
      healthPoints();
    } else {
      // Win
      audioFlip.play();
      cards[cardsIds[0]].setAttribute('src', 'img/empty.png')
      cards[cardsIds[1]].setAttribute('src', 'img/empty.png')
      // prevent from fliping 'flipped' card
      cards[cardsIds[0]].setAttribute('data-id', -1)
      cards[cardsIds[1]].setAttribute('data-id', -1)
      collectedCards.push(cardsNames);


    }

    // Health Points
    function healthPoints() {

      if (lostCards.length > 0) {
        health.setAttribute('src', 'img/75.png')
      }
      if (lostCards.length > 1) {
        health.setAttribute('src', 'img/50.png')
      }
      if (lostCards.length > 2) {
        health.setAttribute('src', 'img/25.png')
      }
      if (lostCards.length > 3) {
        health.setAttribute('src', 'img/0.png')
      }
      if (lostCards.length > 4) {
        health1.setAttribute('src', 'img/75.png')
      }
      if (lostCards.length > 5) {
        health1.setAttribute('src', 'img/50.png')
      }
      if (lostCards.length > 6) {
        health1.setAttribute('src', 'img/25.png')
      }
      if (lostCards.length > 7) {
        health1.setAttribute('src', 'img/0.png')
      }
      if (lostCards.length > 8) {
        health2.setAttribute('src', 'img/75.png')
      }
      if (lostCards.length > 9) {
        health2.setAttribute('src', 'img/50.png')
      }
      if (lostCards.length > 10) {
        health2.setAttribute('src', 'img/25.png')
      }
      if (lostCards.length > 11) {
        health2.setAttribute('src', 'img/0.png')
        setTimeout(youLose, 200)
      }
      // You Lose
      function youLose() {
        audioLose.play();
        tryagain.style.visibility = 'unset';

      }

    }
    console.log(collectedCards.length)
    // Winning
    if (collectedCards.length === 8) {
      audioWin.play();
      youwin.style.visibility = 'unset';
    }
    // Score: 
    score.textContent = collectedCards.length * 2;
    // Accuracy
    allCards.push(collectedCards)
    allCards.push(lostCards)
    accuracy.textContent = `${((collectedCards.length * 2 / allCards.length * 100)).toFixed()}`;


    cardsNames = [];
    cardsIds = [];

  }






  setCards();


})