// class, new, constructor, this, extends, super
class Person {
   constructor(name, age, eyes, hair, loveCats = true, lovesDogs) {
     this.name = name;
     this.legs = 2;
     this.age = age;
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
// extends and super will be used together
class SuperHero extends Person {
  constructor(name, age, eyes, hair) {
    // super('joe', 21, 'blue', 'black')
    super(name, age, eyes, hair);
    this.superPowers = ['flight', 'superhuman strength', 'x-ray vision', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability'];
  }
  fly () {
    console.log('Up up and away!')
  }
  greet (otherPerson) {
    console.log(`Greeting Earthl- Opps, I mean ${otherPerson}`)
  }
  walk () {
    // super references the parent object
    super.walk();
    this.fly();
  }
}

const superman= new SuperHero('Clark Kent', 30, 'blue', 'black')
console.log(superman)
// superman.greet('owen')
// superman.walk();
// superman.fly();
// function constructor(name) {
//   console.log(name)
// }
// superPerson('joe')
