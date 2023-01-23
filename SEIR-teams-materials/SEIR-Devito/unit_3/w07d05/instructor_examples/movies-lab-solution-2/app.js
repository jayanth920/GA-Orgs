const app = angular.module('MoviesApp', [])

app.controller('MainController', ['$http', function($http) {
  this.appName = "Gerard Von Schtieffel's MüvieHaüs"
  this.baseURL = "http://www.omdbapi.com/?"
  this.apikey = "apikey=" + "afe230c0"
  this.query = "s="
  this.searchString = ""
  this.searchURL = this.baseURL + this.apikey + '&' + this.query

  this.movies = []

  this.showDetails = false
  this.toggleDetails = (movie) => {
    this.showDetails = !this.showDetails
    movie.showDetails = !movie.showDetails
  }

  this.getMovies = () => {
    $http({
      method: 'GET',
      url: this.searchURL + this.searchString
    }).then((response) => {
      this.movies = response.data.Search
      for(let movie of this.movies) {
        movie.showDetails = false
      }
    },(error) => {
      console.error(error)
    }).catch( (err) => console.error('Catch: ',err))
  }

}])
