// Best Game Ever!

// prompt the user 'do you want to win'

// if yes win game

// if no, lose game

// if quit, quit

// if something else - show an error


// make code more modular with functions
const win = () => {
  gamePoints.wins++
  alert('You won! 🤠' + scorekeeper());
}

const lose = () => {
  gamePoints.losses++
  alert('You lost 🤕' + scorekeeper())
}

const scorekeeper = () => {
  return 'You have this many' + gamePoints.wins + ' wins and this many ' + gamePoints.losses + 'losses'
}

let playGame = true;
const gamePoints = {
  wins: 0,
  losses: 0
}

const goShopping = () => {
  alert('cool shopping stuff')
}

while(playGame){

  let answer = prompt('Welcome to Best Game Ever! Do you want to win?' , 'yes/no')

  answer = answer.toLowerCase()

  if (answer === 'shop') {
    goShopping();
  }
  if (answer === 'yes'){
    let newAnswer = prompt('Are you really sure?', 'yes/no')
    newAnswer = newAnswer.toLowerCase()
    if(newAnswer === 'yes'){
      win()
    }
  } else if (answer === 'no'){
      lose()
  } else if (answer === 'quit' || answer === null){
    playGame = false
    alert('Have a nice day, please play again soon')
    console.log(playGame); // please be false
  } else {
    alert('Sorry, I don\'t understand you')
  }

}
