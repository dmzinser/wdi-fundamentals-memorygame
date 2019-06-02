console.log("Up and running!");
var cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
	];
var cardsInPlay = [];

function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've Found A Match!");
	} else {
		alert("Sorry, Try Again!");
	}
}

function flipcard(cardId) {

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

}

flipcard(0);
flipcard(2);
