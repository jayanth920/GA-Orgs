var should = require("chai").should();
var expect = require("chai").expect;
var fs = require("fs");

describe("Part 1: Gladiator Class", function () {
  try {
    var Gladiator = require("../lib/gladiator").Gladiator;
    var max = require("../lib/gladiator").max;
  } catch (e) {
    console.log(e);
  }
  it("Gladiator is a class", function () {
    expect(Gladiator).to.be.a("function");
  });
  it("Gladiator's constructor sets a name and weapon property", function () {
    const testGladiator = new Gladiator("Conan", "Club");
    expect(testGladiator.name).to.be.a("string");
    expect(testGladiator.weapon).to.be.an("string");
  });
  it("max is an instance of the Gladiator class", function () {
    expect(max.__proto__.constructor.name).to.equal("Gladiator");
  });
  it('max has a name property of "Maximus" and a weapon property of "Trident"', function () {
    expect(max.name).to.equal("Maximus");
    expect(max.weapon).to.equal("Trident");
  });
});

describe("Part 2: Arena Class", function () {
  try {
    var Arena = require("../lib/arena").Arena;
    var testArena = new Arena("thunderdome");
    var Gladiator = require("../lib/gladiator").Gladiator;
  } catch (e) {
    console.log(e);
  }
  it("Arena is a class", function () {
    expect(Arena).to.be.a("function");
  });
  it("Arena's constructor sets a name and gladiators property", function () {
    expect(testArena.name).to.equal("Thunderdome");
    expect(testArena.gladiators).to.be.an("array");
    expect(testArena.gladiators).to.have.lengthOf(0);
  });
  it("Arena has a method called addGladiator", function () {
    expect(testArena.addGladiator).to.be.a("function");
  });
  it("addGladiator adds gladiators to the gladiators array", function () {
    const max = new Gladiator("Maximus", "Trident");
    const titus = new Gladiator("Titus", "Sword");
    testArena.addGladiator(max);
    testArena.addGladiator(titus);
    expect(testArena.gladiators).to.deep.equal([max, titus]);
    expect(testArena.gladiators).to.have.lengthOf(2);
  });
  it("Arena's addGladiator method never allows more than 2 gladiators at a time", function () {
    const andronicus = new Gladiator("Andronicus", "Sword");
    testArena.addGladiator(andronicus);
    expect(testArena.gladiators).to.have.lengthOf(2);
  });
  it("Arena has a method called fight", function () {
    expect(testArena.fight).to.be.a("function");
  });
  it("In Arena's fight method, a weapons tie eliminates both gladiators", function () {
    const andronicus = new Gladiator("Andronicus", "Trident");
    const thaddeus = new Gladiator("Thaddeus", "Trident");
    const colosseum = new Arena("Colosseum");
    colosseum.addGladiator(andronicus);
    colosseum.addGladiator(thaddeus);
    colosseum.fight();
    expect(colosseum.gladiators).to.have.lengthOf(0);
  });
  it("In Arena's fight method, Trident beats Spear", function () {
    const max = new Gladiator("Max", "Trident");
    const titus = new Gladiator("Titus", "Spear");
    const colosseum = new Arena("Colosseum");
    colosseum.addGladiator(max);
    colosseum.addGladiator(titus);
    colosseum.fight();
    expect(colosseum.gladiators).to.deep.equal([max]);
  });
  it("In Arena's fight method, Spear beats Club", function () {
    const max = new Gladiator("Max", "Spear");
    const titus = new Gladiator("Titus", "Club");
    const colosseum = new Arena("Colosseum");
    colosseum.addGladiator(max);
    colosseum.addGladiator(titus);
    colosseum.fight();
    expect(colosseum.gladiators).to.deep.equal([max]);
  });
  it("In Arena's fight method, Club beats Trident", function () {
    const max = new Gladiator("Max", "Club");
    const titus = new Gladiator("Titus", "Trident");
    const colosseum = new Arena("Colosseum");
    colosseum.addGladiator(max);
    colosseum.addGladiator(titus);
    colosseum.fight();
    expect(colosseum.gladiators).to.deep.equal([max]);
  });
});
