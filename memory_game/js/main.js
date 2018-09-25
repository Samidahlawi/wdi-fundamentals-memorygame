var cards = [
    {
        rank:   "queen",
        suit:   "hearts",
        cardImage:  "images/queen-of-hearts.png"
        
    },
    {
        rank:   "king",
        suit:   "hearts",
        cardImage:  "images/king-of-hearts.png"
    },
    {
        rank:   "queen",
        suit:   "diamonds",
        cardImage:  "images/queen-of-diamonds.png"
    },
    {
        rank:   "king",
        suit:   "diamonds",
        cardImage:  "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];
var cardCliked = [];
var countScore = 0;
var checkForMatch = function (){
    if(cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
        cardCliked[0].removeEventListener('click',flipCard);
        cardCliked[1].removeEventListener('click',flipCard);
        cardsInPlay.pop();
        cardsInPlay.pop();
        cardCliked.pop();
        cardCliked.pop();
        countScore++;
    }else{
        alert("Sorry, try again.");
        cardCliked[0].setAttribute('src','images/back.png');
        cardCliked[1].setAttribute('src','images/back.png');
        cardsInPlay.pop();
        cardsInPlay.pop();
        cardCliked.pop();
        cardCliked.pop();
    }
};

var flipCard = function (){
    var cardId = this.getAttribute('data-id');
    cardCliked.push(this);
    // console.log(cardId);
    this.setAttribute('src',cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    //console.log("User flipped " + cards[cardId].rank);
    //console.log(cards[cardId].cardImage);
    if (cardsInPlay.length === 2){
        checkForMatch();
    }
    if (countScore == 2){
        alert("You won (: ");
    }
};

var createBoard = function () {
    for (var i = 0; i < cards.length ; i++)
        {
          
            var cardElement = document.createElement('img');
            cardElement.setAttribute('src','images/back.png');
            cardElement.setAttribute('data-id',i);
            cardElement.addEventListener("click",flipCard);
            document.getElementById('game-board').appendChild(cardElement);
            
        }
};


createBoard();
