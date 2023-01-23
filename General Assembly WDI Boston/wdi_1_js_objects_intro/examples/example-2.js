// Example 2

Person.prototype.infoString = function () {
  var firstName = this.firstName || '(no first name)';
  var lastName = this.lastName || '(no last name)';
  var age = this.age || '(no age)';

  return firstName + ' ' + lastName + ', ' + age;
};



