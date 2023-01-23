// codepen: https://codepen.io/jkeohan/pen/MdjOdZ
// ADD LINK TO YOUR CODEPEN HERE

// Odds and Evens
// CREATE 2 variables called evens and odds
// SET both variable to empty strings
// ITERATE over the length of the word
  // IF the current letter is at an even position
  //   THEN append the it to the evens variable
  // ELSE
  //   append the letter to the odds variable
  // END IF
// RETURN the evens and odds strings JOINED together with an empty space between them

let currentWord = 'Hacker'
console.log(oddsAndEvens(currentWord))
function oddsAndEvens(word) {
  // your code goes here
}

// Two Sum
// CREATE a variable called output
// SET the output variable to an empty array
// ITERATE over the input array INITIALIZING i to 0
//   ITERATE over the input array again INITIALZING j = i + 1
//     SUBTRACT the number at position i from the target number
//     IF the result is EQUAL to the number at position j
//       THEN add both values into the output array
//       BREAK out of the loop
//     END IF
//  RETURN the output array

let numsArray = [3, 2, 5, 7, 11, 15]
let targetNum = 9
twoSum(numsArray, targetNum)
function twoSum(arr,num){
  // your code goes here
}

// Reverse A String...Recursively
// CREATE a variable called reversed
// SET the variable to an empty string
// SET the BASE case
//   IF the current word's length is EQUAL to 0
//     THEN RETURN the reversed word variable
//   END IF
// SET the RECURSIVE case
//    CREATE a variable called newWord
//    SET the variable to the word MINUS it's first letter
//    CREATE a variable called currentLetter
//    SET currentLetter equal to the the character at the first position of the word
//    RETURN the function passing in newWord and CONCATENATE it with currentLetter

  break;
let string = "hello"
reverseString(string)
function reverseString(word) {
  // your code goes here
}
