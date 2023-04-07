let currentPlayer: number = 1;
let player1SquaresMarked: number[] = [];
let player2SquaresMarked: number[] = [];
let combinatiosn: number[][] = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
];
let squares = document.getElementsByClassName('squares') as HTMLCollectionOf<HTMLDivElement>;

function mark(square: number): void {

 	if(currentPlayer === 1){
		squares[square - 1].classList.add('squaresX');
		player1SquaresMarked.push(square);
		currentPlayer = 2;

		for(let i: number = 0; i < combinatiosn.length; i++){
			if(combinatiosn[i].every(item => player1SquaresMarked.includes(item))){
				setTimeout(() => {
					alert('Player 1 wins.')				
					location.reload()

				},0)

			};	

		};

	}else {
		squares[square - 1].classList.add('squaresCircles');
		currentPlayer = 1;
		player2SquaresMarked.push(square);

		for(let i: number = 0; i < combinatiosn.length; i++){
			if(combinatiosn[i].every(item => player2SquaresMarked.includes(item))){
				setTimeout(() => {
					alert('Player 2 wins.')				
					location.reload()

				}, 600)

			};	

		};

	};

};
