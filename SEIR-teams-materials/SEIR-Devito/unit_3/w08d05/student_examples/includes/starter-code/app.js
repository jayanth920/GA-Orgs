const app = angular.module('WaterApp', []);

app.controller('BaseCtrl', [function(){


this.waters = [
  {
  "countryOfOrigin": "USA",
  "price": 4,
  "brand": "Tap"
},
{
  "brand": "Dasani",
  "countryOfOrigin": "USA",
  "price": 5
},
{
  "brand": "Schwepps",
  "countryOfOrigin": "USA",
  "price": 8
},
{
  "brand": "Evian",
  "countryOfOrigin": "France",
  "price": 8
},
{
  "brand": "La Croix",
  "countryOfOrigin": "USA",
  "price": 12
},
{
  "brand": "Fugi",
  "countryOfOrigin": "Japan",
  "price": 19
},
{
  "brand": "Perrier",
  "countryOfOrigin": "France",
  "price": 22
},
{
  "brand": "San Pellegrino",
  "countryOfOrigin": "Italy",
  "price": 18
},
];

}]);
