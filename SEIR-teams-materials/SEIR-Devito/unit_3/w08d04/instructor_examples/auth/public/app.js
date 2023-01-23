const app = angular.module('MyApp', []);

app.controller('AuthController', ['$http', function($http){
    const controller = this;
    this.goApp = function(){
        $http({
            method:'GET',
            url:'/app'
        }).then(function(response){
            console.log(response);
            controller.loggedInUsername = response.data.username;
        }, function(error){
            console.log(error);
        });
    }

    this.createUser = function(){
        $http({
            method:'POST',
            url:'/users',
            data: {
                username: this.username,
                password: this.password
            }
        }).then(function(response){
            console.log(response);
            controller.username = null;
            controller.password = null;
        }, function(error){
            console.log(error);
        })
    }

    this.logOut = function(){
        $http({
            method:'DELETE',
            url:'/sessions'
        }).then(function(response){
            console.log(response);
            controller.loggedInUsername = null;
        }, function(error){
            console.log(error);
        });
    }

    this.logIn = function(){
        $http({
            method:'POST',
            url:'/sessions',
            data: {
                username: this.username,
                password: this.password
            }
        }).then(function(response){
            console.log(response);
            controller.username = null;
            controller.password = null;
            controller.goApp();
        }, function(error){
            console.log(error);
        })
    }
}]);
