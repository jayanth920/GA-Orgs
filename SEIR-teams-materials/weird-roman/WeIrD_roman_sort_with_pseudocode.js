function toWeirdCase(string) {
	//split the string into an array of words

	//initialize empty results array

	//loop over the word array
  
	//initialize a newWord array to hold letters for each new word created
  
	//iterate over each letter in each word
  
	//if the index of the letter is even
  
	//push the capitalized letter into the newWord array
  
	//if index is odd, push the lowercase letter into the newWord array

	//join and then push the new word into the results array
	
	//join results with a space and return the string
}


//test cases
// toWeirdCase('This') // expect: 'ThIs'
console.log(toWeirdCase('This'));
// toWeirdCase('is') // expect: 'Is'
console.log(toWeirdCase('Weird string case')); //expect 'WeIrD StRiNg CaSe'

function sortArray(array) {
	//If array empty, return it

  	//initialize empty odds array
 
	//loop over the given array
	
	//if the number is odd, push it into the odds array

	//sort the odds array

	//loop over original array and push sorted odds back in for any odd numbers in the original array

	//replace the odd array number with the first element in the odds array, shifting off the first element each time and shortening the odds array

	//return original array
}

// sortArray([5, 3, 2, 8, 1, 4]) // expect: [1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 2, 8, 1, 4]));
// sortArray([5, 3, 1, 8, 0]) // expect: [1, 3, 5, 8, 0]
// sortArray([]) // expect: []
// console.log(sortArray([5, 3, 1, 8, 0]));


function solution(roman) {
	// store numerical values of roman digits I, V, X, L, C, D, M in an object

  	//split the given roman numeral into an array of individual roman digits

  	//initialize a sum variable to store the value of the roman digits

  	//iterate over the roman digits array
	
	// if the value of the digit is less than the one before it (such as iv = 4), add the difference of the two digits to the sum and increment i to skip the next digit
	
   	//if it's a singular roman digit, add its value to sum

	// return sum;
}

// solution("XXI") // expected output: 21
console.log(solution('XXI'));
// solution("I") // expected output: 1
console.log(solution('I'));
// solution("IV") // expected output: 4
console.log(solution('IV'));
// solution("MMVIII") // expected output: 2008
console.log(solution('MMVIII'));
// solution("MDCLXVI") // expected output: 1666
console.log(solution('MDCLXVI'));
