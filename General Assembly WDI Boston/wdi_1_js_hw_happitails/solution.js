var shelterData = {
    name: "Happitails Homes for Animals",
    address: "501 E. Middlefield Rd., Mountain View, CA",

    animals: [{
            name: 'rover',
            species: 'dog',
            age: 7,
            gender: 'm',
            toys: ['ball', 'bone'

            ]
        }, {
            name: 'max',
            species: 'dog',
            age: 3,
            gender: 'm',
            toys: ['bone']
        }, {
            name: 'lucy',
            species: 'dog',
            age: 4,
            gender: 'f',
            toys: ['stick', 'chewtoy'

            ]
        }, {
            name: 'tiger',
            species: 'cat',
            age: 8,
            gender: 'm',
            toys: ['bottlecap', 'fur mouse', 'jingly bell'


            ]
        }, {
            name: 'reggie',
            species: 'cat',
            age: 9,
            gender: 'm',
            toys: []
        }, {
            name: 'bond',
            species: 'cat',
            age: 6,
            gender: 'f',
            toys: ['bottlecap', 'jingly bell'

            ]
        }


    ],
    clients: [

        {
            name: "Etsuko Fogleman",
            age: 38,
            pets: [{
                    name: 'flopsy',
                    species: 'rabbit',
                    age: 4,
                    gender: 'f',
                    toys: []
                }, {
                    name: 'mopsy',
                    species: 'rabbit',
                    age: 6,
                    gender: 'm',
                    toys: []
                }, {
                    name: 'cottontail',
                    species: 'rabbit',
                    age: 6,
                    gender: 'm',
                    toys: []
                }


            ]
        }, {
            name: "Vincenzo Gaunt",
            age: 27,
            pets: [{
                    name: 'Fido',
                    species: 'dog',
                    age: 2,
                    gender: 'm',
                    toys: ['ball']
                },

                {
                    name: 'Spot',
                    species: 'dog',
                    age: 9,
                    gender: 'm',
                    toys: ['stick', 'chewtoy'

                    ]
                }
            ]
        }, {
            name: "Yuriko Wilken", 
            age: 33,
            pets: [{
                    name: 'Fluffy',
                    species: 'cat',
                    age: 3,
                    gender: 'm',
                    toys: ['bottlecap']
                }, {
                    name: 'Domino',
                    species: 'cat',
                    age: 1,
                    gender: 'm',
                    toys: ['fur mouse']
                }

            ]
        }, {
            name: "Homer Tedder",
            age: 44,
            pets: [{
                name: 'Puffball',
                species: 'cat',
                age: 7,
                gender: 'f',
                toys: ['scratching post']
            }]

        }, {
            name: "Rutha Janas",
            age: 22,
            pets: []
        }


    ],
};

// 1. Write a function to create an animal and add it to the shelter's
// list of pets. What parameters do you need? How do you figure out
// where it needs to go?

var add_pet_to_shelter = function (name, species, age, gender, toys) {
    var newPet = {
        name: name,
        species: species,
        age: age,
        gender: gender,
        toys: toys
    };

    shelterData.animals.push(newPet);
};

// 2. Write a function that creates a client object with no pets and
// adds it to the shelter's list of clients.

var add_client_to_shelter = function (name, age) {
    var newClient = {
        name: name,
        age: age,
        pets: []
    };

    shelterData.clients.push(newClient);
};

// 3. Write a function that takes a client's name and finds the
// client's object in the larger structure.

var find_client = function (clientName) {
    var i;
    var foundClient;

    for (i = 0; i < shelterData.clients.length; i++) {
        if (shelterData.clients[i].name === clientName) {
            foundClient = shelterData.clients[i];
        }
    }

    return foundClient;
};

var find_animal = function (animalName) {
    var i, j;
    var foundAnimal;

    for (i = 0; i < shelterData.animals.length; i++) {
        if (shelterData.animals[i].name === animalName) {
            foundAnimal = shelterData.animals[i];
        }
    }

    for (i = 0; i < shelterData.clients.length && !foundAnimal; i++) {
        var theClient = shelterData.clients[i];
        for (j = 0; j < theClient.pets.length; j++) {
            if (theClient.pets[j].name === animalName) {
                foundAnimal = theClient.pets[j];
            }
        }
    }

    return foundAnimal;
};

// 5. Write a function that takes an animal's name
// and a toy (a string) and adds the toy name to
// the animal's list of toys.

var give_toy_to_animal = function (animalName, toy) {
    var thePet = find_animal(animalName);
    thePet.toys.push(toy);
};


// testing code

add_pet_to_shelter('domino', 'cat', 1, 'male', []);

console.log('we expect 7 animals in the shelter');
console.log('and there are now ' + shelterData.animals.length);

console.log('there are currently ' + shelterData.clients.length + ' clients');
add_client_to_shelter('joe donnelly', 34);
console.log('and after adding client there are ' + shelterData.clients.length);

console.log('we are looking for joe donnelly');
var joe = find_client('joe donnelly');
if (joe) {
    console.log('and we found him');
}
else {
    console.log('and we did not find him');
}

console.log('looking for domino the cat');
var domino = find_animal('domino');
if (domino) {
    console.log ('and we found a pet named ' + domino.name);
}
else {
    console.log('and we did not find him');
}

console.log('giving domino a toy');
console.log('domino currently has ' + find_animal('domino').toys.length + ' toys');
give_toy_to_animal('domino', 'paper bag');
console.log('now he has ' + find_animal('domino').toys.length);



