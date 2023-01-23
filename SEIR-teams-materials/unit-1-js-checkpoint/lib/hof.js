/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Solar System! Work through the sub-prompts below using the solarSystem array.
 */

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

/* Prompt 1A
 * For each planet, return the name "[planet name] is beautiful" where planet
 * name is replaced with the name of the planet in a variable called beautifulPlanets. 🪐
 */

// the .map() callback has been mostly set up for you! modify the return so that it returns a string with "[planet name] is beautiful"
const beautifulPlanets = solarSystem.map((planet) => {
	// your code below!
	return planet;
});

/* Prompt 1B
 * Create an array of planet objects that do NOT have a ringSystem. Hint: use .filter!
 */

const noRingSystem = solarSystem.filter((planet) => {
	// modify the code below to return the planets with NO ring system
	return planet;
});

/* Prompt 1C
 * Create an array of planet objects with 3 or more moons. Hint: use .filter!
 */

const threeOrMoreMoons = null;

/* Prompt 1D
 * Sort the planets in the array by the number of moons they have in ascending order
 */

//  a compareMoonCount callback function has been set up for you 😌
const compareMoonCount = (a, b) => {
	return a.moons.length - b.moons.length;
};

const sortedByNumberOfMoons = null;

/*
 * Prompt 02:
 *
 * Bond, James Bond! Complete the subprompts below using the bondFilms array.
 */

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
	{ title: 'Dr. No', year: 1962, actor: 'Sean Connery', gross: '$440,759,072' },
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

/* Prompt 2A:
 * Create a new array with only the titles of the Bond films:
 */

const bondTitles = null;

/* Prompt 2B:
 * Create a new array with only the gross revenue for each Bond film:
 */

const grossRevenue = null;

/* Prompt 2C:
 * Create a new array with only the years of each Bond film:
 */

const bondYears = null;

/* Prompt 2D:
 * Sort the bondFilms array by year in ascending year (earliest to most recent):
 */

// a compare function has been provided
function compareBondYears(a, b) {
	return a.year - b.year;
}

const bondMoviesSortedByYear = null;

/* Prompt 2E:
 * Create a new array oddBonds, of only the Bond films released on odd-numbered years:
 * Hint: use filter!
 */

const oddBonds = null;

/* Prompt 2F:
 * Challenge!
 * Determine the total cumulative gross of the Bond franchise (reduce). Hint To make the grosses into usable numbers, look into the
 * .parseInt Javascript method.
 */

const totalGross = bondFilms.reduce((total, currentValue) => {
	// your code here

	return total;
}, 0);

/* Prompt 2G:
 * Challenge!
 * Create an object with each bond actor and the number of movies they played
 * in:
 *
 * i.e:
 *
 * {
 *  'Pierce Brosnan': 3,
 *  'Sean Connery': 6,
 * }
 */

const bondActorsCount = bondFilms.reduce((result, currentValue) => {
	// your code here

	return result;
}, {});

////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE
////////////////////////////////////////
if (!this.window) {
	module.exports = {
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
	};
}
