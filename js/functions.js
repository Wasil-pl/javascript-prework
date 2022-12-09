const printMessage = function(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

let playerScore = 0;
let computerScore = 0;

const playGame = function(playerInput){

	clearMessages();

	const getMoveName = function(argMoveId){
		if(argMoveId == 1){
			return 'kamień';
		} else if(argMoveId == 2){
			return 'papier';
		} else {
			return 'nożyce';
		}
	}
	
	const displayResult = function(argComputerMove, argPlayerMove){
		if(
			(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
			(argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
			(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
		){
			printMessage('Wygrywasz!');
			playerScore++
		} else if (argComputerMove == argPlayerMove){
			printMessage('Remis');
		} else {
			printMessage('Przegrywasz!');
			computerScore++
		}
		document.getElementById('player-score').innerHTML = playerScore;
		document.getElementById('computer-score').innerHTML = computerScore;
	}

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	const computerMove = getMoveName(randomNumber);

	const playerMove = getMoveName(playerInput);

	printMessage('Ruch komputera to: ' + computerMove);

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);

	
}


