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
		}

		if(argMoveId == 2){
			return 'papier';
		}

		if(argMoveId == 3){
			return 'nożyce';
		}
	
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
	}

	function displayResult(argComputerMove, argPlayerMove){

		console.log('moves:', argComputerMove, argPlayerMove);

		if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
			printMessage('Przegrywasz!');
		}
		
		if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
			printMessage('Remis');
		}
		
		if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
			printMessage('Wygrywasz!');
		}
		
		if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			printMessage('Wygrywasz!');
		}
		
		if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
			printMessage('Remis');
		}
		
		if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
			printMessage('Przegrywasz!');
		}
		
		if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			printMessage('Wygrywasz!');
		}
		
		if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
			printMessage('Remis');
		}
		
		if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
			printMessage('Przegrywasz!');
		}
		
		if(argComputerMove == 'nieznany ruch'){
			printMessage('powtórz grę');
		}
		
		if(argPlayerMove == 'nieznany ruch'){
			printMessage('powtórz grę');
		}	
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	printMessage('Ruch komputera to: ' + computerMove);

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);
}