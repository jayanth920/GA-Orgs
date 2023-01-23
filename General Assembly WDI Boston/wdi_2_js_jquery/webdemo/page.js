var countCertainWordsInString = function(theString,
  theWordRoots) {
  var wordCounts = {};
  var words = theString.split(" ");
  words.forEach(function(ciceroWord){
    theWordRoots.forEach(function(wordRoot){
      if(ciceroWord.substr(0, wordRoot.length) === wordRoot)
      {
          if (wordCounts[wordRoot] === undefined) {
            wordCounts[wordRoot] = 0;
          }
          wordCounts[wordRoot] += 1;
      }
    });
  });

  return wordCounts;
};

var countAllWord = function(the String) {
  var wordCounts = {};
  var words = theString.split(" ");
  words.forEach(function(word) {
    if (wordCounts[word] === undefined) {
      wordCounts[word] = 0;
    }
    wordCounts[word] += 1;
  });

  return wordCounts;
};

$(document).ready(function(){

  $('#minimap p').click(function(){
    // this is the object that the function was called on
    $('#cicero').html('<p>' + this.innerText +
      '</p>');

    $('.selected-paragraph').removeClass('selected-paragraph');
    $(this).addClass('selected-paragraph');

    var counts = countCertainWordsInString(this.innerText,
      ['mal', 'bon', 'dolor']);

    $('#mal').html(counts.mal || 'none');
    $('#bon').html(counts.bon || 'none');
    $('#dolor').html(counts.dolor || 'none');

  });
});
