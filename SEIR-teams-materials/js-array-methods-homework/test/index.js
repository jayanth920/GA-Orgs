const expect = require('chai').expect;
const {
	mayHoliday,
	wordsWithLessThanFourLetters,
	doesEveryWordContainA,
	doesAnyWordContainX,
	devLanguageCounts,
} = require('../lib/callbacks');
const {
	numberOfContestantsFromCalifornia,
	numberWhoAreFromCaliAndAries,
	contestantsArrayWithIcebreakers,
	areThereContestantsFromMI,
	firstAries,
	zodiacSignCount,
} = require('../lib/bachelor');

describe('callbacks.js:', () => {
	it('Question 1: should use .find() to return an object with the May Holiday', () => {
		expect(mayHoliday).to.be.an('object');
		expect(mayHoliday).to.deep.equal({ name: 'cinco de mayo', month: 'may' });
	});

	it('Question 2: should use .filter() to return words with less than four letters', () => {
		expect(wordsWithLessThanFourLetters).to.have.lengthOf(4);
		expect(wordsWithLessThanFourLetters).to.deep.equal([
			'cat',
			'tap',
			'bay',
			'ha',
		]);
	});

	it('Question 3: should use .every() to check if all words contain the letter "a"', () => {
		expect(doesEveryWordContainA).to.be.true;
	});

	it('Question 4: should use .some() to check if any words contain the letter "x"', () => {
		expect(doesAnyWordContainX).to.be.true;
	});

	it('Question 5: should use .reduce() to return an object with language counts', () => {
		expect(devLanguageCounts).to.be.an('object');
		expect(devLanguageCounts).to.deep.equal({
			javascript: 4,
			python: 3,
		});
	});
});

describe('bachelor.js:', () => {
	it('Question 1: should return the number of contestants from California', () => {
		expect(numberOfContestantsFromCalifornia).to.be.a('number');
		expect(numberOfContestantsFromCalifornia).to.equal(3);
	});

	it('Question 2: should return the number of contestants from California who are Aries', () => {
		expect(numberWhoAreFromCaliAndAries).to.be.a('number');
		expect(numberWhoAreFromCaliAndAries).to.equal(2);
	});

	it('Question 3: should return a new array with the contestant information and a new property called "icebreaker" with the following string value: "Hi _firstName_, what do you like the most about _city_?', () => {
		expect(contestantsArrayWithIcebreakers).to.be.an('array');
		expect(contestantsArrayWithIcebreakers).to.have.lengthOf(8);
		expect(contestantsArrayWithIcebreakers).to.deep.equal([
			{
				firstName: 'Katie',
				lastInitial: 'M.',
				city: 'Los Angeles',
				state: 'CA',
				age: 24,
				zodiacSign: 'Aries',
				signUpDate: 2011,
				icebreaker: 'Hi Katie, what do you like the most about Los Angeles?',
			},
			{
				firstName: 'Lauren',
				lastInitial: 'K.',
				city: 'Philadelphia',
				state: 'PA',
				age: 26,
				zodiacSign: 'Gemini',
				signUpDate: 1994,
				icebreaker: 'Hi Lauren, what do you like the most about Philadelphia?',
			},
			{
				firstName: 'Sara',
				lastInitial: 'T.',
				city: 'Encinitas',
				state: 'CA',
				age: 28,
				zodiacSign: 'Scorpio',
				signUpDate: 2012,
				icebreaker: 'Hi Sara, what do you like the most about Encinitas?',
			},
			{
				firstName: 'Yasmein',
				lastInitial: 'A.',
				city: 'Santa Barbara',
				state: 'CA',
				age: 25,
				zodiacSign: 'Aries',
				signUpDate: 2001,
				icebreaker:
					'Hi Yasmein, what do you like the most about Santa Barbara?',
			},
			{
				firstName: 'Danielle',
				lastInitial: 'R.',
				city: 'Boston',
				state: 'MA',
				age: 25,
				zodiacSign: 'Aries',
				signUpDate: 2008,
				icebreaker: 'Hi Danielle, what do you like the most about Boston?',
			},
			{
				firstName: 'Marybeth',
				lastInitial: 'M.',
				city: 'New York',
				state: 'NY',
				age: 29,
				zodiacSign: 'Aquarius',
				signUpDate: 1999,
				icebreaker: 'Hi Marybeth, what do you like the most about New York?',
			},
			{
				firstName: 'Jillian',
				lastInitial: 'L.',
				city: 'Grand Rapids',
				state: 'MI',
				age: 27,
				zodiacSign: 'Libra',
				signUpDate: 2000,
				icebreaker: 'Hi Jillian, what do you like the most about Grand Rapids?',
			},
			{
				firstName: 'Krissy',
				lastInitial: 'M.',
				city: 'Raleigh',
				state: 'NC',
				age: 28,
				zodiacSign: 'Pisces',
				signUpDate: 2019,
				icebreaker: 'Hi Krissy, what do you like the most about Raleigh?',
			},
		]);
	});

	it('Question 4: should return a boolean of whether at least one contestant is from MI', () => {
		expect(areThereContestantsFromMI).to.be.a('boolean');
		expect(areThereContestantsFromMI).to.be.true;
	});

	it('Question 5: should return a string with the first Aries that reads: "Hi, my name is _firstName_ _lastInitial_ from _city_, and I was the first to sign up!"', () => {
		expect(firstAries).to.be.a('string');
		expect(firstAries).to.deep.equal(
			'Hi, my name is Yasmein A. from Santa Barbara, and I was the first to sign up!'
		);
	});

	it('Bonus (optional): should return an object with the breakdown of Zodiac signs of contestants', () => {
		expect(zodiacSignCount).to.be.an('object');
		expect(zodiacSignCount).to.deep.equal({
			Aries: 3,
			Gemini: 1,
			Scorpio: 1,
			Aquarius: 1,
			Libra: 1,
			Pisces: 1,
		});
	});
});
