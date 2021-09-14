// Key Value
const handOptions = {
	rock: "/Rock.png",
	paper: "/Paper.png",
	scissors: "/Scissors.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
	// Show next stage of Hand thats picked
	let hands = document.querySelector(".hands");
	hands.style.display = "none";

	// Also hide the selection page
	let contest = document.querySelector(".contest");
	contest.style.display = "flex";

	// Set User pick
	document.getElementById("userPickImage").src = handOptions[hand];
	// Store CP hand
	let cpHand = cpuPickHand();

	result(hand, cpHand);
};

const cpuPickHand = () => {
	let hands = ["rock", "paper", "scissors"];

	let cpuHand = hands[Math.floor(Math.random() * 3)];

	// Set User pick
	document.getElementById("cpuPickImage").src = handOptions[cpuHand];

	return cpuHand;
};

const result = (userHand, cpHand) => {
	if (userHand == "paper" && cpHand == "scissors") {
		setDecision("YOU LOSE!");
	}
	if (userHand == "paper" && cpHand == "rock") {
		setDecision("YOU WIN!");
		setScore(SCORE + 1);
	}
	if (userHand == "paper" && cpHand == "paper") {
		setDecision("IT'S A TIE!");
	}
	if (userHand == "rock" && cpHand == "scissors") {
		setDecision("YOU WIN!");
		setScore(SCORE + 1);
	}
	if (userHand == "rock" && cpHand == "paper") {
		setDecision("YOU LOSE!");
	}
	if (userHand == "rock" && cpHand == "rock") {
		setDecision("IT'S A TIE!");
	}
	if (userHand == "scissors" && cpHand == "rock") {
		setDecision("YOU LOSE!");
	}
	if (userHand == "scissors" && cpHand == "scissors") {
		setDecision("IT'S A TIE!");
	}
	if (userHand == "scissors" && cpHand == "paper") {
		setDecision("YOU WIN!");
		setScore(SCORE + 1);
	}
};

const setDecision = (decision) => {
	console.log(decision);
	document.querySelector(".decision h1").innerText = decision;
};

const setScore = (score) => {
	SCORE = score;
	document.querySelector(".score-text").innerText = score;
};

const restartGame = () => {
	// Show next stage of Hand thats picked
	let hands = document.querySelector(".hands");
	hands.style.display = "flex";

	// Also hide the selection page
	let contest = document.querySelector(".contest");
	contest.style.display = "none";
};
