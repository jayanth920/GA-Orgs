var Car = function(year, make, model, color, mileage, used) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.color = color;
  this.mileage = mileage;
  this.used = used;
};

Car.prototype.description = function(){
  var desc = "a ";

  if (this.used) {
    desc += "used ";
  } else {
    desc += "new ";
  }

  desc += this.color + " ";
  desc += this.year + " ";
  desc += this.make + " ";
  desc += this.model + " ";
  desc += "with only " + this.mileage + " miles";

  return desc;
};

 Car.prototype.salesmanDescription = function(){
  var desc = "";

  if (this.make === "Chevrolet") {
    desc += "See the USA in your Chevrolet! ";
  } else if (this.make === "Ford") {
    desc += "Built Ford tough! ";
  } else {
    desc += "Check out this sweet ride! ";
  }

  desc += "I've got a ";

  if (this.used) {
    desc += "pre-owned ";
  } else {
    desc += "shiny brand new ";
  }

  desc += this.year + " ";
  desc += this.make + " ";
  desc += this.model + " ";
  desc += "with only " + this.mileage + " miles ";

  desc += "that has your name on it! ";

  if (this.used) {
    if (this.mileage < 12000) {
      desc += "It was owned by a little old lady who only drove it to church. ";
    }
    if (this.mileage > 60000) {
      desc += "Every time you hear it rattle, clank, or thump, you'll know you saved money! ";
    }
  }

  return desc;
 };

