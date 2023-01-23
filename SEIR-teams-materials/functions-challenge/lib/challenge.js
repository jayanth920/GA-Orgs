// The goal for today is to play around with the possible outcomes for flipping a coin

// for example, if I flip a coin once, I could get the following outcomes: ['T', 'H'];
// If I flip a coin twice, I could get the following outcomes: ['TT' , 'TH', 'HT', 'HH'];
// If I flip a coin three times, I could get the following outcomes: ['TTT', 'TTH' , 'THT', 'THH', 'HTT', 'HTH', 'HHT', 'HHH'];

// one of the things we notice is that when we examine one set of outcomes
// the next set is determined by adding tails and heads to each outcome in the previous set

// Step 1: write a function declaration called 'generateNextSet' that accepts an array as an argument
// then creates a new array
// and for each element of the parameter array, pushes each element + 'T' and each element + 'H' to the new array
// and returns the new array;

function generateNextSet(arr) {
    
}
  
  
console.log("passing ['T', 'H']:", generateNextSet(['T', 'H']));
console.log("passing [ 'TT', 'TH', 'HT', 'HH' ]", generateNextSet([ 'TT', 'TH', 'HT', 'HH' ]));


// Step 2: now that we have a function that accepts a set of outcomes and returns the next set of outcomes
// let's create a function expression called 'generateOutcomes'
// It should accept an argument for the number of times the coins should be flipped (flips)
// inside, it should create a variable called 'counter', and start it at 1
// it should also create an array called 'outcomes' which is initialized to ['T', 'H']
// now, create a while loop that runs while counter is less than flips
// inside the while loop, figure out how to keep on updating 'outcomes' by invoking generateNextSet
// don't forget to make sure you don't get an infinite loop!
// once the while loop is complete, return outcomes!
// test the code to make sure it works!

const generateOutcomes = function(flips) {

}

console.log('flip twice:', generateOutcomes(2));
console.log('flip three times:', generateOutcomes(3));
console.log('flip five times:', generateOutcomes(5));


// pat yourselves on the back!
// we were able to write code that models flipping coins, and keeping track of all possible outcomes
// let's play around with some statistics

// let's write an arrow function called 'produceProbability'
// it will accept two arguments
    // a sequence of events to look for
    // the number of times to flip the coin
// its goal is to produce the probability of getting a sequence of flips
    // for example 'THT'
// if we flip a coin x times
// you can calculate the probability by taking the number of outcomes that include the sequence
// and dividing them by the total number of outcomes for that number of coin flips

const produceProbability = (sequence, flips) => {

}

console.log('finding THT after flipping 4 times', produceProbability('THT', 4));
console.log('finding THTT after flipping 5 times', produceProbability('THTT', 5));


// ========= DO NOT MODIFY ============= //
if (!this.window) {
    module.exports = {
      generateNextSet,
      generateOutcomes,
      produceProbability,
    };
  }


// ========= DO NOT MODIFY ============= //
