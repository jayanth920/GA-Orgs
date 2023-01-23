class Game {
  constructor () {
    this.rowTally = [[0, 0], [0, 0], [0, 0]]
    this.colTally = [[0, 0], [0, 0], [0, 0]]
    this.diagTally = [[0, 0], [0, 0]]
    this.boxes = Array.from(document.getElementsByClassName('box'))
    this.turn = new Turn()
    this.numMoves = 0

    this.boxes.forEach(box => box.addEventListener('click', (e) => { this.boxSelect(e) }))
  }

  editHTML (el) {
    el.innerText = this.turn.currentChip()
    el.setAttribute('data-clicked', 'true')
  }

  boxSelect (e) {
    if (e.target.dataset.clicked === 'true') return
    const x = parseInt(e.target.dataset.x)
    const y = parseInt(e.target.dataset.y)

    this.editHTML(e.target)
    this.updateGame(x, y)
  }

  updateGame (x, y) {
    this.incrementChecks(x, y)
    this.checkReset(x, y)

    this.turn.toggle()
  }

  incrementDiagonals (x, y) {
    if (y === x) this.diagTally[0][this.turn.player]++
    if ((y === 2 && x === 0) ||
        (y === 1 && x === 1) ||
        (y === 0 && x === 2)) this.diagTally[1][this.turn.player]++
  }

  incrementChecks (x, y) {
    this.numMoves++

    this.rowTally[x][this.turn.player]++
    this.colTally[y][this.turn.player]++

    this.incrementDiagonals(x, y)
  }

  checkWin (x, y) {
    return (this.rowTally[x][this.turn.player] === 3 ||
            this.colTally[y][this.turn.player] === 3 ||
            this.diagTally[0][this.turn.player] === 3 ||
            this.diagTally[1][this.turn.player] === 3)
  }

  checkReset (x, y) {
    const winner = this.checkWin(x, y)
    if (winner || this.numMoves >= 9) {
      const message = winner ? `Congrats ${this.turn.currentChip()} you win!` : `No winner, resetting game`
      alert(message)
      this.reset()
    }
  }

  resetBoxes () {
    this.boxes.forEach(box => {
      box.innerHTML = ''
      box.setAttribute('data-clicked', 'false')
    })
  }

  reset () {
    this.rowTally = [[0, 0], [0, 0], [0, 0]]
    this.colTally = [[0, 0], [0, 0], [0, 0]]
    this.diagTally = [[0, 0], [0, 0]]
    this.numMoves = 0
    this.resetBoxes()
  }
}

class Turn {
  constructor () {
    this.div = document.getElementById('turn')
    this.player = 0
  }

  currentChip () {
    return this.player === 0 ? 'O' : 'X'
  }

  toggle () {
    this.player = this.player === 0 ? 1 : 0
    this.div.innerText = `Player ${this.currentChip()} it's your turn!`
  }
}

const game = new Game()
