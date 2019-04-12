var cards = ["queen", "queen", "king", "king"];
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

console.log("user flipped " + cards[cardId] );

cardInPlay.push(cards[cardId]);

checkForMatch();
}

flipCard(2);
flipCard(1);
