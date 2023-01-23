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
 * Create an object representing a person with name, age, and city properties.
 */

// const person = {};
const person = {};

/*
 * Prompt 02:
 *
 * Create an object for a movie with a title (string), genre (string), length
 * (number), and cast (array). Fill the cast array with characters from the
 * movie (strings).
 */

const movie = {};

/*
 * Prompt 03:
 *
 * Given the monster object:
 *   - What would you write to access the name and console.log it?
 *   - What would you write to change the type to 'creature' (without changing it inside the object)
 *   - What would you write to add a key to the object called age, and set the age to 6?
 *   - console.log the object to make sure type is creature, and age is 6
 */
const monster = {
	name: 'Slimer',
	color: 'greenish',
	type: 'plasm or ghost or something',
};

// replace null with the key
const monsterName = null;
// change monster type here
// add key to object called age and set to 6

/*
 * Prompt 04:
 *
 * Create an empty object called computer and save it to a variable.
 *
 * On the next line, add a make property and set it equal to 'Apple'.
 * On the next line, add a model property and set it equal to 'MacBook'.
 * On the next line, add a year property and set it equal to 2017.
 * On the next line, add a `warranty-type` (spelled exactly, hyphen included) property and set it
 * equal to 'limited'.
 */

const computer = {};

/*
 * Prompt 05:
 *
 * Crazy Object! Use the object below to assign  each  of the following to the variables below:
 *
 *   - "omg my mouth is burning"
 *   - "Pretty pretty prettayyyyy good"
 *   - "Swearing at Larry and Jeff"
 *   - "Chicken Teriyaki Boyyyyyy"
 *   - The object the contains the name funkhauser
 *   - Add the quote "I'm trying to elevate small talk to medium talk" to Larry's
 *     quote array. Confirm that it was added.
 *
 */
const crazyObject = {
	taco: [
		{
			meat: 'steak',
			cheese: ['panela', 'queso', 'chihuahua'],
		},
		{
			meat: 'chicken',
			salsa: [
				'pico',
				'hot',
				'hotter',
				'really hot',
				'really really hot',
				'omg my mouth is burning',
			],
		},
	],
	larry: {
		nicknames: ['LD', 'Chicken Teriyaki Boyyyyyy'],
		quotes: [
			'Pretty pretty prettayyyyy good',
			"Is that a parkinson's thing?",
			'women love a self confident bald man',
			"I'm a walking talking enigma",
		],
		characters: [
			{
				name: 'Jeff',
				occupation: 'manager',
			},
			{
				name: 'funkhauser',
				occupation: 'tv dude',
			},
			{
				name: 'susie',
				occupation: 'jeffs wife',
				favoriteHobby: 'Swearing at Larry and Jeff',
			},
		],
	},
};

// access the object's properties to assign the values below
const burningMouth = null;
const prettyPrettayGood = null;
const swearing = null;
const chiknTeriyakiBoi = null;
const funkhauser = null;
// add the quote here to larry's quote array

/*
 * Prompt 06:
 *
 * Change the value of limbo to null in the following object:
 */
const inception = {
	reality: {
		dreamLayer1: {
			dreamLayer2: {
				dreamLayer3: {
					dreamLayer4: {
						dreamLayer5: {
							dreamLayer6: {
								limbo: 'Joseph Gordon Levitt',
							},
						},
					},
				},
			},
		},
	},
};

// code here

////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE
////////////////////////////////////////
if (!this.window) {
	module.exports = {
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
	};
}
