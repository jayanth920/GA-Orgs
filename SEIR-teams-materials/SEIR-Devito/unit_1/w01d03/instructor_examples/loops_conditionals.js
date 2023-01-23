// console.log('inside loops and conditionals')

// for(let step = 0; step < 5; step += 1){
//   console.log('Walking east one step', step)
// }


// modulus...looping...conditionals...
// pseudocode
// INITIALIZE a variable for sum and set to 0
// ITERATE a loop starting from 1 and going to 10
// DETERMINE if the current number is even
// IF it is even
//   INCREMENT sum by the even number
// END IF

let sum = 0;
let numOfEvenNumbers = 0
for(let i = 1; i < 11; i += 1){
  if(i % 2 === 0) {
    sum += i
    numOfEvenNumbers += 1
  }
}
console.log('this is sum', sum, numOfEvenNumbers)
