// use the xFiles object below to answer the following prompts

var xFiles = {
	seasons: 11,
	episodes: 218,
	iconic: true,
	createdBy: 'Chris Carter',
	tagline: 'I Want to Believe',
	genres: [
		'science fiction',
		'horror',
		'drama',
		'mystery',
		'occult detective fiction',
	],
	bestEpisodes: {
		monsterOfTheWeek: ['Bad Blood', 'Squeeze'],
		comedic: [
			"Clyde Bruckman's Final Repose",
			'Arcadia',
			'Small Potatoes',
			'The Post-Modern Prometheus',
			'How the Ghosts Stole Christmas',
		],
		standalone: [
			'Triangle',
			'all things',
			'The Unnatural',
			'Pusher',
			'Irresistible',
		],
		mythology: [
			'Pilot',
			'Memento Mori',
			'Duane Barry',
			'Trust No 1',
			'My Struggle',
		],
	},
	data: {
		cast: [
			'David Duchovny',
			'Gillian Anderson',
			'Mitch Pileggi',
			'William B. Davis',
			'Annabeth Gish',
			'Robert Patrick',
		],
		characters: [
			{
				name: 'Fox William Mulder',
				believer: true,
				nickname: 'Spooky',
				occupation: 'FBI Special Agent',
				expertise: 'Profiler',
				education: ['Oxford', 'Quantico'],
				family: ['Samantha Mulder', 'Teena Mulder', 'William Mulder'],
				alive: true,
			},
			{
				name: 'Dana Katherine Scully',
				believer: undefined,
				occupation: 'FBI Special Agent',
				expertise: 'Pathologist',
				education: ['University of Maryland', 'Stanford', 'Quantico'],
				family: {
					parents: ['Bill Scully, Sr.', 'Margaret Scully'],
					sister: 'Melissa Scully',
					brothers: ['Charlie Scully', 'Bill Scully, Jr.'],
					children: ['Emily Sim', 'William Scully'],
				},
				alive: true,
			},
			{
				name: 'Walter S. Skinner',
				believer: undefined,
				occupation: 'FBI Assistant Director',
				family: ['Sharon Skinner'],
				education: undefined,
				alive: true,
			},
			{
				name: 'Carl Gerhard Busch',
				nickname: 'Cigarette Smoking Man',
				affiliation: 'The Syndicate',
				alive: undefined,
			},
			{
				name: 'Monica Reyes',
				believer: true,
				occupation: 'FBI Special Agent',
				alive: false,
			},
			{ name: 'John Doggett', occupation: 'FBI Special Agent', alive: true },
		],
	},
};

// PROMPT 1
// Access the property with the value 'Arcadia'
var arcadia = null;

// PROMPT 2
// Access the property with the value 'Spooky'
var spooky = null;

// PROMPT 3
// Access the property 'Walter S. Skinner'
var skinner = null;

// PROMPT 4
// Access the property with the value 'Margaret Scully'
var margaret = null;

// PROMPT 5
// Loop over the cast and characters array and push them into an array of strings that contains a line for each actor and the character they portray, e.g., "Fox William Mulder is portrayed by David Duchovny"
// Hint: The actors and their characters are listed in the same order

var portrayedBy = null;

// PROMPT 6
// Use an array iteration method to return true if there are any true believers in the characters array, and false if there are none
var stillAlive = null;

// PROMPT 7
// Use array iteration methods to loop over the characters and return the names of the true believers
// Hint: feel free to daisy-chain methods for more concise code

var believers = null;
