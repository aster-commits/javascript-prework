var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

// buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    
    playerMove = argButtonName;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}


// buttonTest.addEventListener('click', function(){
//     buttonClicked('Test button')
// });
buttonRock.addEventListener('click', function(){ 
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function(){ 
    buttonClicked('papier'); 
});
buttonScissors.addEventListener('click', function(){ 
    buttonClicked('nożyce'); 
});


var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
* Describe this function...
*/

function getMoveName(argMoveId){
    console.log('Wywołano funkcję GetMoveName z argumentem: ' + argMoveId);
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodzi o "kamień".');
        return 'kamień';
    }
}

/**
* Describe this function...
*/

function displayResult(argPlayerMove, argComputerMove){
    console.log('Wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove){
        printMessage('Remis!');
    } else {
        printMessage('Przegrywasz :(')
    }
    printMessage('Zagrałam ' + argComputerMove + ' a Ty ' + argPlayerMove);
}


// ////////



// var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

// /**
// * Describe this function...
// */

// function getMoveName(argMoveId){
//     console.log('Wywołano funkcję GetMoveName z argumentem: ' + argMoveId);
//     if(argMoveId == 1){
//         return 'kamień';
//     } else if (argMoveId == 2){
//         return 'papier';
//     } else if (argMoveId == 3){
//         return 'nożyce';
//     } else {
//         printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodzi o "kamień".');
//         return 'kamień';
//     }
// }

// /**
// * Describe this function...
// */

// function displayResult(argPlayerMove, argComputerMove){
//     console.log('Wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
//     if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
//         printMessage('Wygrywasz!');
//     } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
//         printMessage('Wygrywasz!');
//     } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
//         printMessage('Wygrywasz!');
//     } else if (argPlayerMove == argComputerMove){
//         printMessage('Remis!');
//     } else {
//         printMessage('Przegrywasz :(')
//     }
//     printMessage('Zagrałam ' + argComputerMove + ' a Ty ' + argPlayerMove);
// }

// playerMove = argButtonName;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('Wylosowana liczba to: ' + randomNumber);
// computerMove = getMoveName(randomNumber);
// console.log('ruch komputera to: ' + computerMove);
// displayResult(playerMove, computerMove);
