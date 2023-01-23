// dependencies
const expect = require('chai').expect;
require('sinon-chai');
require('mocha-sinon');

// import scripts to test
const {
	people,
	countries,
	cities,
	favoriteNumbers,
	actors,
	sesameStreetCharacters,
	starWarsCharacters,
	han,
	leia,
	luke,
	chewbacca,
	jerseyShore,
	months,
	randomNumbers,
	foods,
	favoriteFoods,
} = require('../lib/arrays');

const {
	numBelow10,
	numBelow100,
	age,
	prompt1,
	prompt2,
	prompt3,
} = require('../lib/conditionals');

const {
	helloWorld,
	printMessage,
	greetMe,
	printCool,
	calculateCube,
	getUpperCaseString,
	reverseSentence,
	formatPhoneNumber,
} = require('../lib/functions');

const {
	beautifulPlanets,
	noRingSystem,
	threeOrMoreMoons,
	sortedByNumberOfMoons,
	bondTitles,
	grossRevenue,
	bondYears,
	bondMoviesSortedByYear,
	oddBonds,
	totalGross,
	bondActorsCount,
} = require('../lib/hof');

const {
	prompt01,
	prompt02,
	prompt03,
	prompt04,
	prompt05,
	prompt06,
	prompt07,
	prompt08,
} = require('../lib/loops.js');

const {
	person,
	movie,
	monster,
	monsterName,
	computer,
	crazyObject,
	burningMouth,
	prettyPrettayGood,
	swearing,
	chiknTeriyakiBoi,
	funkhauser,
	inception,
} = require('../lib/objects');

const {
	firstName,
	lastName,
	fullName,
	tongueTwister,
	includesFox,
	leslie,
	newString,
	toArray,
	charArray,
} = require('../lib/strings');

const {
	message,
	name,
	favoriteFood,
	untypedNumber,
} = require('../lib/variables');

