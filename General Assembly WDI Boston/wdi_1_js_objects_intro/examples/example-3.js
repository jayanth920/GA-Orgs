// Example 3

Person.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    console.error("A person cannot be negative years old!");
  }
  else if (newAge > 150) {
    console.error("People do not generally live to the age of 150");
  }
  else {
    this.age = newAge;
  }
};

Person.prototype.age = function () {
  return this.age;
};

