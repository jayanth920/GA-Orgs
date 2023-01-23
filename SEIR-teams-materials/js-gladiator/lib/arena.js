// #1: Create an Arena class with the following criteria:
// -- a 'name' that is first-initial capitalized, even if input is not
// Examples:
// const megalopolis = new Arena("megalopolis");
// console.log(megalopolis.name); // => Megalopolis

// -- a 'gladiators' property that is initialized as an empty array

// -- an 'addGladiator' method that adds gladiators to the 'gladiators' array, and never allows more than 2 gladiators at a time
// Examples:
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Sword");
// const andronicus = new Gladiator("Andronicus", "Sword");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);
// console.log(colosseum.gladiators.length); // => 2

// -- a "fight" method that results in the elimination of one of the gladiators in the arena with the following winning conditions:
// Winning conditions
// - Trident beats Spear
// - Spear beats Club
// - Club beats Trident
// - If the two gladiators have the same weapon, they are both eliminated.
// Examples:
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Spear");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.fight();
// console.log(colosseum.gladiators); // => [max]

class Arena {
  // Type your solution immediately below this line:
}

// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if (!this.window && typeof Arena !== "undefined") {
  module.exports = {
    Arena,
  };
}
