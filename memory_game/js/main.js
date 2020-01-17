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

// Extra - new reset game code.  To be ued with link------------
//create function
/*function refreshGame() {
	location.reload();
	alert('Good Luck!');
};

//create variable
let reset = document.getElementById('reset');

//create eventhandler
reset.addEventListener('click', refreshGame);*/

//-----------------------

//EXTRA - alternate reset game code for button
//create function
function refreshGameButton() {
	location.reload();
	alert('Good Luck!');
};

//create variable
let resetButton = document.querySelector('button');

//create eventhandler
resetButton.addEventListener('click', refreshGameButton); 

//-----------

let cardsInPlay = [];

//alternate way to declare a function - is a function expression as opposed to the one used, which is a function declaration
//let checkForMatch = function() {
function checkForMatch () {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		playAgainFocus();
	} else {
		alert("Sorry, try again.");
		playAgainFocus();
	}

};

//EXTRA - function to give play again button focus
function playAgainFocus() {
	document.querySelector('button').focus();
	document.querySelector('button').style.opacity = 1;
};
//-------------------

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