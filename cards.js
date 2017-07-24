console.log ("works");

let pagecardoutput = document.getElementById("cardOutput");
let userInput = document.getElementById("user-input");
let includeInNewCard = "";
document.getElementById("create-button").addEventListener("click", getUserInput);

function getUserInput(event) {
	includeInNewCard = userInput.innerText;
	console.log ("includeInNewCard", includeInNewCard);
}