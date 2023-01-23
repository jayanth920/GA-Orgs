var countWordMatches = function (word, string) {
  // Takes a word to match and a string,
  // splits the string into words,
  // then counts the number of times the word
  // occurs.

  var words = string.split(/\s+/);
  var matchedWords = words.filter(function(currentWord){
    return currentWord === word;
  });
  return matchedWords.length;
};

var sum = function() {

  // Takes any number of arguments and returns their sum

  var i;
  var total = 0;
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
};

var shortestWord = function (string) {

  // Takes a string, splits it into words,
  // and returns the shortest word

  // In the case where there is more than one word of the
  // same shortest length, returns the first one it finds.

  var wordList = string.split(/\s+/);
  var shortestWord = wordList[0];

  wordList.forEach(function(word){
    if (word.length <= shortestWord.length) {
      shortestWord = word;
    }
  });

  return shortestWord;
};

var power = function (m, n) {

  // Returns the value of m to the nth power.

  var result = 1;

  for (var i = 1; i < n; i++) {
    result *= m;
  }

  return result;
};