describe('arrays.js', () => {
	it('Prompt 01: people should be an array that contains three string elements', () => {
		expect(people).to.be.an('array');
		expect(people.length).to.equal(3);
		people.forEach((person) => {
			expect(person).to.be.a('string');
		});
	});

	it('Prompt 02: country should be an array that contains four string elements', () => {
		expect(countries).to.be.an('array');
		expect(countries.length).to.equal(4);
		countries.forEach((country) => {
			expect(country).to.be.a('string');
		});
	});

	it('Prompt 03: cities should be an array that contains five string elements', () => {
		expect(cities).to.be.an('array');
		expect(cities.length).to.equal(5);
		cities.forEach((city) => {
			expect(city).to.be.a('string');
		});
	});

	it('Prompt 04: favoriteNumbers should be an array that contains four number elements', () => {
		expect(favoriteNumbers).to.be.an('array');
		expect(favoriteNumbers.length).to.equal(4);
		favoriteNumbers.forEach((num) => {
			expect(num).to.be.a('number');
		});
	});

	it('Prompt 05: actors should be an array that contains five string elements', () => {
		expect(actors).to.be.an('array');
		expect(actors.length).to.equal(5);
		actors.forEach((actor) => {
			expect(actor).to.be.a('string');
		});
	});

	it('Prompt 06: sesameStreetCharacters should be an array that contains two string elements', () => {
		expect(sesameStreetCharacters).to.be.an('array');
		expect(sesameStreetCharacters.length).to.equal(2);
		sesameStreetCharacters.forEach((char) => {
			expect(char).to.be.a('string');
		});
		expect(sesameStreetCharacters.includes('Elmo')).to.equal(true);
		expect(sesameStreetCharacters.includes('Big Bird')).to.equal(true);
		expect(sesameStreetCharacters.includes('Bert')).to.equal(false);
		expect(sesameStreetCharacters.includes('Ernie')).to.equal(false);
		expect(sesameStreetCharacters.includes('Cookie Monster')).to.equal(false);
	});

	it('Prompt 07: starwarsCharacters should be an array and character names should match its values', () => {
		expect(starWarsCharacters).to.be.an('array');
		expect(starWarsCharacters.length).to.equal(6);
		starWarsCharacters.forEach((char) => {
			expect(char).to.be.a('string');
		});
		expect(han).to.equal('Han');
		expect(luke).to.equal('Luke');
		expect(leia).to.equal('Leia');
		expect(chewbacca).to.equal('Chewbacca');
	});

	it('Prompt 08: jerseyShore should be an array with three string elements', () => {
		expect(jerseyShore).to.be.an('array');
		expect(jerseyShore.length).to.equal(3);
		jerseyShore.forEach((char) => {
			expect(char).to.be.a('string');
		});
		expect(jerseyShore.includes('JWoww')).to.equal(true);
		expect(jerseyShore.includes('The Situation')).to.equal(true);
		expect(jerseyShore.includes('DJ Pauly D')).to.equal(false);
		expect(jerseyShore.includes('Snookie')).to.equal(false);
		expect(jerseyShore.includes('Sweetheart')).to.equal(true);
	});

	it('Prompt 09: months should be an array with all months except Sept, Oct, and Nov', () => {
		expect(months).to.be.an('array');
		expect(months.length).to.equal(9);
		months.forEach((month) => {
			expect(month).to.be.a('string');
		});
		expect(months.includes('January')).to.equal(true);
		expect(months.includes('February')).to.equal(true);
		expect(months.includes('March')).to.equal(true);
		expect(months.includes('April')).to.equal(true);
		expect(months.includes('May')).to.equal(true);
		expect(months.includes('June')).to.equal(true);
		expect(months.includes('July')).to.equal(true);
		expect(months.includes('August')).to.equal(true);
		expect(months.includes('September')).to.equal(false);
		expect(months.includes('October')).to.equal(false);
		expect(months.includes('November')).to.equal(false);
		expect(months.includes('December')).to.equal(true);
	});

	it('Prompt 10: randomNumbers should be an array with three number elements', () => {
		expect(randomNumbers).to.be.an('array');
		expect(randomNumbers.length).to.equal(4);
		randomNumbers.forEach((num) => {
			expect(num).to.be.a('number');
		});
	});

	it('Prompt 11: foods should be an array with ten string elements, and favoriteFoods should contain the food elements longer than 6 characters', () => {
		expect(foods).to.be.an('array');
		expect(foods.length).to.equal(10);
		foods.forEach((food) => {
			expect(food).to.be.a('string');
		});
		expect(foods.filter((food) => food.length > 6)).to.deep.equal(
			favoriteFoods
		);
	});
});

describe('conditionals.js', () => {
	it('Prompt 01: numBelow100 should be a number', () => {
		expect(numBelow100).to.be.a('number');
		if (numBelow100 > 50) {
			expect(prompt1()).to.be.a('string').that.equals("That's a big number!");
		}
	});

	it('Prompt 02: numBelow10 should be a number', () => {
		expect(numBelow10).to.be.a('number');
		if (numBelow10 < 5) {
			expect(prompt2()).to.be.a('string').that.equals('small number');
		} else if (numBelow10 > 5) {
			expect(prompt2()).to.be.a('string').that.equals('big number');
		} else {
			expect(prompt2()).to.be.a('string').that.equals('monkey');
		}
	});

	it('Prompt 03: age should be a number', () => {
		expect(age).to.be.a('number');
		if (age > 16) {
			expect(prompt3()).to.be.a('string').that.equals('Here are the keys');
		} else {
			expect(prompt3())
				.to.be.a('string')
				.that.equals("Sorry, you're too young for now");
		}
	});
});

