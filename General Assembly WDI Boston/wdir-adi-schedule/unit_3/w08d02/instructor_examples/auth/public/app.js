const app = angular.module('MyApp', []);

app.controller('AuthController', ['$http', function($http){
    const controller = this;
    this.createUser = function(){
        $http({
            method:'POST',
            url:'/users',
            data: {
                username:this.username,
                password:this.password
            }
        }).then(function(response){
            console.log(response);
        })
    }
    this.logIn = function(){
        $http({
            method:'POST',
            url:'/sessions',
            data: {
                username:this.username,
                password:this.password
            }
        }).then(function(response){
            console.log(response);
        })
    }
    this.goApp = function(){
        $http({
            method:'GET',
            url:'/app'
        }).then(function(response){
            console.log(response);
            controller.loggedInUserName = response.data.username
        })
    }
}])
