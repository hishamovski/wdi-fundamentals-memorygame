
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];

var cardInPlay = [];

var checkForMatch = function(id){

//this.setAttribute("src", cards[0].cardImage);
document.getElementsByTagName('img')[id].setAttribute('src', cards[id].cardImage);
if(cardInPlay.length === 2){

	if (cardInPlay[0] === cardInPlay[1]) {

		alert("You found a match!");
	} else {
		alert("Sorry, Try again!");
	}
}
}

var flipCard = function (){


console.log("user flipped " + cards[this.getAttribute('data-id')].rank);
console.log(cards[this.getAttribute('data-id')].cardImage);
console.log(cards[this.getAttribute('data-id')].suit);

cardInPlay.push(cards[this.getAttribute('data-id')].rank);

var id = this.getAttribute('data-id')
checkForMatch(id);
}



var createBoard = function(){

	for (var i = 0; i < cards.length; i++) {

		var newListItem = document.createElement('img');
		newListItem.setAttribute('src', "images/back.png");
		newListItem.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(newListItem);
		document.getElementsByTagName('img')[i].addEventListener('click', flipCard);

	}

	
}


createBoard();












































