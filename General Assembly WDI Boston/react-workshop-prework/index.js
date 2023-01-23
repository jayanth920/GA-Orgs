function Board () {
  this.cells = [null, null, null, null, null, null, null, null, null];
}

Board.prototype.reset = function () {
  for (var i = 0; i < this.cells.length; i++) {
    this.cells[i] = null;
  }
};

Board.prototype.checkWinner = function (playerSymbol) {
  var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (var i = 0; i < wins.length; i++) {
    var winningPositions = wins[i];
    if (this.cells[winningPositions[0]] === playerSymbol &&
        this.cells[winningPositions[1]] === playerSymbol ||
        this.cells[winningPositions[2]] === playerSymbol) {
      return playerSymbol;
    } 
  }
  return null;
}

Board.prototype.checkTie = function () {
  var occupiedSpaces = 0; 
  for (var i = 0; i < this.cells.length; i++) {
    if (this.cells[i]) {
      occupiedSpaces++;
    }
  }
  if (occupiedSpaces === 8 && !this.checkWinner()) {
    return true
  } else {
    return false
  }
}

Board.prototype.makeMove = function (index, playerSymbol) {
  if (!this.cells[index]) {
    this.cells[index] = playerSymbol;
  }
}

function Game () {
  this.board = new Board();
  this.currentTurn = playerSymbols[0];
  this.winner = null;
  this.tie = false;
}

var playerSymbols = ['x', 'o'];

Game.prototype.takeTurn = function (index) {
  if (this.tie) {
    return;
  }
  this.board.makeMove(index, this.currentTurn);
  this.winner = this.board.checkWinner(this.currentTurn);
  this.tie = this.board.checkTie();
  updateUI();
  this.currentTurn = this.currentTurn === playerSymbols[0] ? playerSymbols[1] : playerSymbols[0];
}

// UI stuff down here

var game;
var message;
var reset = document.querySelector('#reset');

window.onload = function () {
  game = new Game(); 

  var cells = document.querySelectorAll('.cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) {
      var cellId = event.target.id.split('-')[1].toString();
      game.takeTurn(cellId);
    })
  }

  message = document.querySelector('#message')
    
  reset.addEventListener('click', function (event) {
    game = new Game();
    updateUI();
  })
}

var updateUI = function () {
  for (var i = 0; i < game.board.cells.length; i++) {
    var cell = document.querySelector('#cell-' + i)
    cell.innerHTML = game.board.cells[i];
  }

  if (game.winner) {
    message.innerHTML = "Player " + game.winner + " is the winner!";
  } else if (game.tie) {
    message.innerHTML = "It's a tie";
  }
};
