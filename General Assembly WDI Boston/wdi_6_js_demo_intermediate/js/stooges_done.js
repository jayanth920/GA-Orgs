var year = 1931,
    paid = true,
    manager,
    moe = {
      name: "Moe Howard",
      age: 34
    },
    larry = {
      name: "Larry Fine",
      age: 32
    },
    venue;

//function Venue(name, city){
var Venue = function(name, city){
  this.name = name;
  this.city = city;
}

var palladium = new Venue('Palladium', 'Worcester');

console.log("We went to see " + moe.name + " at the " + palladium.name);
