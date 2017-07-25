console.log ("works");

let finalOutput = document.getElementById("cardOutput");
let createButton = document.getElementById("create");
let userInput = document.getElementById("user-input");
let removeCard = document.getElementById("deletecard");



function produceCard() {
	finalOutput.innerHTML +=  `<div id="singlecard">
									<header>
										<h3>${userInput.value}!</h3>
									</header>
									<main>
										<p>I hope you have a great birthday, man.</p>
									</main>
									<button type="button" id="deletecard">DELETE</button>
							   </div>`
};


function takeAwayCard() {
	document.getElementById("cardOutput").remove(singlecard);
};


createButton.addEventListener("click", produceCard);
removeCard.addEventListener("click", takeAwayCard);

	

/*Things to figure out:
1. how to be able to delete cards individually
	1a. being able to target #deletecard without it actually being in the HTML */