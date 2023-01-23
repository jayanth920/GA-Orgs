var Business = Business || {}; // If Business doesn't exist, create an empty object

Business.Address = function(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
};

Business.Address.prototype.display = function() {
  return this.street + " " + this.city + " " + this.state + " in " + this.zip;
};