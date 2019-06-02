console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've Found A Match!");
	} else {
		console.log("Sorry, Try Again!");
	}
}

function flipcard(cardId) {

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

}

flipcard(0);
flipcard(2);
