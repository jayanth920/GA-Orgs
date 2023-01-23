angular.module("portfolio", ["ui.router"])

angular.module("portfolio")
  .config(["$stateProvider", RouterCallback])

function RouterCallback($stateProvider){
  $stateProvider
    .state("resume", {
      url: '/resume',
      templateUrl: "views/resume.html",
      controller: "resumeController",
      controllerAs: "vm"
    })
    .state("about", {
      url: '/about',
      templateUrl: "views/about.html",
      controller: "aboutController",
      controllerAs: "vm"
    })
}

angular.module("portfolio")
  .controller("aboutController", ["$state", AboutControllerCallback])

function AboutControllerCallback($state){
  this.handleClick = () => {
    console.log("i got clicked!")
    $state.go("resume")
  }
}

angular.module("portfolio")
  .controller("resumeController", [ResumeControllerCallback])

function ResumeControllerCallback() {
  this.showResume = true
  console.log("hello im the resume controller")
}
