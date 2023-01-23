var alice = {
  name: 'Alice Jones',
  birthDate: new Date(1977, 6, 23),
  address: {
    street: '502 Main St',
    city: 'Newton',
    state: 'MA',
    zipCode: '01345'
  },
  employmentHistory: [
    {
      name: "WhoAteMyCereal.com",
      title: "Rails Developer",
      contact: '978 867-5309',
      manager: "Gonzo Smith",
      startDate: new Date(2013, 12, 20),
      endDate: new Date(2014, 6, 25),
      salary: 75000
    },
    {
      name: "Dunkin Donuts",
      title: "Donut Maker",
      contact: '978 453-5680',
      manager: "Joe Conway",
      startDate: new Date(2011, 8, 13),
      endDate: new Date(2013, 1, 3),
      salary: 16000
    },
    {
      name: "Google",
      title: "CEO",
      contact: '413 958-8909',
      manager: "God Himself",
      startDate: new Date(2008, 3, 1),
      endDate: new Date(2011, 1, 9),
      salary: 5450000
    }
  ]
};

// Show the name of the first company Alice worked for.
// (note: employment history is ordered by most to least recent)

// Show the name of the last company Alice worked for.

// Show the name of Alice's most recent manager.

// Change this manager's name and show it again.

// Show Alice's street address in the same format you'd use to send a letter.

// Change the name of the most recent company Alice worked for,
// and change her position to "JavaScript Developer".

// Calculate and show the number of days alice worked at each company.
// (note: subtracting dates will get you a time difference in milliseconds!)

// For each position in Alice's employment history, display a sentence
// in the format "Alice made <salary> as a <job title> at <company name>".