describe('functions.js', () => {
	it("Prompt 01: helloWorld should return a string with value 'hello world'", () => {
		expect(helloWorld()).to.equal('Hello World');
	});

	it('Prompt02: printMessage should return its argument', () => {
		expect(printMessage('message')).to.equal('message');
		expect(printMessage(1234)).to.equal(1234);
	});

	it('Prompt 03: greetMe should return a greeting', () => {
		expect(greetMe('Jimmy')).to.equal('Hello Jimmy');
	});

	it('Prompt 04: printCool should return an is cool statement', () => {
		expect(printCool('Gordon')).to.equal('Gordon is cool.');
	});

	it('Prompt 05: calculateCube should return the cubed number', () => {
		expect(calculateCube(3)).to.equal(27);
	});

	it('Prompt 06: getUpperCaseString should return an uppercased string', () => {
		expect(getUpperCaseString('hasta la vista')).to.equal('HASTA LA VISTA');
	});

	it('Prompt 07: reverseSentence should return words in reverse order', () => {
		expect(reverseSentence('every day is a winding road')).to.equal(
			'road winding a is day every'
		);
	});

	it('Prompt 08: formatPhoneNumber should format the number into a stringified phone number', () => {
		expect(formatPhoneNumber(5555259955)).to.equal('(555) 525-9955');
	});
});

