/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your console.logs for a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a variable called num and assign it a random integer between 0 and 100 using
 * Math.random() and Math.floor(). Create a conditional so that if the number is greater than 50,
 * you return the message "That's a big number!"
 */

const numBelow100 = null;
function prompt1() {
	// modify the conditional below to fulfill the prompt
	if (numBelow100) {
		// change the return
		return 'Hello world';
	}
}

// test to see if it works:
console.log(prompt1());

/*
 * Prompt 02:
 *
 * Monkey in the middle! Create a variable and assign it a random integer between
 * 0 and 10 using Math.random() and Math.floor(). Create a conditional that:
 *
 *   - returns "small number" if the number is less than 5
 *   - returns "big number" if the number is greater than 5
 *   - otherwise, returns "monkey"
 */

const numBelow10 = null;
function prompt2() {
	// write your conditionals here
}

/*
 * Prompt 03:
 *
 * Driver's Ed! Create a variable that holds a person's age. If their age is
 * greater than 16, return "Here are the keys"; otherwise return "Sorry, you're
 * too young for now."
 */

//  set this variable equal to a number
const age = null;
function prompt3() {
	// write your conditionals here
}

//////////////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE
//////////////////////////////////////////////////
if (!this.window) {
	module.exports = {
		numBelow10,
		numBelow100,
		age,
		prompt1,
		prompt2,
		prompt3,
	};
}
