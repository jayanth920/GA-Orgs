const app = angular.module('MoviesApp', []);

app.controller('MainController', ['$http', function($http) {
    this.appName = "Gerard Von Schtieffel's MüvieHaüs";

    this.baseURL = 'http://www.omdbapi.com/?';
    this.apikey = 'apikey=' + '4ed1b72b';
    this.query = 's=';
    this.movieTitle = '';
    this.searchURL = this.baseURL + this.apikey + '&' + this.query;
    // console.log(this.searchURL);

    this.movies = [];
    this.targetIndex = '';
    this.getMovies = () => {
        const ajax = $http({
            method: 'GET',
            url: this.searchURL + this.movieTitle
        });

        ajax.then((response) => {
            this.movies = response.data.Search;
            console.log(response.data);
        }).catch((err) => {
            console.log('catch:', err);
        });
    };
    this.showTitle = (item) => {
        this.targetIndex = item;
    };
    console.log(this.movies);
}]);
