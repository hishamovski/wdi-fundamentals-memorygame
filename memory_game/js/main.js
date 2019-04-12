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

var checkForMatch = function(){

if(cardInPlay.length === 2){

	if (cardInPlay[0] === cardInPlay[1]) {

		alert("You found a match!");
	} else {
		alert("Sorry, Try again!");
	}
}
}

var flipCard = function (cardId){

console.log("user flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

cardInPlay.push(cards[cardId].rank);

checkForMatch();
}

flipCard(2);
flipCard(1);

