// Heavily influenced from A-spit!

const rowScore = [[0, 0], [0, 0], [0, 0]]
const colScore = [[0, 0], [0, 0], [0, 0]]
const diagScore = [[0, 0], [0, 0]]

let currentPlayer = 'playerX'
let totalMoves = 0
let gameWon = false

let scoreDisplay = document.getElementById('score')
scoreDisplay.innerHTML = `${currentPlayer[6]}'s Turn!`

let squares = Array.from(document.getElementsByClassName('square'))
squares.forEach((square) => square.addEventListener('click', () => { move(square) }))

function move (square) {
  if (!square.classList.contains('clicked')) {
    if (currentPlayer === 'playerX') square.innerHTML = 'X'
    if (currentPlayer === 'playerO') square.innerHTML = 'O'
    square.classList.add('clicked')
    totalMoves++
    togglePlayerTurn()
    updateScore(square)
  }
}

function togglePlayerTurn () {
  currentPlayer = currentPlayer === 'playerX' ? 'playerO' : 'playerX'
  scoreDisplay.innerHTML = `${currentPlayer[6]}'s Turn!`
}

function updateScore (square) {
  let player = currentPlayer === 'playerX' ? 1 : 0
  let row = square.dataset.x
  let col = square.dataset.y
  rowScore[row][player] += 1
  colScore[col][player] += 1
  if (row === col) diagScore[0][player] += 1
  if (row + col === 2) diagScore[1][player] += 1
  checkWinner()
}

function checkWinner () {
  rowScore.forEach(arr => { if (arr.includes(3)) announceWinner(rowScore) })
  colScore.forEach(arr => { if (arr.includes(3)) announceWinner(colScore) })
  diagScore.forEach(arr => { if (arr.includes(3)) announceWinner(diagScore) })
  if (totalMoves >= 9 && !gameWon) {
    tie()
  }
}
function tie () {
  scoreDisplay.innerHTML = `🐱 Cat's Game! 🐱`
}

function announceWinner (grid) {
  let winner
  grid.forEach((arr) => { if (arr.includes(3)) winner = arr.indexOf(3) })
  if (winner === 0) {
    scoreDisplay.innerHTML = `** X Wins!! **`
  } else {
    scoreDisplay.innerHTML = `** 0 Wins!! **`
  }
  endGame()
  gameWon = true
}

function endGame () {
  squares.forEach((square) => square.classList.add('clicked'))
}
