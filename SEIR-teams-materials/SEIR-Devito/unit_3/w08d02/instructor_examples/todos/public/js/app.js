const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.indexOfEditFormToShow = null;

    this.toggleTodoComplete = function(todo){
        let newComplete;
        if(todo.complete === true){
            newComplete = false
        } else {
            newComplete = true;
        }

        $http({
            method:'PUT',
            url:'/todos/'+todo._id,
            data: {
                description: todo.description,
                complete: newComplete
            }
        }).then(function(response){
            controller.getTodos();
        }, function(error){
            console.log(error);
        });
    }

    this.editTodo = function(todo){
        $http({
            method:'PUT',
            url:'/todos/' + todo._id,
            data: {
                description: this.updatedDescription,
                complete: todo.complete
            }
        }).then(function(response){
            controller.getTodos();
            controller.indexOfEditFormToShow = null;
        }, function(error){
            console.log(error);
        });
    }

    this.deleteTodo = function(todo){
        $http({
            method:'DELETE',
            url:'/todos/' + todo._id
        }).then(function(response){
            controller.getTodos();
        }, function(error){
            console.log(error);
        });
    }

    this.createTodo = function(){
        $http({
            method:'POST',
            url:'/todos',
            data: {
                description: this.description,
                complete: this.complete
            }
        }).then(function(response){
            controller.getTodos();
        }, function(error){
            console.log(error);
        });
    }

    this.getTodos = function(){

        $http({
            method:'GET',
            url:'/todos/'
        }).then(function(response){
            controller.todos = response.data;
        }, function(error){

        });

    }

    this.getTodos();
}]);
