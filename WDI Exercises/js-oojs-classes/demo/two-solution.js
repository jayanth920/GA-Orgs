/*
 * Exercise Two Solution!
 *
 * Domain Modeling is the processing of defining the data and behavior of a
 * given domain in an application. The `car` Class we created is the result
 * of domain modeling.
 *
 * We've been tasked with building out a card game. Before we can get started,
 * we'll need to do some domain modeling, specifically for a single Card.
 * Given the following requirements, what properties and methods will our
 * Card class need?
 *
 * Requirements
 * - every card has a rank (i.e. Queen)
 * - every card has a suit (i.e. Hearts)
 * - every card has a title
 * - every card has a score based on it's rank
 * - every card has a method of comparing it to another card to determine if its
 *   score is higher
 *
 * Define an object literal with the above properties and methods:
 */

var card = {
  rank: 'Queen',
  suit: 'Hearts',
  title: 'Queen of Hearts',
  score: 11,
  isHigher: (cardOne, cardTwo) => cardOne > cardTwo,
};

/*
 * We have an object literal like the Card class we want, but remember that we
 * can't do much with just an object litteral. We'll need 52 cards and we don't
 * want to make them all manually!
 *
 * Define a constructor function for our Card class. It should take the rank,
 * suit, and score in as arguments and instantiate an instance of our Card Class.
 * Once you're done instantiate a card with a rank of 'Queen' and a suit of 'Hearts'
 * and another with a rank of 'Ace' and a suit of 'Base'. Is base a suit?
 * I forget.
 */
function Card(rank, suit, score) {
  this.rank = rank;
  this.suit = suit;
  this.score = score;
  this.title = `${rank} of ${suit}`;
  this.isHigher = (cardOne, cardTwo) => cardOne > cardTwo;
}

const queenOfHearts = new Card('Queen', 'Hearts', 11);
const aceOfBase = new Card('Ace', 'Base', -100);

console.log(queenOfHearts);
console.log(aceOfBase);
