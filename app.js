document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray =[
        {
            name: 'candy',
            img: 'images/candy.png'
        },
        {
            name: 'candy',
            img: 'images/candy.png'
        },
        {
            name: 'cinnamon',
            img: 'images/cinnamon.png'
        },
        {
            name: 'cinnamon',
            img: 'images/cinnamon.png'
        },
        {
            name: 'lolly',
            img: 'images/lolly.png'
        },
        {
            name: 'lolly',
            img: 'images/lolly.png'
        },
        {
            name: 'macaroons',
            img: 'images/macaroons.png'
        },
        {
            name: 'macaroons',
            img: 'images/macaroons.png'
        },
        {
            name: 'pop',
            img: 'images/pop.png'
        },
        {
            name: 'pop',
            img: 'images/pop.png'
        },
        {
            name: 'popcorn',
            img: 'images/popcorn.png'
        },
        {
            name: 'popcorn',
            img: 'images/popcorn.png'
        }
    ];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/bnw.png')
      card.classList = 'cardStyle';
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/bnw.png')
      cards[optionTwoId].setAttribute('src', 'images/bnw.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/popcicleyes.png')
      cards[optionTwoId].setAttribute('src', 'images/popcicleyes.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/bnw.png')
      cards[optionTwoId].setAttribute('src', 'images/bnw.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations!'
    }
  }
  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 1000)
    }
  }
  createBoard();
});