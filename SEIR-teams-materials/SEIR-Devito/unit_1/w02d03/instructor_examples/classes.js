// link to repl:  https://repl.it/@jkeohan/SEI-Class-4-3-19
// KEYWORDS: CLASS, NEW, CONSTRUCTOR, THIS
// CLASS is reserved keyword
// it's used to define classes
// classes have first letter as uppercase
// Person is a prototype
//  a method is a function assigned to a class/object
// constructor is how we assign properties to a class
// the constructor runs only once when the class is called

class Person {
   constructor(name, eyes, hair, loveCats = true, lovesDogs) {
     this.name = name;
     this.legs = 2;
     this.arms = 2;
     this.eyes = eyes;
     this.hair = hair;
     this.loveCats = loveCats;
     this.loveDogs = lovesDogs || true;
   }
   greet (otherPerson) {
     console.log('hi ' + otherPerson + '!')
   }
   classyGreeting (otherClassyPerson) {
     console.log(`Greeting ${otherClassyPerson.name}!..Hey ${otherClassyPerson.name}..what you up to today` )
     otherClassyPerson.name = 'jack'
   }
   setHair (hairColor){
     this.hair = hairColor
   }
   getHairColor () {
     console.log('this is your hair color: ', this.hair)
   }
   walk () {
     console.log('I hate when my Segway is in the shop')
   }
}
// es5 verson of a class (es6) was a constructor function
// function Person() {
//
// }

// new instances of classes are instantiated using
// the NEW keyword
const me = new Person('Joe', 'brown', 'black', false, 'false');
const you = new Person('Matt', 'blue', 'blonde')
me.classyGreeting(you)
console.log('this is you', you)
// console.log('this is me: ', me)
// me.setHair('purple')
// me.hair =  'none'
// me.getHairColor()
// here we call the method
// me.greet('joe') // 'joe' is an argument
// you.greet('paul')
// console.log(typeof me);
// console.log(typeof Person)
// console.log(me instanceof Object)
// this represents context
// const vendingMachine = {
//   snacks: [{
//     name:'kitkat',
//     price:6
//   }],
//   vend (input) {
//     console.log('vending', this.snacks[input])
//   }
// }
//
// vendingMachine.vend(0)
