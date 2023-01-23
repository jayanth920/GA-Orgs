var person1 = {
  name: 'tom',
  age: 57
};

var removeYears = function(p){
  p.age -= 10;
};

removeYears(person1);

console.log("person1 age is " + person1.age);
