//  CODEPEN: https://codepen.io/jkeohan/pen/XQymxB?editors=0010
// factorial
// Determine what is the BASE CASE
// Determine what is the RECURSIVE CASE
function factorial(num) {
  //BASE CASE => meant to end the function..its the condition that stops the function
  debugger
  if( num === 1) {
    return 1
  } else {
    // RECURSIVE CASE => call the function again
    return num * factorial(num - 1)
  }

}

console.log(factorial(5))
// 1 * 2 * 3 * 4 * 5
// 2 * 3 * 4 * 5
// 6 * 4 * 5
// 24 * 5
// 120
