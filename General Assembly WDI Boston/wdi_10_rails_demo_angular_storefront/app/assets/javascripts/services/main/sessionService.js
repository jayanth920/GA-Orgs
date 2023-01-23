angular.module('StoreFront').factory('loginSession', function($location, $http, $q) {

  // Redirect to the given url (defaults to '/')
  var redirect = function(url) {
    url = url || '/';
    $location.path(url);
  };

  // New concepts here. Promises. 
  // See http://egghead.io/lessons/angularjs-promises

  // The $q service that is injected above implements Promises for Angular.
  // This allows callback like functions to be executed asynchronously.
  // Functions passed to the "then" method/function are executed 
  // asychronously.

  var remoteLogin = function(email,password){
    // send an HTTP post to /login
    // "then" execute the anonymous function when the response is received 
    // from the back-end, Rails.
    return $http.post('/login', {user: {email: email, password: password} })
      .then(function(response) {
        // handle the login response
        service.currentUser = response.data.user;
        if (service.isAuthenticated()) {
          console.log("Auth is good");
          //TODO: Send them back to where they came from
          //$location.path(response.a.redirect);
          $location.path('/');
        }
      })
      .then(function(){
        $('#login-link').hide();
        $('#logout-link').show();
      });
  };

  var remoteLogout = function(redirectTo){
     // send a HTTP post to /logout
     // "then" execute the anonymous function when the response is received 
     // from the back-end, Rails.
    $http.post('/logout')
    .then(function() {
      // handle logout response
      service.currentUser = null;
      redirect(redirectTo);
    })
    .then(function(){
      $('#logout-link').hide();
      $('#login-link').show();
    });
  };

  var remoteRegister = function(email, password, confirm_password){
    // send a registration/signin request 
    // HTTP post to /users.json
    return $http.post('/users.json', {user: {email: email, password: password, password_confirmation: confirm_password} })
            .then(function(response) {
              service.currentUser = response.data;
              if (service.isAuthenticated()) {
                $location.path('/record');
              }
            });
  };

  var requestCurrentUser = function(){
    if (service.isAuthenticated()) {
      return $q.when(service.currentUser);
    } else {
      return $http.get('/current_user')
              .then(function(response) {
                service.currentUser = response.data.user;
                return service.currentUser;
              });
    }
  };

  // define a service object that will have methods:
  // (login, logout, register, requestCurrentUser and isAuthenticated)
  // and one property:
  // (currentUser)
  var service = {
    login: remoteLogin,
    logout: remoteLogout,
    register: remoteRegister,
    requestCurrentUser: requestCurrentUser,
    currentUser: null,
    isAuthenticated: function(){
      return !!service.currentUser;
    }
  }; // end service

  // return the service object
  return service;
});
