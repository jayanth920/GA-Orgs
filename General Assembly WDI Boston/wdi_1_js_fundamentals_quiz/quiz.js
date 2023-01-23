// Quiz: JavaScript Fundamentals

'use strict';

var i; //loop counter
var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing \
elit. Vivamus ut tincidunt nibh, in aliquam dolor. Maecenas ut felis ut \
metus gravida porta. Maecenas massa quam, eleifend vel nisi id, pharetra \
consequat lacus. Nulla elit ante, euismod ornare ante sit amet, aliquam \
interdum ex. Sed aliquam mi eu molestie feugiat. Maecenas ac molestie \
felis. Etiam pulvinar vitae libero et dapibus. Cras eget ipsum aliquam \
augue lobortis vehicula sed non lacus. Sed interdum imperdiet turpis, non \
mattis libero eleifend sed. Duis sollicitudin dui vitae laoreet \
finibus. Pellentesque at arcu vel libero lacinia imperdiet nec sit amet \
nisl. Ut commodo vulputate eros, sit amet aliquet mi aliquet a. Vivamus \
ullamcorper mauris vitae condimentum volutpat.";

// Question 1
// write code to split the above paragraph into an array of words
// then normalize the words in the array
var words = [];

/* your code starts here */

/* your code ends here */

// Question 1 check
if (words.length !== 111) {
  console.log("The word count is not 111")
};

// Question 2
// write code to store the elements from the words array as keys in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords
var uniqueWordsAsKeys = {};
var uniqueWords = [];

/* your code starts here */

/* your code ends here */

// Question 2 check - begin
var sortedUniqueWords = [ 'a', 'ac', 'adipiscing', 'aliquam', 'aliquet',
'amet', 'ante', 'arcu', 'at', 'augue', 'commodo','condimentum',
'consectetur', 'consequat', 'cras', 'dapibus', 'dolor', 'dui', 'duis',
'eget', 'eleifend', 'elit', 'eros', 'et', 'etiam', 'eu', 'euismod', 'ex',
'felis', 'feugiat', 'finibus', 'gravida', 'id', 'imperdiet', 'in',
'interdum', 'ipsum', 'lacinia', 'lacus', 'laoreet', 'libero', 'lobortis',
'lorem', 'maecenas', 'massa', 'mattis', 'mauris', 'metus', 'mi',
'molestie', 'nec', 'nibh', 'nisi', 'nisl', 'non', 'nulla', 'ornare',
'pellentesque', 'pharetra', 'porta', 'pulvinar', 'quam', 'sed', 'sit',
'sollicitudin', 'tincidunt', 'turpis', 'ullamcorper', 'ut', 'vehicula',
'vel', 'vitae', 'vivamus', 'volutpat', 'vulputate' ];

// test for a match
// first length
if (uniqueWords.length === sortedUniqueWords.length) {
  //then elements
  uniqueWords.sort();
  for (i = 0; i < sortedUniqueWords.length; i++) {
    if (uniqueWords[i] !== sortedUniqueWords[i]) {
      console.log("sorted unique word arrays don't match")
      break;
    }
  }
} else {
  console.log("sorted unique word array lengths don't match")
};
// Question 2 check - end


// Question 3
// write code to determine the longest and shortest words in the uniqueWords array
// use an associative array to store the words with the keys 'longest' and 'shortest'
// name the associative array variable "longAndShort" for the check below
var longAndShort = {};
longAndShort['longest'] = '';
longAndShort['shortest'] = paragraph;

/* your code starts here */

/* your code ends here */

//Question 3 check
if (longAndShort['longest'] !== 'sollicitudin') {
  console.log("The 'longest' isn't 'sollicitudin'");
};

if (longAndShort['shortest'] !== 'a') {
  console.log("The 'shortest' isn't 'a'");
};
