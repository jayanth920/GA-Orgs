const expect = require("chai").expect;
const {
    generateNextSet,
    generateOutcomes,
    produceProbability,
} = require("../lib/challenge");

describe("Generate Next Set", () => {
  it('Should generate the next set of outcomes', () => {
    expect(generateNextSet(['T', 'H'])).to.include.members([ 'TT', 'TH', 'HT', 'HH' ]);
    expect(generateNextSet(['TT', 'TH', 'HT', 'HH' ])).to.include.members(['TTT', 'TTH', 'THT', 'THH', 'HTT', 'HTH', 'HHT', 'HHH']);
  });
}); 

describe("Generate Outcomes", () => {
  it('Should generate the outcomes given the number of coin flips', () => {
    expect(generateOutcomes(2)).to.include.members(['TT', 'TH', 'HT', 'HH']);
    expect(generateOutcomes(3)).to.include.members(['TTT', 'TTH', 'THT', 'THH', 'HTT', 'HTH', 'HHT', 'HHH']);
  });
});

describe("Calculate probability", () => {
  it('Should calculate the probability of getting a sequence when flipping a coin X times', () => {
    expect(produceProbability('THT', 4)).to.be.equal(0.25);
    expect(produceProbability('THTT', 5)).to.be.equal(0.125);
  });
});


