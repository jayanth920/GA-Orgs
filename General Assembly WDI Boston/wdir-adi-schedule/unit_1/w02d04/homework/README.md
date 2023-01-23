---
Title: Creating Classes and A Daring Donut Adventure <br>
Type: Homework<br>
Duration: "3:00 - 4:00"<br>
Creator:WDI-Archer, WDIR-R2D2, WDIR-Matrix<br>
    Modified by: Kristyn Bryan, Karolin Rafalski, Jerrica Bobadilla<br>
Competencies: Practice creating objects, object methods, object classes, and inheriting from a parent class <br>
Prerequisites: Objects <br>
---

## Setup
1. Make a file inside your `homework` folder for today called `objects.js`.<br>
2. Remember to test each of your answers!

<hr>


1. Create a class for a Protagonist
    - attributes:
        - name - set name from parameter in constructor method
        - age - initially 0
        - height - initially 0
        - weight - initially 0
        - mood - integer starting at 0 initially
        - hamsters - empty array initially
        - bankAccount - initially set to 0
    - methods:
        - getName() - returns name
        - getAge() - returns age
        - getWeight() - returns weight
        - greet() - logs a message with person's name
        - eat() - increment weight, increment mood
        - exercise() - decrement weight
        - ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
        - buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
        
<hr>
&#x1F534; Commit: <br>
"Created Protagonist Class"
<hr>

## Creating a story
Feel free to update or add methods to automate some of these tasks.

1. Instantiate a new Protagonist named Timmy
1. Age Timmy five years
1. At this point Timmy's a little bummed.  As a precocious child, he feels he's "seen it all" already.  Have him eat five times.
1. Now Timmy's a little heavier than he wants to be.  Kindergarten's coming up and he wants to look good.  Have him exercise five times
1. Age Timmy 9 years
1. Create a hamster named "Gus"
1. Set Gus's owner to the string "Timmy"
1. Have Timmy "buy" Gus
1. Age Timmy 15 years
1. Have Timmy eat twice
1. Have Timmy exercise twice

<hr>
&#x1F534; Commit: <br>
"Created the story"
<hr>

# Daring Adventure!

## Refresher on running JavaScript in the browser

For this section of the homework, you will be running it through your browser. In case you need a refresher on how to do so, refer back to the [interactivity](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Adi/blob/master/unit_1/w01d05/instructor_notes/interactivity.md) notes! 

## Setup

1. Inside your `homework` folder, created a folder called `donut_adventure`
2. Navigate inside the `donut_adventure` folder and create an `index.html` and an `adventure.js` file.
3. Connect the files and write your code in the `adventure.js` file. Confirm that you can see your logs in the browser developer tools console.


## Let's go on an adventure!

![dancing donut](https://media.giphy.com/media/ToMjGpPgn8mV9iUOOw8/giphy.gif)

> The Adventure of Dougie the Donut on the Streets of NYC.

> Dougie is a funky fresh donut who has decided to walk his way from the Flat Iron District to Times Square where he wants to show off his sweet moves. Along the way, Dougie is approached by his arch nemesis Pizza Rat. Sometimes they fight, sometimes they just talk smack at each other. Anyway that it goes, let's try to get Dougie safely to Times Square!

For this section of the homework, you'll be making two objects that will interact. First we will create a Hero class, then an Enemy class, and instantiate our two objects from those classes.

## Hero:

Let's create our Hero class!

### Attributes:
- name: set name from parameter in constructor method
- health: initially 100
- weapons: use the following object 
    ```
    {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    ```
- catchPhrases: use the following array 
    ``` 
    ['i\'m fresher than day old pizza', 
     'you can\'t count my calories']
    ```
    
### Methods:
- talkSass: logs one of his catchphrases randomly
- announceHealth: logs his current health
- fight: for now,  logs `'i\'m ready to rumble'`

Now, using this Hero class, create an instance of our hero Dougie the donut.


<hr>
&#x1F534; Commit - Created Dougie
<hr>

## Enemy:

Now let's create our Enemy class!

### Attributes:
- name: set name from parameter in constructor method
- health: initially 100
- weapons: use the following object 
    ```
    {
        pepperoniStars: 5,
        cheeseGrease: 10    
    }
    ```
- catchPhrases: 
    ```
    ['i\'m youtube famous',
    'i\'m more dangerous than an uncovered sewer']
    ```
    
### Methods:
- talkSmack: logs one of his catchphrases randomly
- announceHealth: logs his current health
- fight: for now, logs `i\'m gonna flatten you like a slice of pepperoni!`

Now, using this Enemy class, create an instance of the enemy Pizza Rat.

![pizza rat](https://i.imgur.com/PCI8ZWP.png)

<hr>
&#x1F534; Commit - Created Pizza Rat
<hr>

## Walking down the street

Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!
   
1. Have Dougie `talkSass` 
1. Have Pizza Rat `talkSmack`
1. Have Dougie `announceHealth`
1. Have Pizza Rat `announceHealth`
   
## Fight!

Things have escalated between Dougie and Pizza Rat! 

1. Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
1. Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. `dougie.fight(pizzaRat)`)
1. Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health. 
    - Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
    - Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')

Now, they can fight!

1. Have Pizza Rat `fight` Dougie
1. Have Dougie `fight` Pizza Rat
1. Have Pizza Rat and Dougie both `announceHealth` to make sure their health has decreased! 

<hr>
&#x1F534; Commit - Dougie and Pizza Rat fought
<hr>

# Hungry for More?
1. Make it into a game with an ending, until someone has 0 health left.

1. Randomize the weapon choice in the fight method.

1. Change to alert and prompts instead of using the console.

1. Expand this to your heart's content! Sky is the limit!

1. Finish your labs!

<hr>
&#x1F534; Commit - it's time for you to decide what to write for your commits!
<hr>
