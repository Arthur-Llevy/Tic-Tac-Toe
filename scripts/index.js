"use strict";
let playerCurrentSymbol = 'x';
let player1SquaresMarked = [];
let player2SquaresMarked = [];
let combinatiosn = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
let squares = document.getElementsByClassName('squares');
function start() {
    let player1Symbol = document.getElementById('p1Select');
    let player2Symbol = document.getElementById('p2Select');
    let player1NameInput = document.getElementById('player1-name-input');
    let player2NameInput = document.getElementById('player2-name-input');
    if (player1Symbol.value === player2Symbol.value) {
        alert("player 1's symbol cannot be the same as player 2's.");
    }
    else if (player1NameInput.value === '' || player2NameInput.value === '') {
        alert("All fields need to be filled in.");
    }
    else {
        let containerSquares = document.getElementById('container-squares');
        let config = document.getElementById('config');
        config.style.transform = 'scale(0, 0)';
        config.style.position = 'absolute';
        setTimeout(() => {
            containerSquares.style.transform = 'scale(1, 1)';
            containerSquares.style.position = 'relative';
        }, 500);
    }
    ;
    playerCurrentSymbol = player1Symbol.value;
}
;
function mark(square) {
    let player1NameInput = document.getElementById('player1-name-input');
    let player2NameInput = document.getElementById('player2-name-input');
    if (playerCurrentSymbol === 'x') {
        squares[square - 1].classList.add('squaresX');
        player1SquaresMarked.push(square);
        playerCurrentSymbol = 'c';
        for (let i = 0; i < combinatiosn.length; i++) {
            if (combinatiosn[i].every(item => player1SquaresMarked.includes(item))) {
                setTimeout(() => {
                    alert(`Congrats ${player1NameInput.value}, you won!`);
                    playerCurrentSymbol = '';
                    location.reload();
                }, 600);
            }
            ;
        }
        ;
        if (player1SquaresMarked.length + player2SquaresMarked.length === 9) {
            setTimeout(() => {
                alert('Draw.');
                location.reload();
            }, 600);
        }
        ;
    }
    else {
        squares[square - 1].classList.add('squaresCircles');
        playerCurrentSymbol = 'x';
        player2SquaresMarked.push(square);
        for (let i = 0; i < combinatiosn.length; i++) {
            if (combinatiosn[i].every(item => player2SquaresMarked.includes(item))) {
                setTimeout(() => {
                    alert(`Congrats ${player2NameInput.value}, you won!`);
                    playerCurrentSymbol = '';
                    location.reload();
                }, 600);
            }
            ;
        }
        ;
        if (player1SquaresMarked.length + player2SquaresMarked.length === 9) {
            setTimeout(() => {
                alert('Draw.');
                location.reload();
            }, 600);
        }
        ;
    }
    ;
}
;
