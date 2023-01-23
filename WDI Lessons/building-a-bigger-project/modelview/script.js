class GameModel {
  constructor () {
    this.rowTally = [[0, 0], [0, 0], [0, 0]]
    this.colTally = [[0, 0], [0, 0], [0, 0]]
    this.diagTally = [[0, 0], [0, 0]]
    this.numMoves = 0
    this.turn = 0
  }

  incrementDiagonals (x, y) {
    if (y === x) this.diagTally[0][this.turn]++
    if ((y === 2 && x === 0) ||
        (y === 1 && x === 1) ||
        (y === 0 && x === 2)) this.diagTally[1][this.turn]++
  }

  incrementChecks (x, y) {
    this.numMoves++

    this.rowTally[x][this.turn]++
    this.colTally[y][this.turn]++

    this.incrementDiagonals(x, y)
  }

  checkWin (x, y) {
    return (this.rowTally[x][this.turn] === 3 ||
            this.colTally[y][this.turn] === 3 ||
            this.diagTally[0][this.turn] === 3 ||
            this.diagTally[1][this.turn] === 3)
  }

  checkReset (x, y) {
    const winner = this.checkWin(x, y)
    if (winner || this.numMoves >= 9) {
      const message = winner ? `Congrats ${this.currentChip()} you win!` : `No winner, resetting game`
      alert(message)
      this.reset()
      return true
    }
  }

  currentChip () {
    return this.turn === 0 ? 'O' : 'X'
  }

  toggleTurn () {
    this.turn = this.turn === 0 ? 1 : 0
  }

  reset () {
    this.rowTally = [[0, 0], [0, 0], [0, 0]]
    this.colTally = [[0, 0], [0, 0], [0, 0]]
    this.diagTally = [[0, 0], [0, 0]]
    this.numMoves = 0
  }
}

class GameView {
  constructor () {
    this.model = new GameModel()
    this.boxes = Array.from(document.getElementsByClassName('box'))
    this.turnDiv = document.querySelector('#turn')

    this.boxes.forEach(box => box.addEventListener('click', (e) => { this.boxSelect(e) }))
  }

  editHTML (el) {
    el.innerText = this.model.currentChip()
    el.setAttribute('data-clicked', 'true')
  }

  boxSelect (e) {
    let element = e.target
    console.log('hi')
    if (element.dataset.clicked == 'true') return
    const x = parseInt(element.dataset.x)
    const y = parseInt(element.dataset.y)

    this.editHTML(element)

    this.model.incrementChecks(x, y)
    if (this.model.checkReset(x, y)) {
      this.boxes.forEach(box => {
        box.innerText = ''
        box.setAttribute('data-clicked', 'false')
      })
    }

    this.model.toggleTurn()

    this.editTurnText()
  }

  editTurnText () {
    this.turnDiv.innerText = `Player ${this.model.currentChip()} it's your turn!`
  }
}

let gameView = new GameView()
