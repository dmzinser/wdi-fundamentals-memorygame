console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push('cardOne');
var cardTwo = cards[1];
cardsInPlay.push('cardTwo');
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've Found A Match!");
	} else {
		alert("Sorry, Try Again!");
	}
} 
console.log("User flipped " + cardOne);
console.log("User flipped" + cardTwo);