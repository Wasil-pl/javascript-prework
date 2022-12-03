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

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
	computerMove = 'papier';
}

if(randomNumber == 3){
	computerMove = 'nożyce';
}
*/

printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
	playerMove = 'papier';
}

if(playerInput == '3'){
	playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);

displayResult(playerMove, computerMove);

/*
if(computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Przegrywasz!');
}

if(computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Remis');
}

if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Wygrywasz!');
}

if(computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Wygrywasz!');
}

if(computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis');
}

if(computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Przegrywasz!');
}

if(computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Wygrywasz!');
}

if(computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis');
}

if(computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Przegrywasz!');
}

if(computerMove == 'nieznany ruch'){
	printMessage('powtórz grę');
}

if(playerMove == 'nieznany ruch'){
	printMessage('powtórz grę');
}
*/