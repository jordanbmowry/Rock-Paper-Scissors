let userScore = 0;
let computerScore = 0;
const choiceDivs = document.getElementsByClassName('choice');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');
const actionMsg = document.querySelector('#action-msg');
const body = document.querySelector('body');

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNum = Math.floor(Math.random() * 3);
	return choices[randomNum];
}

function convertToWord(letter) {
	if (letter === 'r') return 'Rock';
	if (letter === 'p') return 'Paper';
	if (letter === 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
	const userChoiceDiv = document.getElementById(userChoice);
	userScore++;
	userScoreSpan.textContent = `${userScore}`;
	resultP.textContent = `${convertToWord(userChoice)} beats ${convertToWord(
		computerChoice
	)}. You win! 🏆`;
	userChoiceDiv.classList.add('green-glow');
	setTimeout(() => {
		userChoiceDiv.classList.remove('green-glow');
	}, 300);
	// return userScore;
}

function lose(userChoice, computerChoice) {
	const userChoiceDiv = document.getElementById(userChoice);
	computerScore++;
	computerScoreSpan.textContent = `${computerScore}`;
	resultP.textContent = `${convertToWord(computerChoice)} beats ${convertToWord(
		userChoice
	)}. You lose! 💩`;
	userChoiceDiv.classList.add('red-glow');
	setTimeout(() => {
		userChoiceDiv.classList.remove('red-glow');
	}, 300);
	// return computerScore;
}
function draw(userChoice, computerChoice) {
	const userChoiceDiv = document.getElementById(userChoice);
	resultP.textContent = `It's a draw! 🤞`;
	userChoiceDiv.classList.add('gray-glow');
	setTimeout(() => {
		userChoiceDiv.classList.remove('gray-glow');
	}, 300);
}

function endGame() {
	for (div of choiceDivs) {
		div.classList.add('hidden');
	}
	actionMsg.textContent = 'Game Over';
}

function game(userChoice) {
	userScore;
	computerScore;
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
			break;
	}
	if (userScore >= 5) {
		endGame();
		resultP.textContent = 'You Win.😀';
		body.style.backgroundColor = '#4bb543';
	}

	if (computerScore >= 5) {
		endGame();
		resultP.textContent = 'You Lose.😭';
		body.style.backgroundColor = '#fc121b';
	}
}

function main() {
	rockDiv.addEventListener('click', function () {
		game('r');
	});

	paperDiv.addEventListener('click', function () {
		game('p');
	});

	scissorsDiv.addEventListener('click', function () {
		game('s');
	});
}

main();
