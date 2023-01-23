const app = angular.module('MoviesApp', []);

app.controller('MainController', ['$http', function($http) {
  this.appName = "Gerard Von Schtieffel's MüvieHaüs"

  this.movies =[];
  this.movieTitle ='';
  this.activeMovie = '';
  this.baseURL = 'http://www.omdbapi.com/?';
  this.apikey = 'apikey=' + '7ba6dec2';
  this.query = 's='
  this.searchURL = this.baseURL + this.apikey + '&' + this.query;
  this.displayInfo = (movie) => {
    this.activeMovie = movie.Title
    this.showInfo = !this.showInfo;
  }

  this.getMovies = () => {
    $http({
      method: 'GET',
      url: this.searchURL + this.movieTitle
    }).then( response => {
      console.log(response.data.Search);
      this.movies = response.data.Search;
    }, error => {
      console.error( error );
    }).catch( err => console.error('Catch: ' , err ));
  }




}]);
