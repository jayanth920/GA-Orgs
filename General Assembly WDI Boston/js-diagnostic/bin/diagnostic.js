'use strict'

/* =============== QUESTION #5 ==================
  This file contains a script that can be run from your command line.
  
  Make sure you are in the js-diagnostic/ folder then run the following:
    node bin/diagnostic.js

  You will notice that you are prompted for input on your command line.
  The idea is that a user will be prompted for input until they correctly
  enter the secret ('SeCrEt').

  GOAL: Your job is to modify the below code to create a very similar program.
        
        When you run this script, you should be prompted to enter a number between 1 and 10.
        
        If the user provided answer isn't between 1 and 10 (`answer` isn't >= 1 and <= 10),
        use `console.log` to print a message saying that the guess needs to be between 1 and 10

  HINT: When a user inputs a number from the command line, it will be read as type String.
        You may need to check out JavaScript's `parseInt` function
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  */

const ask = require('../lib/ask.js')

const mySecret = 'SeCrEt'
let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess my secret? ')
  if (answer === mySecret) {
    console.log('You guessed it!')
    break
  }
}
