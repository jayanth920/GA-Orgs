// // If you would like to code along with this lesson, you can do so here. The examples below will be covered in class. You can uncomment them one at a time to see the results in your own console. Feel free to add additional code and take notes as needed.

// A METHODICAL APPROACH:

//The code below is supposed to return the sum of the cubes up to the parameter n. For example, if n=4, the function should return 0^3 + 1^3 + 2^3 + 3^3 + 4^3 = 100. However, the code is broken. Using the methodical approach discussed in the README, write your answers to the questions below.
// function sumCubes(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let sum = 0;
// 		sum += i ** 3;
// 	}
// 	return sum;
// }

// console.log(sumCubes(4));

// 1. What is my error?
// Answer here:

// 2. Where is my error?
// Answer here:

// 3. What is my code supposed to be doing there?
//

// 4. How do I test my assumptions?
// Answer here:

// 5. What does the test show?
// Answer here:

// // ADDITIONAL CONSOLE METHODS:

// // ERROR EXAMPLE
//console.error('This is my error message');

// // WARN EXAMPLE
//console.warn('This is my warning message.');

// // TABLE EXAMPLE
// const userInfo = {
// 	userOne: {
// 		userName: 'esin87',
// 		password: 'abc123',
// 		email: 'esin@saribudak.com'
// 	},
// 	userTwo: {
// 		userName: 'jimmy512',
// 		password: 'meowsers',
// 		email: 'jimmy@cats.com'
// 	},
// 	userThree: {
// 		userName: 'gordoTRON',
// 		password: 'kibbles4LYFE',
// 		email: 'gordon@pets.com'
// 	}
// };
//console.log(userInfo);
//console.table(userInfo);

// // TRACE EXAMPLE
// const first = () => {
// 	second();
// };
// const second = () => {
// 	third();
// };
// const third = () => {
// 	fourth();
// };
// const fourth = () => {
// 	console.trace();
// };
// //remember to call the function to trace it:
// first();

// // STYLIZED EXAMPLE
// console.log(
// 	'%cThis is my stylish console log.',
// 	'background-color: lightgreen; color: red; padding: 5px; border: 1px solid yellow; font-family: Garamond; font-size: 14px;'
// );

// // Debugger

// // Function that returns the sum of even numbers from zero to the parameter passed in (there is a bug in the function as it's written)


//debug this function in Chrome Dev Tools, then VS Code
// let myName = 'Allan';
// let myNumber = 7;

// function evenSum(num) {
//  let sum = 0;
// 	for (let i = 0; i <= num; i += 2) {
// 		myName = 'Steve';
// 		sum += i;
// 		//debugger;
// 	}
// 	myName = 'Roger';
// 	return sum;
// }

// console.log(evenSum(12));
