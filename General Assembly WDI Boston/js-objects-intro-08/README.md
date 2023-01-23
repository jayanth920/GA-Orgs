![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Objectives
- Analyze a situation and draw up a list of likely objects (with properties and behaviors).
- Create an Object Literal that contains properties and methods.

## Prerequisites
- Chapters 5 and 6 of Fundamentals
- Defining and calling functions
- Dot syntax for JavaScript objects

## Overview :: Objects as Custom Abstractions

When a scientist wants to be able to describe a complex system, they usually can't capture all the details - there's just too much going on. They need to simplify, reduce the problem down to its core, essential features, whittling away anything that's not actually relevant. In essence, they take the big complicated problem that they started with, and replace it with a smaller, more manageable problem. This process might be referred to as _abstraction_ - hiding the true complexity of the situation, and replacing it with something that, as Einstein once put it, is "...as simple as possible, but no simpler."

Abstraction is an enormously important tool for a programmer. The problems that he or she faces will often be very large and complex, and it can be tough to even figure out where to begin. By abstracting away the problem to its purest, most essential elements, a programmer can build a simplified representation of some piece of the puzzle - a model. From there, the programmer can continue add complexity, bit by bit, to capture larger and larger aspects of the problem.

Along with functions, one of the most important tools for abstraction in JavaScript is the object. Since most things in the real world (say, a car) can be described as combinations of attributes (make, model, year) and behaviors (drive, turn, brake, park), JavaScript objects (which can represent both of those things) can be used as simple models, representing stripped-down abstractions of real-world things.

## Thinking With Objects

Let's take a look at a specific example : a laptop. Suppose that we wanted to represent a laptop in our program somehow. What are the salient features of a laptop, the ones that are most important to represent?

As it turns out, the features of our object that are most important depend very strongly on what our program will do and how it will be used. If our program is about selling laptops, we might be interested in things like price, brand, amount of RAM, disc space, and processor speed. However, if our program is being used in a factory, for the purpose of tracking laptops as they're being manufactured, things like price are totally irrelevant; instead, there are probably a number of other features of a laptop that are more important to model - for instance, 'which production line it was made on?'; 'who oversaw its construction?', and 'at what stage of completion is it, currently?'

### Lab :: Thinking With Objects

Break into pairs; as a group, pick one of the following examples, and individually brainstorm about a set of abstractions that might reasonably be used to represent each of the following examples. Once you're done, share your thoughts with your partner.

- Reporting software that analyzes the performance of different members of a sales team.

- A computer game that allows a user to take the role of a unit commander or general and simulates a battle based on his or her commands.

- A hotel website that allows users to search for and manage reservations, which includes making changes to the arrival date and room type.

- An ecommerce platform that allows users to purchase products and pay for them by credit card.

- A platform for watching training videos (e.g. as part of a recertification process) and answering questions about them.

- A recipe website; when users change the number of dinner guests, the site adjusts each recipes accordingly.


## Objects - Properties and Methods

The way that JavaScript objects represent the attributes and behaviors of our chosen abstractions are through **properties** and **methods**. Properties are something you've already seen - keys, which correspond to some value. For instance, if we had an object representing a crayon, and it had a 'color', we might represent that like so:

```javascript
{
  color: 'blue'
}
```
> We'd also probably want to put it in a variable so that we can refer to it later.

Methods are just a special type of property - specifically, properties whose values are functions. Because they are functions, methods can execute code whenever they get called. This is a very effective proxy for something's behavior.

Let's consider how we might represent a TV using a JavaScript object. For this example, let's assume that we're only concerned with using the TV, not selling it or anything like that. When we interact with a TV, there's a short list of things that we typically do:
- turn it on/off (toggle power)
- increase or decrease the volume
- increase or decrease the channel
In addition, there are a number of other features of the TV that might interest us:
- is it a plasma/LCD/LED TV?
- what's the resolution?
- how much power does it consume?

If we wanted to represent all of these things in a JavaScript Object, and keep it in a variable called `tv`, we might write something like this:

```javascript

var tv = {
    type: 'plasma',
    resolution: '1080i',
    powerConsumption: '150W',
    togglePower: function() { /* Some code here. */ },
    changeVolume: function() { /* Some code here. */ },
    changeChannel: function() { /* Some code here. */ },
    goToChannel: function(channelNumber) { /* Some code here. */ }
};

```

To access any of those properties or methods, we can write (using dot syntax):

```javascript
  tv.type
    => 'plasma'
  tv.togglePower
    => [function]
  tv.togglePower()
    => ...
```

### Lab :: Objects - Properties and Methods

Let's revisit one of the examples from the previous lab - say, the computer game. Let's suppose that, in our game, you control a variety of different types of 'fighter' units.

Infantry
An 'infanty' unit has:
 - a 'health' of 2
 - a 'speed' of 2

Artillery
An 'artillery' unit has:
- a 'health' of 2
- a 'speed' of 1

Cavalry
An 'cavalry' unit has:
- a 'health' of 1
- a 'speed' of 3

Each of these units also has a method called 'attack' which takes another character as an argument. The 'attack' method should print the text "HIT" and force the defender to deduct some amount ('strength') from their 'health'.

The strength values for each unit are:
- infantry : 1
- artillery : 3
- cavalry : 2

Let's write the code to represent this aspect of the game! Go to `lib/battlegame.js` and write your code there.

Bonus:
Write a standalone function (or a method on an object - up to you) called 'battle' which takes two units as arguments. 'battle' should pit the two characters against each other until one of them dies ('health' falls to 0 or below). The character with the higher 'speed' value goes first, but each unit has only a 50% chance of successfully attacking the other. Once one of the units dies, the function should return the surviving unit.

## Summary :: Objects as Custom Abstractions

Now you're thinking with objects!

Picking the right set of abstractions can make your problem much simpler; however, picking the wrong set can send you down a rabbit hole, so be thoughtful in what you choose. Try running your design by someone else and see what they think!
