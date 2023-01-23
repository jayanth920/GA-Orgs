/*
 * Exercise One
 */

/*
 * Here the code for a car object
 */
let car = {
  make: 'Honda',
  model: 'Civic',
  color: 'red',
  drive: function() {
    console.log('vroom vroom');
  },
  gps: function(location) {
    console.log(`Beep boop, driving to ${location}`);
  },
  paint: function(newColor) {
    console.log(`Your car has been painted ${newColor}`);
    this.color = newColor;
  },
};

/*
 * Instead, we use a function
 */



/*
 * Now we can create as many cars as we want!
 */
