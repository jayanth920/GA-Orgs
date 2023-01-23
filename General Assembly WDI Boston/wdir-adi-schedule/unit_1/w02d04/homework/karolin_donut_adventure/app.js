// Heroes and Enemies have a bunch in common
// This is a parent class
class Denizen {
  // only name was required, for hw, everyone started with a health of 100
  // during review, we decided to upgrade to enter a health when creating a new denizen/hero/enemy
  constructor(name, health){
    this.name = name
    this.health = health
  }
  announceHealth(){
    // this uses string interpolation instead of string concatenation
    // I find this more readable than concatenation, you should use whatever is easier for you to read/use
    console.log(`I am ${this.name} and I am ${this.health} points healthy`);
  }
  fight(opponent){
    console.log(`${opponent.name} hit and now has ${opponent.health} health`);
  }
}

// just testing
// const a = new Denizen('Karolin')
// console.log(a);
// a.announceHealth
// a.fight(a)


// Hero class, has all the properties from Denizen
// also has weapons and catch phrases
class Hero extends Denizen {
  constructor(name, health){
    super(name, health)
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = [
    'I\'m fresher than day old pizza',
    'you can\'t count my calories'
    ]
  }
  // UPGRADE! Hero can choose a random weapon
  // Super HW bonus, not required
  chooseWeapon(){
    // make an array of weapon keys
    let weaponKeys = Object.keys(this.weapons)
    // choose a weapon - this will return a weapon name, randomly, from the array
    let weaponChoice = weaponKeys[Math.floor(Math.random() * weaponKeys.length)]
    return weaponChoice
  }
  talkSass(){
    console.log(`${this.name} says`, this.catchPhrases[Math.floor(Math.random()* this.catchPhrases.length)])
  }
  fight(opponent){
    // Bonus: get a random weapon
    let weapon = this.chooseWeapon()
    console.log(`${this.name} says`,'I\'m read to rumble!', 'get ready for an attack with', weapon)
    // this.chooseWeapon returns a string that is a key of the this.weapons object, then we can choose it
    opponent.health = opponent.health - this.weapons[weapon]
    // the following lets us use the funtionality provided from the parent class
    super.fight(opponent)
  }
}

// make a new hero/instantiate a new hero
const dougie = new Hero('Dougie the Donut', 50)
// console.log(dougie);
// dougie.talkSass()
// dougie.fight(dougie)


// Make an Enemy class that inherits from Denizen
// Similar to Hero
// Could think about passing in weapon objects and catch phrases to give more flexiblity - not required for this homework

class Enemy extends Denizen {
  constructor(name, health){
    super(name, health)
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = [
      'I\'m youtube famous',
      'I\'m more dangerous than an uncovered sewer'
    ]
  }
  talkSmack(){
    console.log(`${this.name} says`, this.catchPhrases[Math.floor(Math.random()* this.catchPhrases.length)]);
  }
  // 'regular' fight method that was required for hw
  fight(opponent){
    console.log(`${this.name} says`,`I'm going to flatten you like a slice of pepperoni!`);
    opponent.health = opponent.health - this.weapons.cheeseGrease
    super.fight(opponent)
  }
}

// make a new enemy/instantiate a new enemy
const pizzaRat = new Enemy('Pizza Rat', 1000)


// The story
dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()
pizzaRat.fight(dougie)
dougie.fight(pizzaRat)
pizzaRat.announceHealth()
dougie.announceHealth()
