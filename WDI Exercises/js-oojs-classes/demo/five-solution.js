/*
 * Exercise Five!
 *
 * Define and Animal class that has a name. Then define two subclasses:
 * 
 * 1. A Cat subclass that adds property Breed and a method meow that will log
 *    the string 'meow'
 * 2. A Dog subclass that adds a property Breed and a method bark that will log
 *    the string 'woof'
 *
 * Create two instances of each of your Cat and Dog classes.
 */

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }

  meow() {
    console.log('meow');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }

  bark() {
    console.log('bark');
  }
}
