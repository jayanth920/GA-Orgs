[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tamagotchi Challenge

## Prerequisites

- [js-object-prototypes](https://git.generalassemb.ly/ga-wdi-boston/js-objects-prototypes)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). Run your application from [`bin/main.js`](bin/main.js). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements: Build a Tamagotchi

What is a tamagotchi? According to [wikipedia](https://en.wikipedia.org/wiki/Tamagotchi), the name is a portmanteau combining the Japanese word tamago (たまご), which means "egg", and the English word "watch". Most Tamagotchi characters' names end in tchi (っち) in Japanese, with few exceptions.


### Creating your tamagotchi

![howtoplay](https://git.generalassemb.ly/storage/user/5694/files/c2d77b64-2125-11e8-9dec-ca5c95a1de17)

#### Properties

A tamagotchi has a few properties:
```js
/*
- name
- weight
- age
- birthday
- description
- hungerLevel
- happinessLevel
- attentionLevel
- lifeStage // Egg, Baby, Child, Teen, and Adult
/*
```

Instantiate a new instance of a Tamagotchi by passing in an object to the `new Tamagotchi()` constructor function:
```js
new Tamagotchi(props) 
```
`props` contains key / value pairs for the properties you want to initialize your tamagotchi with, like name.

Some properties will be calculated, which means the program should provide an initial value for you, like age, birthday, the various levels, and the lifeStage.

#### States

A tamagotchi has a few states, which can be derived from other properties. These will not be a part of your constructor function, but will rely on some of the values to determine the state. States should be booleans:
```js
/*
- isHungry
- wantsToPlay
- isHappy
- needsAttention
*/
```

#### Behaviours
Your tamagotchi will have a few behaviors:
```js

hatch() {
  /* your tamagotchi is born! This is a good time to set the birthday property. */
}

eat() {
/* feeding should satisfy hunger, depending on what you feed it, and may increase weight
 grass, meat, tofu, bread, candy, etc…
*/
}

speak() {
 /* what needs does your tamagotchi have? */
}

play() {
 /* playing with your tamagotchi should increase happiness, satisfy need for attention, and may decrease weight */
}
```

#### Usage

Assuming you have a tamagotchi that takes a name argument:
```js
tamagotchi = new Tamagotchi({name: 'Mesutchi'}) // instantiate your tamagotchi. Names usually end in tchi (っち)
tamagotchi.hatch() // Hatch your tamagotchi. This could happen automatically after some period of time.
tamagotchi.age // today's date minus birthday, in human readable format
tamagotchi.birthday // date that the tamagotchi hatches on
tamagotchi.weight // starts at 1, may increase or decrease based on certain actions
tamagotchi.description // 'A <lifeStage> tamagotchi named <name> born on <birthday> weighing <weight>'
tamagotchi.speak() // 'Mesutchi is <some state>'
```

How you implement your tamagotchi is up to you. It likely will be different at some point than someone else's implementation. You might add more key / value pairs to the argument for the constructor function to hard code more values. Your behaviors may change properties in a different way.

## Bonus:
Continue to implement a real tamagotchi, adding the following properties and methods:

Properties:
```js
/*
- disciplineLevel
- isDisciplined
- needsBathroom
- itPottyTrained
- isSick
- sleeping
*/
```

Methods:
```js

sleep()

wake()

scold() {
 /* fills discipline level, reduces happiness level */
}

useBathroom()

view() {
 /* displays image of the tamagotchi */
}

```

## Bonus #2

Animate your tamagotchi within the terminal or within the browser
![tamagotchi-poo-80574](https://git.generalassemb.ly/storage/user/5694/files/c3e8493e-2125-11e8-9242-a1a242943f59)

What else can your tamagotchi do?

## Additional Links and References
- [MDN ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
