// create our angular app / module
const app = angular.module('MyApp', [])
// create our first controller
app.controller('MainController', function() {
  // controller method
  this.toggleInfo = () => {
    this.showInfo = !this.showInfo
  }

  this.hello = 'oh hai!'
  this.showImages = false;
  this.showInfo = false;
  this.contacts = [
    {
      name: 'Jenny',
      phone: 8675309,
      state: 'California',
      image: 'http://old.unsquare.com/dance/wp-content/uploads/2008/11/jennylewis01.jpg'
    },
    {
      name: 'Claire',
      phone: 6060842,
      state: 'DC',
      image: 'http://www1.pictures.zimbio.com/mp/yOE-jyqpuoql.jpg'
    },
    {
      name: 'Morris',
      phone: 7779311,
      state: 'Minnesota',
      image: 'https://s1.ticketm.net/tm/en-us/dbimages/111807a.jpg'
    },
    {
      name: 'Alicia',
      phone: 4894608,
      state: 'New York',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/AliciaKeys2013.jpg/220px-AliciaKeys2013.jpg'
    },
    {
      name: 'Etta',
      phone: '842-3089',
      state: 'California',
      image: 'http://images5.fanpop.com/image/photos/30600000/SWEET-ETTA-JAMES-etta-james-30694011-584-519.gif'
    }
  ];
})


// array looping methods
// .forEach, .map, .filter, .reduce
// .forEach is the only one that doesn't return anything

// declartive vs imperative programming
// imperative is using for loops
// declartive is using .map,.forEach or ng-repeat
