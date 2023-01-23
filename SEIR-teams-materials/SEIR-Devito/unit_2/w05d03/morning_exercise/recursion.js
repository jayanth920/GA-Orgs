// codepen: https://codepen.io/jkeohan/pen/bJmZYw?editors=0010

// RECURSION...say what???
// recursion is a function that calls itself
[1,[2,3,[4,5,[6,7]]]]
// BASE case is the condition that stops the funciton from calling itself
// Code that runs
// RECURSIVE case is when the function call itself

// REVERSE A STRING
let string = 'hello'
let newString = ''
// for(let i = string.length-1; i > -1; i -= 1){
//   newString += string[i]
// }

// let i = string.length-1
// while(i > -1) {
//   newString += string[i]
//   i -= 1
// }


// console.log(newString)

// function reverse(string){
//   let newString = ''
//   for(let i = string.length-1; i > -1; i -= 1){
//     newString += string[i]
//   }
//   return newString
// }

function reverse(string){
  // WHAT IS THE BASE CASE
  // WHAT IS THE RECURSIVE CASE
  // debugger
  // Base case...when should we stop the function
  // debugger
  if(string === '') { return ''}
  // Recursive case...function calls itself
  else {
    // each function returns one letter
    return reverse(string.substr(1)) + string[0]
  }
}
console.log(reverse('hello'))
