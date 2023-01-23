var jill = {
  name: 'jill',
  age: 35 
  },
  joe = {
    name: 'joe',
    age: 55
  };
console.log(joe.name + ' is ' + joe.age);
console.log(jill.name + ' is ' + jill.age);

var person1 = joe,
person2 = jill;

console.log('person1 name is ' + person1.name + ", age is " + person1.age);
console.log('person2 name is ' + person2.name + ", age is " + person2.age);

jill.age = 44;
joe.age = 66;

// See how changing jill and joe's age changed 
// person1 and person 2 ages.
console.log('person1 name ' + person1.name + ", age is " + person1.age);
console.log('person2 name ' + person2.name + ", age is " + person2.age);console.log(person2.name + ' is ' + person2.age);


