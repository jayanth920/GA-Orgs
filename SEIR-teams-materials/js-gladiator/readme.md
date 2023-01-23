# JS Gladiator Arena Homework

The Emperor has commissioned you to build a Gladiator Arena. You will do so
using your knowledge of object-oriented Javascript and ES6 classes.

![Gladiator Maximus in the arena](https://media.giphy.com/media/d7mMzaGDYkz4ZBziP6/giphy-downsized.gif?cid=ecf05e47j8gt5mdcd00dlk9n2q91ro9y7thlp10gl1125liy&rid=giphy-downsized.gif&ct=g)

All of your Javascript code will be written in `lib/gladiator.js` and
`lib/arena.js`. You can test your code by opening `index.html` in the browser
and interacting with the console, or by running the test script (below).

## Tests

Run `npm install` in this directory to download testing dependencies and
`npm test` to run the test script to make sure your code passes requirements.

## Instructions

1. Fork and clone this repository.
1. Check out a dev branch.
1. Complete your work in the `lib/arena.js` and `lib/gladiator.js` files.
1. You may check your work by running tests with `npm test` or by loading the
   `index.html` file in the browser and console.logging your work.
1. Turn in your submission via a pull request on the original repository.

Unless otherwise stated, assignments are due by 10 am ET the next class day.

## Requirements

- Your `arena.js` and `gladiator.js` files must run without syntax errors. If there are errors you can't solve, comment them out and leave a comment explaining what you think is wrong
- There are 12 tests. At least 9 of your tests (75%) must pass in order for the
  assignment to be considered complete.

## Part 1: The Gladiator

Create a `Gladiator` class that has the following properties...

- a `name`
- a `weapon` (one of Spear, Club, Trident)

Once defined, you should be able to do the following...

```js
const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"
```

### Bonus

> Not required to pass tests!

Make it so that you cannot assign a Gladiator an invalid weapon (i.e., anything
aside from Spear, Club or Trident. That means running code like
`new Gladiator("Jesse", "Taco")` would throw an error

**_Note:_** Complete Part 2 before starting the Bonus

## Part 2: The Arena

Create an `Arena` class that meets the following criteria...

### An arena has a name

```js
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum
```

### The name should be capitalized

```js
const megalopolis = new Arena("megalopolis");
console.log(megalopolis.name); // => Megalopolis
```

### An arena can have gladiators

```js
const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => []
```

### You can add a gladiator to the arena

```js
const max = new Gladiator("Maximus", "Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]
```

### The arena should never have more than 2 gladiators in it at a time

```js
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Sword");
const andronicus = new Gladiator("Andronicus", "Sword");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators.length); // => 2
```

### If there are two gladiators in the arena, you can call a `fight` method that results in the elimination of one of the gladiators from the arena.

Winning conditions

- Trident beats Spear
- Spear beats Club
- Club beats Trident
- If the two gladiators have the same weapon, they are both eliminated.

```js
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();
console.log(colosseum.gladiators); // => [max]
```

### Bonus

> Not required to pass tests!

- Add a new method to remove gladiators from the arena by name
- Update your winning conditions so that if the gladiator named "Maximus" is in
  the fight, he wins.
- Add a method to check to see if the crowd is entertained. The crowd is only
  entertained if Maximus is in the arena.
