const cards = ["queen", "queen", "king", "king"];

let cardsInPlay = []; 

let cardOne = cards[0];
let cardTwo = cards[2];
let cardFour; // added by myself to remove console error

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry try again");
}
	
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardFour);