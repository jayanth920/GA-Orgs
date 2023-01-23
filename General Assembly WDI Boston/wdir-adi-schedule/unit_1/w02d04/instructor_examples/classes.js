// console.log('hello there')


class Person {
  constructor(name, age, eyes, hair, lovesCats = false, lovesDogs){
    this.legs = 2
    this.arms = 2
    this.eyes = eyes
    this.hair = hair
    this.name = name
    this.age = age
    this.lovesCats = lovesCats
    this.lovesDogs = lovesDogs || false
  }
  classyGreeting(otherClassyPerson){
    console.log('Howdy ' + otherClassyPerson.name + '!')
  }
  greet(otherPerson){
    console.log('hi! ' + otherPerson);
  }
  setHair(hairColor){
    this.hair = hairColor
  }
  walk(){
    console.log('I hate when my Segway is in the shop.')
  }
}

const me = new Person('Karolin', 40, 'green', 'copper dark ash blonde')
const you = new Person('Matt', 26, 'blue', 'blonde',  true, true)

me.hair = 'supernova red'
you.setHair('red')


// console.log(me)
// console.log(you)

// me.greet('you')
// you.greet('me')

// me.walk()
// you.walk()

// me.classyGreeting(you)
// you.classyGreeting(me)

class SuperHero extends Person {
  constructor(name, age, eyes, hair){
    super(name, age, eyes, hair)
    this.superPowers = ['flight', 'superhuman strength', 'x-ray vison', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability']
  }
  fly(){
    console.log('Up up and away!');
  }
  greet(otherPerson){
    console.log('Greetings ' + otherPerson);
  }
  walk(){
    super.walk()
    this.fly()
  }
}

const superman = new SuperHero('Clark Kent', 30, 'blue', 'black', true, true)
// console.log(superman);

// superman.walk()
// superman.greet('bob')
// superman.walk()

// class Car {
//   constructor(serialNumber){
//     this.serialNumber = serialNumber
//   }
//   drive(){
//     console.log('Vroom Vroom')
//   }
// }

// const karolinCar = new Car(555)
// console.log(karolinCar)

// object literal

// const factory = {
//   cars: [],
//   generateCar: ()=> {
//     const newCar = new Car(factory.cars.length)
//     factory.cars.push(newCar)
//   },
//   findCar: (index)=> {
//     return factory.cars[index]
//   }
// }
//
// for(let i = 0; i < 5; i++){
//   factory.generateCar()
// }
//
// console.log(factory.cars);


class Car {
  constructor (maker, serialNumber){
    this.maker = maker
    this.serialNumber = serialNumber
  }
  drive (){
    console.log('Vroom');
  }
}

// const a = new Car('Mazda', 555)
// console.log(a);

class Factory {
  constructor(company){
    this.company  = company
    this.cars = []
  }
  generateCar(){
    const newCar = new Car(this.company, this.cars.length)
    this.cars.push(newCar)
  }
  findCar(index){
    return this.cars[index]
  }
}

const toyota = new Factory('Toyota')
const bmw = new Factory('BMW')
toyota.generateCar()
bmw.generateCar()
console.log(bmw.findCar(0))
console.log(toyota.findCar(0));





















































// const vendingMachine = {
//   snacks : [
//     {name: 'kit kat'},
//     {name: 'sun chips'},
//     {name: 'apple'}
//   ],
//   vend(input){
//     console.log(
//       this.snacks[input]
//     );
//   }
// }
//
// vendingMachine.vend(1)
