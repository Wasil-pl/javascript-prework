function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function playGame(playerInput){

	clearMessages();

	function getMoveName(argMoveId){
		if(argMoveId == 1){
			return 'kamień';
		} else if(argMoveId == 2){
			return 'papier';
		} else {
				return 'nożyce';
		}
	};

	function displayResult(argComputerMove, argPlayerMove){

		if(
			(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
			(argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
			(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
		){
			printMessage('Wygrywasz!');

		} else if (argComputerMove == argPlayerMove){
			printMessage('Remis');
		} else {
			printMessage('Przegrywasz!');
		}
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	let computerMove = getMoveName(randomNumber);

	printMessage('Ruch komputera to: ' + computerMove);

	let playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);
}