var LogoutCtrl = function($scope, $location, loginSession){

  $scope.logoutUser = function(){
    loginSession.logout();
  };

  loginSession.logout();
};


