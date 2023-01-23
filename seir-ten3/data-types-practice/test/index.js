const expect = require("chai").expect;
const {
  myFavoriteNumber,
  myFirstVariable,
  mySecondVariable,
  myThirdVariable,
  myNumber,
  firstName,
  lastName,
  fullName,
  hello,
  world,
  message,
  sixA,
  sixB,
  sixC,
  sixD,
  sixE,
  sixF,
  sixG,
  sevenA,
  sevenB,
  sevenC,
  sevenD,
  sevenE,
  sevenF,
  sevenG,
  eightA,
  eightB,
  eightC,
  eightD,
  eightE,
  eightF,
  eightG,
  martyArray1,
  martyArray2,
  martyArray3,
  secondToLast,
  thom,
  karolin,
  kristyn,
  cathleen,
} = require("../lib/challenge");

describe("Prompt 1", () => {
  it("myFavoriteNumber should be a number", () => {
    expect(myFavoriteNumber).to.be.a("number");
  });
});

describe("Prompt 2", () => {
  it("myFirstVariable should be a string", () => {
    expect(myFirstVariable).to.be.a("string");
  });
  it("mySecondVariable should be a boolean", () => {
    expect(mySecondVariable).to.be.a("boolean");
  });
  it("myThirdVariable should be a number", () => {
    expect(myThirdVariable).to.be.a("number");
  });
});

describe("Prompt 3", () => {
  it("myNumber should be a number", () => {
    expect(myNumber).to.be.a("number");
  });
});

describe("Prompt 4", () => {
  it("firstName should be a string", () => {
    expect(firstName).to.be.a("string");
  });
  it("lastName should be a string", () => {
    expect(lastName).to.be.a("string");
  });
  it("fullName should be a string", () => {
    expect(fullName).to.be.a("string");
  });
  it("fullName should be the first and last name combined", () => {
    expect(fullName).to.equal(`${firstName} ${lastName}`);
  });
});

describe("Prompt 5", () => {
  it("hello should be a string equal to 'hello' ", () => {
    expect(hello).to.be.a("string");
    expect(hello).to.equal("hello");
  });
  it('world should be a string equal to "world"', () => {
    expect(world).to.be.a("string");
    expect(world).to.equal("world");
  });
  it('message should be a string equal to "hello world"', () => {
    expect(message).to.be.a("string");
    expect(message).to.equal("hello world!");
  });
});

describe("Prompt 6", () => {
  it("sixA should be false", () => {
    expect(sixA).to.equal(false);
  });
  it("sixB should be true", () => {
    expect(sixB).to.equal(true);
  });
  it("sixC should be true", () => {
    expect(sixC).to.equal(true);
  });
  it("sixD should be false", () => {
    expect(sixD).to.equal(false);
  });
  it("sixE should be false", () => {
    expect(sixE).to.equal(false);
  });
  it("sixF should be true", () => {
    expect(sixF).to.equal(true);
  });
  it("sixG should be false", () => {
    expect(sixG).to.equal(false);
  });
});

describe("Prompt 7", () => {
  it("sevenA should be true", () => {
    expect(sevenA).to.equal(true);
  });

  it("sevenB should be true", () => {
    expect(sevenB).to.equal(true);
  });
  it("sevenC should be true", () => {
    expect(sevenC).to.equal(true);
  });
  it("sevenD should be true", () => {
    expect(sevenD).to.equal(true);
  });
  it("sevenE should be true", () => {
    expect(sevenE).to.equal(true);
  });
  it("sevenF should be true", () => {
    expect(sevenF).to.equal(true);
  });
  it("sevenG should be true", () => {
    expect(sevenG).to.equal(true);
  });
});

describe("Prompt 8", () => {
  it("eightA should be false", () => {
    expect(eightA).to.equal(false);
  });
  it("eightB should be false", () => {
    expect(eightB).to.equal(false);
  });
  it("eightC should be false", () => {
    expect(eightC).to.equal(false);
  });
  it("eightD should be false", () => {
    expect(eightD).to.equal(false);
  });
  it("eightE should be false", () => {
    expect(eightE).to.equal(false);
  });
  it("eightF should be false", () => {
    expect(eightF).to.equal(false);
  });
  it("eightG should be false", () => {
    expect(eightG).to.equal(false);
  });
});

describe("Prompt 9", () => {
  it('martyArray1 should equal "Marty McFly"', () => {
    expect(martyArray1).to.be.a("string");
    expect(martyArray1).to.equal("Marty McFly");
  });
  it('martyArray2 should equal "Marty McFly"', () => {
    expect(martyArray2).to.be.a("string");
    expect(martyArray2).to.equal("Marty McFly");
  });
  it('martyArray3 should equal "Marty McFly"', () => {
    expect(martyArray3).to.be.a("string");
    expect(martyArray3).to.equal("Marty McFly");
  });
});

describe("Prompt 10", () => {
  it('secondToLast should equal "d"', () => {
    expect(secondToLast).to.equal("d");
  });
});

describe("Prompt 11", () => {
  it("thom should have the correct changes", () => {
    expect(thom).to.deep.equal(["Gameboy", 1000, "Christchurch"]);
  });
  it("karolin should have the correct changes", () => {
    expect(karolin).to.deep.equal(["Karolin", 17, "New York"]);
  });
  it("cathleen should have the correct changes", () => {
    expect(cathleen).to.deep.equal(["Cathleen", 186, "Gotham City"]);
  });
  it("kristyn should have the correct changes", () => {
    expect(kristyn).to.deep.equal(["Kristyn", 5, "Oakland"]);
  });
});
