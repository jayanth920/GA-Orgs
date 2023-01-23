// SEQUENCE
// SELECTION/CONDITION
// ITERATION

// INIT an new variable called largest
// SET it's value to the first element in the array
// ITERATE over the array
//  IF the current number is greater that largest
//    THEN SET largest to be that number
//  END IF
// RETURN largest

/*
1. write the pseudocode for the assigned algo using
the techniques demonstrated thus far
2. when breakout room ends add your pseudocode to this doc: https://docs.google.com/document/d/1PFjZ-oTPq8xvvhFPzXMpZUKQeQjgHpecS2mtU_r_0j0/edit?usp=sharing

*/

/*
odd number breakout rooms
reverse a string using a loop in descending order
let string = 'string'
HINT: if using arrays trying looking into .split() on the string


// AFTERNOOT REVIEW:
// REPL: https://repl.it/@jkeohan/SEI-Reverse-A-String
// PROGRAM => function (param)  {}
//  SET a variable called string to hold the string of text that was passed into the program
//  SET a variable called reverseString to an empty array
//  SET a variable stringArray that converts the string ito an array (in js were going  to use .split())
//  LOOP over the stringArray in descending order (stringArray.length-1)
//   PUSH the current element into the reverseString array
//  END LOOP
//  JOIN the reverseString array into a string of text  (in js we use .join())
//  RETURN the reversedString
// END PROGRAM

//    if i loop in descending order than the first element is...'g'
//    i want to  push that element into the array..hmmm..we can use .push or .unshift
//    ['g']
//    now i'm have the second to last element in the array and it's...'n'
//     => push  // ['n','g'] => unshift

*/

let string = 'string'
function reverseString(s){  // (s) is a parameter..which is a placeholder for whats passed into the function
  let reverseString = [];
  let stringArray = s.split('')
  for(let i = stringArray.length-1; i > -1; i -= 1) {
    let currentElem = stringArray[i]
    reverseString.push(currentElem)
  }
  reverseString = reverseString.join('')
  return reverseString
}

let returnedVal = reverseString(string)  // (string) is an argument passed into the funciton
console.log('this is revString',returnedVal)

/*
even number breakout rooms
reverse a string using a loop in ascending order
let string = 'string'
HINT: if using arrays trying looking into .split() on the string
*/

/*
 BONUS: Remove Duplicates from an array
 let dups = [1,2,3,1,2,3]
 HINT: trying using .indexOf()
*/
