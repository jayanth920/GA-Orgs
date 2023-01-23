// donut-adventure-review..by yours truly...
// Math.random()
// HERO CLASS
class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = [
      {
        name:' sprinkle spray',
        hp: 5
      },
      {
        name: 'sugar shock',
        hp: 10
      }
    ];
    this.catchPhrases = [
      'i\'m fresher than day old pizza',
      'you can\'t count my calories'
    ]
  }
  randomNumGenerator (arr) {
    let randNum = Math.floor(Math.random() * arr.length)
    return randNum
  }
  talkSass () {
    let randNum = this.randomNumGenerator(this.catchPhrases)
    let catchPhrase = this.catchPhrases[randNum]
    return catchPhrase
    // return this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]
  }
  announceHealth () {
    // template literals (ES6) vs string concatenation
    // ${} enumerates a variable
    // this.name + " has " + this.health +  " health"
    return `${this.name} has ${this.health} health`
  }
  fight (enemy) {
    // enemy is an object...
    let randNum = this.randomNumGenerator(this.weapons)
    let weapon = this.weapons[randNum]
    enemy.health  -=  weapon.hp
    return `${enemy.name} got hit by ${weapon.name} and now has ${enemy.health} health`
  }
}

// ENEMY CLASS
//  if we were inheriting we  would use the extends keyword
class  Enemy {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease:  10
    }
    this.catchPhrases = [
      'i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer'
    ]
  }
  randomNumGenerator (arr) {
    //console.log('this is randGen - arr', arr)
    let randNum = Math.floor(Math.random() * arr.length)
    return randNum
  }
  talkSass () {
    let randNum = this.randomNumGenerator(this.catchPhrases)
    let catchPhrase = this.catchPhrases[randNum]
    return catchPhrase
    // return this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]
  }
  announceHealth () {
    return `${this.name} has ${this.health} health`
  }
  fight (enemy){
    let weaponNames = Object.keys(this.weapons) // ['pepperoniStars', 'cheeseGrease']
    //console.log('this is fight - weaponNames', weaponNames)
    let randNum = this.randomNumGenerator(weaponNames) // either 0 or 1
    let randomWeapon = weaponNames[randNum] // cheeseGrease
    let randomWeaponPoint = this.weapons[randomWeapon] // 10
    // this.weapons.randomWeapon // this won't work...variable need to use bracket notation
    // this.weapons.cheeseGrease
    enemy.health -= randomWeaponPoint
    return `${enemy.name} got hit! ${enemy.name} now has ${enemy.health} health`
  }
}

const dougie = new Hero('Dougie  the  Donut')
const pizzaRat = new Enemy('Pizza Rat')
// console.log(dougie.talkSass())
// console.log(pizzaRat.announceHealth())

// STORY
// console.log(dougie.talkSass())
// console.log(pizzaRat.talkSass())
console.log(dougie.fight(pizzaRat))
console.log(pizzaRat.fight(dougie))
console.log(dougie.fight(pizzaRat))
console.log(pizzaRat.fight(dougie))
console.log(dougie.fight(pizzaRat))
console.log(pizzaRat.fight(dougie))
console.log(dougie.fight(pizzaRat))
console.log(pizzaRat.fight(dougie))
console.log(dougie.announceHealth())
console.log(pizzaRat.announceHealth())
