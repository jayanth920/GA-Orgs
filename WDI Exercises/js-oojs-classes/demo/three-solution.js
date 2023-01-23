/*
 * Exercise Three Solution!
 *
 * Refactor your ES5 Class from Exercise Two in to the new ES6 Syntax.
 * Create 3 new cars using your ES6 class:
 *  - a grey toyota carolla
 *  - a gold maserati quattroporte
 *  - a a green subaru outback
 *
 */
class Card {
  constructor(rank, suit, score) {
    this.rank = rank;
    this.suit = suit;
    this.score = score;
    this.title = `${rank} of ${suit}`;
  }

  isHigher(cardOne, cardTwo) {
    return cardOne > cardTwo;
  }
}
