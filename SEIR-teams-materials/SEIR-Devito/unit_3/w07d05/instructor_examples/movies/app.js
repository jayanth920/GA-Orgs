const app = angular.module('MoviesApp', [])

app.controller('MainController', ['$http', function($http) {
  this.appName = "Gerard Von Schtieffel's MüvieHaüs";
  // http://www.omdbapi.com/?t=Eraserhead&apikey=afe230c0
  this.baseURL = 'http://www.omdbapi.com/?';
  this.apikey = 'apikey=' + 'afe230c0';
  this.query = 't=';
  // create the movieTitle variable that coincides with ng-model
  // when ng-submit is executed this will update movieTitle with the value
  // typed into the input
  this.movieTitle = '';
  this.searchURL = this.baseURL + this.apikey + '&' + this.query
  // console.log(this.searchURL)

  // is angular data binding one way or two way?...TWO WAY
  // when this.movies is updated it triggers Angular to update the html
  this.movies = []
  //
  // this.movieTitle = ''
  // creating a getMovies method that will make an API call
  this.getMovies = () => {
  // use the $http service to make an AJAX request just as we used $.ajax in jQuery
    $http({
      // this is the method were using..possible to use POST, PUT, DELETE
      // app.get('/'), app.delete('/:id')
      method: 'GET',
      // the url for that route
      url: this.searchURL + this.movieTitle
      // .then is run once the call is successful..$http returns a Promise
    }).then( response => {
      console.log(response.data)
      // store the data inside of this.movies..once this.movies is updated this
      // triggers react to update the DOM
      this.movies = [response.data]
      // .catch handles any errors in case the AJAX call failed
    }).catch( err => console.log('Catch ', err))
  }
}]);
