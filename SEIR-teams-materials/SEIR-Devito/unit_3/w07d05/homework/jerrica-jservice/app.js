// ==========================
// ANGULAR APP
// ==========================
const app = angular.module('JserviceApp', []);

// ==========================
// MAIN CONTROLLER
// ==========================
app.controller('MainController', ['$http', function($http) {
  // =================
  // DOM TOGGLE VARS
  // =================
  this.dom = {
    showingTrivia: false,
    showingSolution: false
  }

  // =================
  // GAME VARS
  // =================
  this.game = {
    score: 0,
    scoreAdded: false,
    category: null,
    triviaPoints: 0,
    trivia: null,
    triviaSolution: null
  }

  // =================
  // GET TRIVIA (AJAX)
  // =================
  this.getTrivia = () => {
    // http request to jService api
    $http({
      method: 'GET',
      url: 'http://jservice.io/api/random'
    }).then((triviaData) => {
      console.log(triviaData);
      // set game object data to the given triviaData
      this.game.category = triviaData.data[0].category.title;
      this.game.triviaPoints = triviaData.data[0].value;
      this.game.trivia = triviaData.data[0].question;
      this.game.triviaSolution = triviaData.data[0].answer;
      this.game.scoreAdded = false;
      // show trivia info
      this.dom.showingTrivia = true;
      // hide solution
      this.dom.showingSolution = false;
    })
  }

  // =================
  // CALCULATE SCORE
  // =================
  this.calculateScore = (operation) => {
    if(operation === 'plus' && !this.game.scoreAdded) {
      this.game.score += this.game.triviaPoints;
      this.game.scoreAdded = true;
    } else if (operation === 'minus' && !this.game.scoreAdded) {
      this.game.score -= this.game.triviaPoints;
      this.game.scoreAdded = true;
    } else if (operation === 'reset') {
      this.game.score = 0;
    }
  }

  // =================
  // SHOW SOLUTION
  // =================
  this.showSolution = () => {
    this.dom.showingSolution = true;
  }
}])
