document.addEventListener('DOMContentLoaded', () => {

  // Audio files
  let audio = new Audio('http://ccmixter.org/content/Beluga/Beluga_-_Midnight_Temple_(featuring_7OOP3D)_1.mp3');
  let audioWin = new Audio('sound/win.wav');
  let audioLose = new Audio('sound/lose.wav');
  let audioPick = new Audio('sound/pick.wav');
  let audioFlip = new Audio('sound/flip.wav');




  // Cards front
  let cardsFront = [
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

  // Random cards
  cardsFront.sort(() => 0.5 - Math.random())


  // Global variables
  const board = document.querySelector('.board')
  let health = document.querySelector('.health')
  let score = document.querySelector('.score')
  let accuracy = document.querySelector('.accuracy')
  let tryagain = document.getElementById('tryagain')

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
      card.setAttribute('src', 'img/back.jpg')
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
      setTimeout(checkCards, 200)


    }
  }
  // Check chosen cards
  function checkCards() {
    let cards = document.querySelectorAll('.card')
    if (cardsNames[0] !== cardsNames[1]) {
      // Lose
      cards[cardsIds[0]].setAttribute('src', 'img/back.jpg')
      cards[cardsIds[1]].setAttribute('src', 'img/back.jpg')
      audioPick.play();
      lostCards.push(cardsNames);
      healthPoints();
    } else {
      // Win
      audioFlip.play();
      cards[cardsIds[0]].setAttribute('src', 'img/empty.jpg')
      cards[cardsIds[1]].setAttribute('src', 'img/empty.jpg')
      // prevent from fliping 'flipped' card
      cards[cardsIds[0]].setAttribute('data-id', -1)
      cards[cardsIds[1]].setAttribute('data-id', -1)
      collectedCards.push(cardsNames);


    }

    // Health Points
    function healthPoints() {
      if (lostCards.length > 0) {
        health.setAttribute('src', 'img/125.png')
      }
      if (lostCards.length > 1) {
        health.setAttribute('src', 'img/100.png')
      }
      if (lostCards.length > 2) {
        health.setAttribute('src', 'img/75.png')
      }
      if (lostCards.length > 3) {
        health.setAttribute('src', 'img/50.png')
      }
      if (lostCards.length > 4) {
        health.setAttribute('src', 'img/25.png')
      }
      if (lostCards.length > 5) {
        health.setAttribute('src', 'img/0.png')
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
      alert('You win!')
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