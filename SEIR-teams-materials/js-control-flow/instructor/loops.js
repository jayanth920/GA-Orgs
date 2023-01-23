// console.log('hello from loops')

// First argument in for loop:
// Starting point. Initialize a variable and set it
// to where you want your loop to start. This is your
// iterator

// Second argument in a for loop:
// Condition. While this condition is true, the loop will
// execute the code inside the curly brackets

// Last argument in a for loop:
// What to do with the iterator after executing the block
// of code inside the curly brackets


// For loop incrementing by 1
// for (let i = 0; i < 5; i++) {
//     // String interpolation -- injects a variable into a string
//     console.log(`Logging i ${i}`)
// }


// For loop incrementing by 5
// for (let i = 0; i < 100; i += 5) {
//     // code goes here...
//     console.log(i + 5421365)
// }

// For loop counting down from 100 to 0
// for (let i = 100; i >= 0; i--) {
//     console.log(i)
// }


///////////////////////////////////////////////////////
//////////// Iterating over arrays ////////////////////
///////////////////////////////////////////////////////

let instructors = ["Jen", "Esin", "Tabitha", "Carlos", "Nic", "Danielle"];
let lastNames = ['Meade', 'Saribudak', 'Perry', 'Godoy', 'Scobey', 'Z']
// console.log(instructors.length) // => 6

// console.log(instructors[1])

// for (let i = 0; i < instructors.length; i++) {
//     console.log(`Hi my name is ${instructors[i]} ${lastNames[i]}`) 
// }


/*
 * Prompt:
 *
 * Write a for loop that prints out each item in the below array.
 */

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i])
    
// }

/*
 * Prompt:
 *
 * Write a for loop that sums the values in the below array.
 */

// const numbers = [23, 19, 23, 52, 12];

// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

// console.log(sum)




/// While Loops////////////////

// let num = 0

// while(num <= 10){
//     console.log(num)
//     num++
// }


// let passwordGuess = '';
// while (parseInt(passwordGuess) !== 2) {
//   passwordGuess = prompt('You have been imprisoned in the code-block of a while loop! What is the magic word to exit?');
// }
// alert('Argh! You have escaped! I am so lonely, no one ever wants to stay.');


/*
 * Prompt:
 *
 * Use the prompt function to write a while loop that will continue to ask the
 * user for the magic number until they enter the number 7.
 */

 let number = 0
 while (parseInt(number) !== 7) {
     number = prompt('What is the magic number?')
 }
 alert('You guessed the magic number!')