// For this assignment, you should not delete any of the starter code or data.
// You should fill in the arrow callback function that each iteration
// method needs to meet each question's criteria.

const holidays = [
	{ name: 'valentines day', month: 'february' },
	{ name: 'cinco de mayo', month: 'may' },
	{ name: 'halloween', month: 'october' },
];

// Question 1: Given the array above, write the callback for 'find' to return
// the holiday object that occurs in the month of 'may'.
const mayHoliday = holidays.find(() => {});

const words = ['cat', 'bath', 'orange', 'tap', 'bay', 'ha', 'extravagant'];

// Question 2: Given the array above, write the callback for 'filter' to return
// a new array that only has the words from the original that had less than four
// letters.
const wordsWithLessThanFourLetters = words.filter(() => {});

// Question 3: Given the same array of words, write the callback for 'every' to
// determine if all the words in the array contain the letter 'a'.
const doesEveryWordContainA = words.every(() => {});

// Question 4: Given the same array of words, write the callback for 'some' to
// determine if any word in the array contains the letter 'x'.
const doesAnyWordContainX = words.some(() => {});

const developersArray = [
	{ name: 'ralph', language: 'javascript' },
	{ name: 'gretchen', language: 'javascript' },
	{ name: 'alice', language: 'python' },
	{ name: 'mohammed', language: 'javascript' },
	{ name: 'pat', language: 'python' },
	{ name: 'taylor', language: 'python' },
	{ name: 'hideo', language: 'javascript' },
];

// Given the array of developer objects above, write the callback
// function for reduce to return an object that has two keys, 'javascript' and
// 'python'.

// The 'javascript' key should be equal to the number of developers that have
// 'javascript' set to their 'language'.

// The 'python' key should be equal to the number of developers that have
// 'python' set to their 'language'.

// the final output should look like this object:
/*
{
  javascript: 4,
  python: 3
}
*/
const devLanguageCounts = developersArray.reduce(() => {}, {});

// DO NOT MODIFY CODE BELOW THIS LINE
if (!this.window) {
	module.exports = {
		mayHoliday,
		wordsWithLessThanFourLetters,
		doesEveryWordContainA,
		doesAnyWordContainX,
		devLanguageCounts,
	};
}