describe('hof.js', () => {
	const solarSystem = [
		{ name: 'Mercury', ringSystem: false, moons: [] },
		{ name: 'Venus', ringSystem: false, moons: [] },
		{ name: 'Earth', ringSystem: false, moons: ['The Moon'] },
		{ name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos'] },
		{
			name: 'Jupiter',
			ringSystem: true,
			moons: ['Europa', 'Ganymede', 'Io', 'Callisto'],
		},
		{
			name: 'Saturn',
			ringSystem: true,
			moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas'],
		},
		{
			name: 'Uranus',
			ringSystem: true,
			moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel'],
		},
		{ name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid'] },
	];

	it('Prompt 1A: beautifulPlanets should be an array of strings', () => {
		expect(beautifulPlanets).to.be.an('array');
		expect(beautifulPlanets.length).to.equal(solarSystem.length);
		beautifulPlanets.forEach((planet) => {
			expect(planet).to.be.a('string');
		});
		expect(beautifulPlanets).to.deep.equal(
			solarSystem.map((planet) => `${planet.name} is beautiful`)
		);
	});

	it('Prompt 1B: noRingSystem should be an array of planet objects with no ring system', () => {
		const expectedResult = solarSystem.filter((planet) => !planet.ringSystem);
		expect(noRingSystem).to.be.an('array');
		expect(noRingSystem.length).to.equal(expectedResult.length);
		noRingSystem.forEach((planet) => {
			expect(planet).to.be.an('object');
		});
		expect(noRingSystem).to.deep.equal(expectedResult);
	});

	it('Prompt 1C: threeOrMoreMoons should be an array of planet objects with 3 or more moons', () => {
		const expectedResult = solarSystem.filter((planet) => planet.moons.length >= 3);
		expect(threeOrMoreMoons).to.be.an('array');
		expect(threeOrMoreMoons.length).to.equal(expectedResult.length);
		threeOrMoreMoons.forEach((planet) => {
			expect(planet).to.be.an('object');
		});
		expect(threeOrMoreMoons).to.deep.equal(expectedResult);
	});

	it('Prompt 1D: sortedByNumberOfMoons should be an array of planet objects sorted in ascending order of number of moons', () => {
		const expectedResult = solarSystem.sort(
			(a, b) => a.moons.length - b.moons.length
		);
		expect(sortedByNumberOfMoons).to.be.an('array');
		expect(sortedByNumberOfMoons.length).to.equal(expectedResult.length);
		sortedByNumberOfMoons.forEach((planet) => {
			expect(planet).to.be.an('object');
		});
		expect(sortedByNumberOfMoons).to.deep.equal(expectedResult);
	});

	const bondFilms = [
		{
			title: 'Skyfall',
			year: 2012,
			actor: 'Daniel Craig',
			gross: '$1,108,561,008',
		},
		{
			title: 'Thunderball',
			year: 1965,
			actor: 'Sean Connery',
			gross: '$1,014,941,117',
		},
		{
			title: 'Goldfinger',
			year: 1964,
			actor: 'Sean Connery',
			gross: '$912,257,512',
		},
		{
			title: 'Live and Let Die',
			year: 1973,
			actor: 'Roger Moore',
			gross: '$825,110,761',
		},
		{
			title: 'You Only Live Twice',
			year: 1967,
			actor: 'Sean Connery',
			gross: '$756,544,419',
		},
		{
			title: 'The Spy Who Loved Me',
			year: 1977,
			actor: 'Roger Moore',
			gross: '$692,713,752',
		},
		{
			title: 'Casino Royale',
			year: 2006,
			actor: 'Daniel Craig',
			gross: '$669,789,482',
		},
		{
			title: 'Moonraker',
			year: 1979,
			actor: 'Roger Moore',
			gross: '$655,872,400',
		},
		{
			title: 'Diamonds Are Forever',
			year: 1971,
			actor: 'Sean Connery',
			gross: '$648,514,469',
		},
		{
			title: 'Quantum of Solace',
			year: 2008,
			actor: 'Daniel Craig',
			gross: '$622,246,378',
		},
		{
			title: 'From Russia with Love',
			year: 1963,
			actor: 'Sean Connery',
			gross: '$576,277,964',
		},
		{
			title: 'Die Another Day',
			year: 2002,
			actor: 'Pierce Brosnan',
			gross: '$543,639,638',
		},
		{
			title: 'Goldeneye',
			year: 1995,
			actor: 'Pierce Brosnan',
			gross: '$529,548,711',
		},
		{
			title: "On Her Majesty's Secret Service",
			year: 1969,
			actor: 'George Lazenby',
			gross: '$505,899,782',
		},
		{
			title: 'The World is Not Enough',
			year: 1999,
			actor: 'Pierce Brosnan',
			gross: '$491,617,153',
		},
		{
			title: 'For Your Eyes Only',
			year: 1981,
			actor: 'Roger Moore',
			gross: '$486,468,881',
		},
		{
			title: 'Tomorrow Never Dies',
			year: 1997,
			actor: 'Pierce Brosnan',
			gross: '$478,946,402',
		},
		{
			title: 'The Man with the Golden Gun',
			year: 1974,
			actor: 'Roger Moore',
			gross: '$448,249,281',
		},
		{
			title: 'Dr. No',
			year: 1962,
			actor: 'Sean Connery',
			gross: '$440,759,072',
		},
		{
			title: 'Octopussy',
			year: 1983,
			actor: 'Roger Moore',
			gross: '$426,244,352',
		},
		{
			title: 'The Living Daylights',
			year: 1987,
			actor: 'Timothy Dalton',
			gross: '$381,088,866',
		},
		{
			title: 'A View to a Kill',
			year: 1985,
			actor: 'Roger Moore',
			gross: '$321,172,633',
		},
		{
			title: 'License to Kill',
			year: 1989,
			actor: 'Timothy Dalton',
			gross: '$285,157,191',
		},
	];

	it('Prompt 2A: bondTitles should be an array of strings of the film titles', () => {
		const expectedResult = bondFilms.map((film) => film.title);
		expect(bondTitles).to.be.an('array');
		expect(bondTitles.length).to.equal(bondFilms.length);
		bondTitles.forEach((title) => {
			expect(title).to.be.a('string');
		});
		expect(bondTitles).to.deep.equal(expectedResult);
	});

	it('Prompt 2B: grossRevenue should be an array of strings of the film grosses', () => {
		const expectedResult = bondFilms.map((film) => film.gross);
		expect(grossRevenue).to.be.an('array');
		expect(grossRevenue.length).to.equal(bondFilms.length);
		grossRevenue.forEach((revenue) => {
			expect(revenue).to.be.a('string');
		});
		expect(grossRevenue).to.deep.equal(expectedResult);
	});

	it('Prompt 2C: bondYears should be an array with the years of the films', () => {
		const expectedResult = bondFilms.map((film) => film.year);
		expect(bondYears).to.be.an('array');
		expect(bondYears.length).to.equal(bondFilms.length);
		bondYears.forEach((year) => {
			expect(year).to.be.a('number');
		});
		expect(bondYears).to.deep.equal(expectedResult);
	});

	it('Prompt 2D: bondMoviesSortedByYear should be an array of film objects sorted by year', () => {
		const expectedResult = bondFilms.sort((a, b) => a.year - b.year);
		expect(bondMoviesSortedByYear).to.be.an('array');
		expect(bondMoviesSortedByYear.length).to.equal(bondFilms.length);
		bondMoviesSortedByYear.forEach((film) => {
			expect(film).to.be.an('object');
		});
		expect(bondMoviesSortedByYear).to.deep.equal(expectedResult);
	});

	it('Prompt 2E: oddBonds should be an array of film objects with odd-numbered years', () => {
		const expectedResult = bondFilms.filter((film) => film.year % 2);
		expect(oddBonds).to.be.an('array');
		oddBonds.forEach((film) => {
			expect(film).to.be.an('object');
		});
		expect(oddBonds).to.deep.equal(expectedResult);
	});

	it('Prompt 2F: totalGross should return a number that is the cumulative gross', () => {
		const expectedResult = bondFilms.reduce(
			(sum, curVal) => sum + parseInt(curVal.gross.slice(1).replace(/,/g, '')),
			0
		);
		expect(totalGross).to.be.a('number');
		expect(totalGross).to.equal(expectedResult);
	});

	it('Prompt 2G: bondActorsCount should return an object with each actor and their number of appearances', () => {
		const expectedResult = bondFilms.reduce((acc, curVal) => {
			if (!acc[curVal.actor]) {
				acc[curVal.actor] = 1;
			} else {
				acc[curVal.actor]++;
			}
			return acc;
		}, {});
		expect(bondActorsCount).to.be.an('object');
		expect(bondActorsCount).to.deep.equal(expectedResult);
	});
});

describe('loops.js: prompt01', () => {
	beforeEach(function () {
		this.sinon.stub(console, 'log');
		prompt01();
	});

	it('prompt01: loop that prints each number from 0-10 (inclusive)', () => {
		expect(console.log.calledWith(0)).to.be.true;
		expect(console.log.calledWith(1)).to.be.true;
		expect(console.log.calledWith(2)).to.be.true;
		expect(console.log.calledWith(3)).to.be.true;
		expect(console.log.calledWith(4)).to.be.true;
		expect(console.log.calledWith(5)).to.be.true;
		expect(console.log.calledWith(6)).to.be.true;
		expect(console.log.calledWith(7)).to.be.true;
		expect(console.log.calledWith(8)).to.be.true;
		expect(console.log.calledWith(9)).to.be.true;
		expect(console.log.calledWith(10)).to.be.true;
		expect(console.log.calledWith(11)).to.be.false;
	});
});

describe('loops.js: prompt02', () => {
	beforeEach(function () {
		this.sinon.stub(console, 'log');
		prompt02();
	});
	it('prompt02: loop that prints numbers from 10-0 (inclusive)', () => {
		expect(console.log.calledWith(-1)).to.be.false;
		expect(console.log.calledWith(10)).to.be.true;
		expect(console.log.calledWith(0)).to.be.true;
		expect(console.log.calledWith(1)).to.be.true;
		expect(console.log.calledWith(2)).to.be.true;
		expect(console.log.calledWith(3)).to.be.true;
		expect(console.log.calledWith(4)).to.be.true;
		expect(console.log.calledWith(5)).to.be.true;
		expect(console.log.calledWith(6)).to.be.true;
		expect(console.log.calledWith(7)).to.be.true;
		expect(console.log.calledWith(8)).to.be.true;
		expect(console.log.calledWith(9)).to.be.true;
	});
});

describe('loops.js: prompt03', () => {
	beforeEach(function () {
		this.sinon.stub(console, 'log');
		prompt03();
	});

	it('prompt03: loop that prints even numbers between 0 and 50 (non-inclusive', () => {
		expect(console.log.calledWith(-1)).to.be.false;
		expect(console.log.calledWith(2)).to.be.true;
		expect(console.log.calledWith(3)).to.be.false;
		expect(console.log.calledWith(5)).to.be.false;
		expect(console.log.calledWith(6)).to.be.true;
		expect(console.log.calledWith(7)).to.be.false;
		expect(console.log.calledWith(8)).to.be.true;
		expect(console.log.calledWith(9)).to.be.false;
		expect(console.log.calledWith(10)).to.be.true;
		expect(console.log.calledWith(22)).to.be.true;
		expect(console.log.calledWith(28)).to.be.true;
		expect(console.log.calledWith(48)).to.be.true;
		expect(console.log.calledWith(50)).to.be.false;
	});
});

describe('loops.js: prompt04', () => {
	beforeEach(function () {
		this.sinon.stub(console, 'log');
		prompt04();
	});

	it('prompt04: loop that prints odd numbers between 0 and 50 (non-inclusive)', () => {
		expect(console.log.calledWith(1)).to.be.true;
		expect(console.log.calledWith(2)).to.be.false;
		expect(console.log.calledWith(5)).to.be.true;
		expect(console.log.calledWith(6)).to.be.false;
		expect(console.log.calledWith(7)).to.be.true;
		expect(console.log.calledWith(8)).to.be.false;
		expect(console.log.calledWith(9)).to.be.true;
		expect(console.log.calledWith(10)).to.be.false;
		expect(console.log.calledWith(11)).to.be.true;
		expect(console.log.calledWith(23)).to.be.true;
		expect(console.log.calledWith(27)).to.be.true;
		expect(console.log.calledWith(49)).to.be.true;
		expect(console.log.calledWith(50)).to.be.false;
		expect(console.log.calledWith(51)).to.be.false;
	});
});

describe('loops.js: prompt05', () => {
	beforeEach(function () {
		this.sinon.stub(console, 'log');
		prompt05();
	});

	it('prompt05: print numbers between 50 and 100 (non-inclusive)', () => {
		expect(console.log.calledWith(50)).to.be.false;
		expect(console.log.calledWith(51)).to.be.true;
		expect(console.log.calledWith(62)).to.be.true;
		expect(console.log.calledWith(73)).to.be.true;
		expect(console.log.calledWith(99)).to.be.true;
		expect(console.log.calledWith(100)).to.be.false;
	});
});

describe('loops.js: prompt06', () => {
	beforeEach(function () {
		this.sinon.stub(console, 'log');
		prompt06();
	});

	it('prompt06: print upperCasedNinjaTurtles', () => {
		const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michelangelo'];
		ninjaTurtles.forEach((turtle) => {
			expect(console.log.calledWith(turtle.toUpperCase())).to.be.true;
		});
	});
});

describe('loops.js: prompt 07', () => {
	beforeEach(function () {
		this.sinon.stub(console, 'log');
		prompt07();
	});

	it('should print the numbers from twoDArray1', () => {
		const twoDArray1 = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];

		twoDArray1.forEach((arr) => {
			arr.forEach((num) => {
				expect(console.log.calledWith(num)).to.be.true;
			});
		});
	});
});

describe('loops.js: prompt 08', () => {
	beforeEach(function () {
		this.sinon.stub(console, 'log');
		prompt08();
	});

	it('should print the numbers from twoDArray', () => {
		const twoDArray = [
			[9, 8, 7],
			[6, 5, 4],
			[3, 2, 1],
		];

		twoDArray.forEach((arr) => {
			arr.forEach((num) => {
				expect(console.log.calledWith(num)).to.be.true;
			});
		});
	});
});

describe('objects.js', () => {
	it('prompt01: person object should have name, age, and city properties', () => {
		expect(person.hasOwnProperty('name')).to.be.true;
		expect(person.hasOwnProperty('age')).to.be.true;
		expect(person.hasOwnProperty('city')).to.be.true;
	});

	it('prompt02: movie object should have title, genre, length, and cast properties', () => {
		expect(movie.title).to.be.a('string');
		expect(movie.genre).to.be.a('string');
		expect(movie.length).to.be.a('number');
		expect(movie.cast).to.be.an('array');
		expect(movie.cast.length).to.be.greaterThan(0);
		movie.cast.forEach((actor) => {
			expect(actor).to.be.a('string');
		});
	});

	it("prompt03: monster object's name should be saved and properties should be changed according to prompt", () => {
		expect(monsterName).to.equal(monster.name);
		expect(monster.type).to.equal('creature');
		expect(monsterName).to.equal(monster.name);
		expect(monster.hasOwnProperty('age')).to.be.true;
		expect(monster.age).to.equal(6);
	});

	it('prompt04: computer object should have make, model, year and warranty-type properties as described', () => {
		expect(computer.make).to.equal('Apple');
		expect(computer.model).to.equal('MacBook');
		expect(computer.year).to.equal(2017);
		expect(computer['warranty-type']).to.equal('limited');
	});

	it('prompt05: crazyObject key values should be saved to variables and changed as described', () => {
		expect(burningMouth).to.equal('omg my mouth is burning');
		expect(prettyPrettayGood).to.equal('Pretty pretty prettayyyyy good');
		expect(swearing).to.equal('Swearing at Larry and Jeff');
		expect(chiknTeriyakiBoi).to.equal('Chicken Teriyaki Boyyyyyy');
		expect(funkhauser).to.deep.equal({
			name: 'funkhauser',
			occupation: 'tv dude',
		});
		expect(
			crazyObject.larry.quotes.includes(
				"I'm trying to elevate small talk to medium talk"
			)
		).to.be.true;
	});

	it('prompt06: change the value of the limbo key to null in the inception object', () => {
		expect(
			inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4
				.dreamLayer5.dreamLayer6.limbo
		).to.equal(null);
	});
});

describe('strings.js', () => {
	it('prompt01: string variables called firstName, lastName, and fullName', () => {
		expect(firstName).to.be.a('string');
		expect(lastName).to.be.a('string');
		expect(fullName).to.be.a('string');
		expect(fullName).to.equal(`${firstName} ${lastName}`);
	});

	it('prompt02: tongueTwister should be the tongue twister', () => {
		expect(tongueTwister)
			.to.be.a('string')
			.that.equals('She sells sea shells by the sea shore');
	});

	it('prompt03: check if includesFox is true', () => {
		expect(includesFox).to.be.true;
	});

	it('prompt04: leslie should have Leslie Knope', () => {
		expect(leslie).to.equal(
			'The best character on Parks and Rec is Leslie Knope - hands down!'
		);
	});

	it('prompt05: newString should be the concatenated result of the other strings', () => {
		expect(newString).to.equal('eeny, meeny, miny, moe');
	});

	it('prompt06: should split the string into an array of characters', () => {
		expect(charArray).to.be.an('array');
		expect(charArray).to.deep.equal(toArray.split(''));
	});
});

describe('variables.js', () => {
	it('prompt01: message should equal "Hello World"', () => {
		expect(message).to.equal('Hello World');
	});

	it('prompt02: name should be a string', () => {
		expect(name).to.be.a('string');
		expect(name.length).to.be.greaterThan(0);
	});

	it('prompt03: favoriteFood should be a string', () => {
		expect(favoriteFood).to.be.a('string');
		expect(favoriteFood.length).to.be.greaterThan(0);
	});

	it('prompt04: untypedNumber should be a boolean', () => {
		expect(untypedNumber).to.be.a('boolean');
	});
});
