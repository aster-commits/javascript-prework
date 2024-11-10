var computerMove;
computerMove = 'kamień';
var playerMove;
playerMove = 'papier';
printMessage('Zagrałam ' + computerMove + '! Jeśli twój ruch to ' + playerMove + ' to wygrywasz!');

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = "kamień";
} else if (randomNumber == '2') {
    computerMove = "papier";
} else if (randomNumber == '3') {
    computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove)

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
    printMessage('Liczba się nie zgadza.')
}


// var randomNumber;
// randomNumber = Math.floor(Math.random() * 9 + 11);
// printMessage('Wylosowana liczba to: ' + randomNumber);

// 11 tutaj to jest dodane żeby jak się wylosuje 0 to było min 11 xd
// randomNumber = Math.floor(Math.random() * a + b);
// Math.random * a = liczba od 0 do 0.999 * a
// b minimalna liczba jaką chcemy wylosować / minimalny zakres
// a + b + 1 = maksymalna liczba

