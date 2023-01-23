"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Question", QuestionFactory)
  .controller("Index", IndexCtrl)
  .controller("Show", ShowCtrl);
  
  Router.$inject = ["$stateProvider", "$locationProvider"];
  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("index", {
      url:          "/",
      templateUrl:  "/assets/html/questions-index.html",
      controller:   "Index",
      controllerAs: "IndexVM"
    })
    .state("show",  {
      url:          "/:_id",
      templateUrl:  "/assets/html/questions-show.html",
      controller:   "Show",
      controllerAs: "ShowVM"
    });
  }
  
  QuestionFactory.$inject = ["$resource"];
  function QuestionFactory($resource){
    var Question = $resource("/api/questions/:_id", {}, {
      update: {method: "PUT"}
    });
    return Question;
  }
  
  IndexCtrl.$inject = ["Question"];
  function IndexCtrl(Question){
    var vm        = this;
    vm.questions  = Question.query();
    vm.create     = function(){
      Question.save(vm.newQuestion, function(response){
        vm.questions.push(response);
      });
    }
  }
  
  ShowCtrl.$inject = ["Question", "$stateParams", "$state"];
  function ShowCtrl(Question, $stateParams, $state){
    var vm        = this;
    vm.question   = Question.get($stateParams);
    vm.update     = function(){
      Question.update($stateParams, vm.question, function(response){
        $state.reload();
      });
    }
    vm.createAnswer = function(){
      vm.question.answers.push(vm.answer);
      vm.update();
    }
  }
  
})();