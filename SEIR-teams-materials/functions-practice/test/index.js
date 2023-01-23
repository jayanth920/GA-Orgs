const expect = require("chai").expect;
const {
  sayHello,
  print,
  printMessage,
  getSquare,
  reverseMessage,
  multiply,
  makePerson,
  makeAnObject,
  makeAnArray,
  sum,
  addToSum,
  getArraySum,
  arrayifyString,
} = require("../lib/challenge");

describe("Prompt 1", () => {
  it('should return "hello world" string', () => {
    expect(sayHello()).to.be.a("string").that.equals("hello world");
  });
});

describe("Prompt 2", () => {
  it("should return the message parameter", () => {
    expect(print("this is my message"))
      .to.be.a("string")
      .that.equals("this is my message");
    expect(print("hello world from prompt 2"))
      .to.be.a("string")
      .that.equals("hello world from prompt 2");
  });
});

describe("Prompt 3", () => {
  it("should return a string with today's message", () => {
    expect(printMessage("hello world"))
      .to.be.a("string")
      .that.equals("Today's message is: hello world");
    expect(printMessage("JavaScript is awesome"))
      .to.be.a("string")
      .that.equals("Today's message is: JavaScript is awesome");
  });
});

describe("Prompt 4", () => {
  it("should return a number that is the square of the input", () => {
    expect(getSquare(3)).to.be.a("number").that.equals(9);
    expect(getSquare(5)).to.be.a("number").that.equals(25);
    expect(getSquare(10)).to.be.a("number").that.equals(100);
  });
});

describe("Prompt 5", () => {
  it("should return the message printed in reverse", () => {
    expect(reverseMessage("hello")).to.be.a("string").that.equals("olleh");
    expect(reverseMessage("this is a string in reverse"))
      .to.be.a("string")
      .that.equals("esrever ni gnirts a si siht");
  });
});

describe("Prompt 6", () => {
  it("when given two arguments, it should return the product of the two numbers", () => {
    expect(multiply(2, 4)).to.be.a("number").that.equals(8);
    expect(multiply(3, 5)).to.be.a("number").that.equals(15);
  });

  it("when given one argument, it should return the number doubled", () => {
    expect(multiply(5)).to.be.a("number").that.equals(10);
    expect(multiply(-3)).to.be.a("number").that.equals(-6);
  });
});

describe("Prompt 7", () => {
  it("should return an object with the given first and last names", () => {
    expect(makePerson("Amy", "Tan"))
      .to.be.an("object")
      .that.deep.equals({ firstName: "Amy", lastName: "Tan" });
    expect(makePerson("Toni", "Morrison"))
      .to.be.an("object")
      .that.deep.equals({ firstName: "Toni", lastName: "Morrison" });
  });
});

describe("Prompt 8", () => {
  it("should return an object", () => {
    expect(makeAnObject()).to.be.an("object");
  });
});

describe("Prompt 9", () => {
  it("should return an array", () => {
    expect(makeAnArray()).to.be.an("array");
  });
});

describe("Prompt 10", () => {
  it("should add to the sum", () => {
    addToSum(5);
    addToSum(10);
    expect(addToSum(3)).to.be.a("number").that.equals(18);
  });
});

describe("Prompt 11", () => {
  it("should return the sum of an array", () => {
    expect(getArraySum([1, 2, 3]))
      .to.be.a("number")
      .that.equals(6);
    expect(getArraySum([23, 25, -46, 7, 123]))
      .to.be.a("number")
      .that.equals(132);
  });

  it("should return zero for an empty array", () => {
    expect(getArraySum([])).to.be.a("number").that.equals(0);
  });
});

describe("Prompt 12", () => {
  it("should return an array of the individual words in the string", () => {
    expect(arrayifyString("The rain in Spain falls mainly on the plain"))
      .to.be.an("array")
      .that.deep.equals([
        "The",
        "rain",
        "in",
        "Spain",
        "falls",
        "mainly",
        "on",
        "the",
        "plain",
      ]);
    expect(arrayifyString("All things are perfect, exactly as they are"))
      .to.be.an("array")
      .that.deep.equals([
        "All",
        "things",
        "are",
        "perfect,",
        "exactly",
        "as",
        "they",
        "are",
      ]);
  });
});
