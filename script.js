document.addEventListener('DOMContentLoaded', () => {

  cardsFront = [
    { name: 'one', img: 'img/1.jpg' },
    { name: 'one', img: 'img/1.jpg' },
    { name: 'two', img: 'img/1.jpg' },
    { name: 'two', img: 'img/1.jpg' },
    { name: 'three', img: 'img/1.jpg' },
    { name: 'three', img: 'img/1.jpg' },
    { name: 'four', img: 'img/1.jpg' },
    { name: 'four', img: 'img/1.jpg' },
    { name: 'five', img: 'img/1.jpg' },
    { name: 'five', img: 'img/1.jpg' },
    { name: 'six', img: 'img/1.jpg' },
    { name: 'six', img: 'img/1.jpg' },
    { name: 'seven', img: 'img/1.jpg' },
    { name: 'seven', img: 'img/1.jpg' },
    { name: 'eight', img: 'img/1.jpg' },
    { name: 'eight', img: 'img/1.jpg' },
  ];





  // Global variables
  const board = document.querySelector('.board')

  // Set cards
  const setCards = () => {
    for (let i = 0; i < cardsFront.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'img/back.jpg')
      board.appendChild(card)
      console.log(card)
    }
  }

  setCards();


})