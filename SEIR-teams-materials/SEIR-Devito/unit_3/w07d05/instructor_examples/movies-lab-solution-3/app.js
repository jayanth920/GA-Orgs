const app = angular.module('MovieApp', []);

app.controller('MainController', ['$http', function($http) {
  this.appName = "Gerard Von Schtieffel's MüvieHaüs";

  this.baseURL = 'http://www.omdbapi.com/?';
  this.apikey = 'apikey=' + 'ccaf1508';

  this.movieTitle = "";

  this.generateSearchURL = function(searchType, movieName = this.movieTitle) {
    console.log(this.movieTitle);
    console.log(movieName);
    if(searchType === "s")  {
      this.query = 's=';
    } else {
      this.query = 't=';
    }
    let searchTitle = movieName.replace(" ", "+");
    console.log(searchTitle);
    this.searchURL = this.baseURL + this.apikey + '&' + this.query + searchTitle;
    console.log(this.searchURL);
  };


  console.log(this.searchURL);

  this.movieData = [];

  this.getMovies = function(){

    console.log("Seeking...");
    this.generateSearchURL("s");
    $http({
      method: 'GET',
      url: this.searchURL,
    }).then( response => {
      if(response.data.Search) {
        this.movieData = response.data.Search;
      } else {
        this.movieData = response.data;
      }
      console.log(this.movieData);
    }, error => {
      console.error(error);
    });
  };

  this.getMovieDetails = function(movieNameIn) {

    console.log("Seeking specifics...");
    this.generateSearchURL("t", movieNameIn);
    $http({
      method: 'GET',
      url: this.searchURL
    }).then( response => {

      this.movieData = [response.data];
      console.log(response.data);
    }, error => {
      console.error(error);
    });

  }

}]); // closes app.controller
