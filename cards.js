console.log ("works");

let finalOutput = document.getElementById("cardOutput");
let createButton = document.getElementById("create");
let userInput = document.getElementById("user-input");

let cardArray = [];


function produceCard() {

	let userInputText = userInput.value;
	cardArray.push(userInputText);
	let cardNumber = cardArray.length;
	let cardStructure =  
								`<div id="singlecard--${cardNumber}" class="cardStyling">
									<header>
										<h2>${userInputText}!</h2>
									</header>
									<main>
										<p>I hope you have a great birthday, ${userInputText}.</p>
									</main>
									<button type="button" id="delete" class="deletecard">DELETE</button>
							   </div>`
	
	finalOutput.innerHTML += cardStructure;
							
							}



function checkIfKill(event) {
	console.log(event);
	let parentDiv = event.target.parentNode;
	if (event.target.id === "delete") {
		parentDiv.parentNode.removeChild(parentDiv);
	}
};


createButton.addEventListener("click", produceCard);
finalOutput.addEventListener("click", checkIfKill);