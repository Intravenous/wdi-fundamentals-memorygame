//cards object with an array
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
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
		cardImage: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];

//alternate way to declare a function
//let checkForMatch = function() {
function checkForMatch () {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}

};

function flipCard () {
	//step 11b
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);

	//view object code
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)

	//step 12
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};

//Create board function 6a
function createBoard () {
	//step 6b
	for (let i = 0; i < cards.length; i++) {
	//step 7
	let cardElement = document.createElement('img');
	//step 8a
	cardElement.setAttribute('src',"images/back.png");
	//step 8b
	cardElement.setAttribute('data-id', i);
	//step 9
	cardElement.addEventListener('click', flipCard);
	//step 9b
	document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();