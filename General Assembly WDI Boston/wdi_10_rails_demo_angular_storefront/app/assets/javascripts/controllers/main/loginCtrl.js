var LoginCtrl = function($scope, $location, loginSession){

  $scope.loginForm = { 
    email: '',
    password: ''
  };

  $scope.loginUser = function(){
    console.log($scope.loginForm);
    loginSession.login($scope.loginForm.email, $scope.loginForm.password);
  };

};


