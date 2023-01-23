console.log("Test");
function TriviaCard(question, answer, options){
  this.answer = "";
  this.question = "";
  this.options = [];
  this.addQuestion(question);
  this.addAnswer(answer);
  this.addOptions(options);
}

TriviaCard.prototype = {
  addQuestion: function(questionPassedIn){
    this.question = questionPassedIn;
  },
  addAnswer: function(answerPassedIn){
    this.answer = answerPassedIn;
  },
  addOptions: function(optionsPassedIn){
    for (var i = 0; i < optionsPassedIn.length; i++) {
      this.options.push(optionsPassedIn[i])
    }
  }
}

var cardOneArray = ["never", 1492, "3000 BC", 2016]

var card = new TriviaCard("When did Colombus sail to the Mid World?", 1492,
  cardOneArray);

console.log(card);
card.addOption( ["34","banana","hammer time"] );
console.log(card);
