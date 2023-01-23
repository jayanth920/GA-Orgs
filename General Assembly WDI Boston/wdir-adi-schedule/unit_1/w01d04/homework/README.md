Title: Arrays, Loops, and Conditional Reps <br>
Type: Homework<br>
Duration: "4:00"<br>
Creator: WDI-Funke<br>
    Modified by: Kristyn Bryan, Karolin Rafalski<br>
Competencies: Arrays, Loops, Conditionals <br>
Prerequisites: JavaScript <br>

---
# Homework

Reccommendation: 
- If homework is taking you more than 4 hours to complete:
    - Go to TA hours
    - Get on zoom with a classmate
    - Reach out to the instructional team
    - Don't stress about the Hungry For More section
- If home work is taking you less than 4 hours to complete
    - Work on the Hungry For More section - make the most of your time here and find challenges
    - Help someone who is stuck, teaching is a great way to learn something more in depth
    - Reach out to the instructional team for more challenges/ways to keep growing with your abilities
    
    
# HTML & CSS

Finish watching the following videos on HTML and CSS. You will be working on practicing HTML in your Morning Exercise.

[HTML Intro (tags, content, attributes, semantic HTML](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)](https://www.youtube.com/watch?v=KhbnrDhWDdE&index=2&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[CSS Intro (including css files in HTML, elements)](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[CSS Basics (colors, background, font properties)](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

<hr>

##  JavaScript Setup

1) In your terminal, navigate to to the `homework` folder inside today's folder (`w01d04`).

2) Create a javascript file inside your `homework` folder to record your answers (maybe name it `answers.js`).

3) Keep your answers organized! Included a commented header for each section in your answers file.

4) TEST YOUR WORK! Make sure that your code works
:elephant: `node name_of_your_file.js`.

5) If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later.

6) After each section (even if you're not fully done with it), *add* and *commit* your work.

Please use the commit messages that you see at the end of each section (modify it if you need to). We will see these messages on Github. It will help us to see your progress. If you go back and fix a section, commit again with an updated message.

7) When you are done with your homework, push it to your `origin` (this is your Github) and make an issue on our repo.

Final note: You are not alone! Everyone else in the class is working on this as well. Send Slack messages, make a Zoom channel, or meet with the TA to discuss sticking points.

<hr>

# Reps
![Image of baby doing workout](https://i.imgur.com/VYw1dmD.png)

## Easy Going
1. Write a for loop that will log the numbers 1 through 20.

<hr>
&#x1F534; The commit message should read: <br>
"Easy Going answered"
<hr>

## Get Even
1. Write a for loop that will log only the even numbers in 0 through 200.
>Hint: Think about the increment expression.

<hr>
&#x1F534; The commit message should read: <br>
"Get Even answered"
<hr>

## Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.



<details><summary>Hint 1</summary>
 Make an array of the kitten's talking points
</details>

<details><summary>Hint 2</summary>
 Use bracket notation to access each talking point 
  `kittyTalk[1];`
</details>

<details><summary>Hint 3</summary>
 Rather than hard-coding the array position number set a variable
    
  ``` 
    let meow = 0; 
    kittyTalk[meow]
  ```
    
</details>

<details><summary>Hint 4</summary>
You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)
</details>

<details><summary>Hint 5</summary>
 Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the    Math.random() number so that the range is between 0 and the length of the array 
</details>

<details><summary>Hint 6</summary>
 Then round the number by using another Math method like `Math.floor()` or `Math.ceil()` or `Math.round()`
</details>

![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

<hr>
&#x1F534; The commit message should read: <br>
"Excited Kittens answered"
<hr>

## Fizz Buzz

This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short. 

1. Write a javascript application that logs all numbers from 1 - 100.

2. If a number is divisible by 3 log "Fizz" instead of the number.

3. If a number is divisible by 5 log "Buzz" instead of the number.

4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

<hr>
&#x1F534; The commit message should read: <br>
"Fizz Buzz answered"
<hr>

## Getting to Know You
Use the following arrays to answer the questions below (name,species ,age, hometown):
```
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
```
1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.

2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

3. Give D'Art a second hometown by adding "Hawkins"

4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the `wolfy` array and replace it with "Gameboy".


<hr>
&#x1F534; The commit message should read: <br>
"Getting to Know You answered"
<hr>

## Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

2. Use a `for of loop` (not a typo - try it out! Try a `for of` loop) to call `toUpperCase()` on each of them and print out the result.

<hr>
&#x1F534; The commit message should read: <br>
"Yell at the Ninja Turtles answered"
<hr>




## Multiples of 3 and 5

_Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

:clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:

<hr>
&#x1F534; The commit message should read: <br>
"Commit  - Project Euler Problem 1 answered"
<hr>

## Methods, Revisited

In class, we made an array of our favorite movies:

```js
const favMovies = ["Black Panther", "V for Vendetta" , "Shawshank Redeption" , "Titanic" , "2001 Space Odyssey" , "Jurassic Park" , "Star Wars" , "Anastasia" , "Harry Potter" , "Star Trek" , "Kill Bill" , "X-Men", "Pulp Fiction", "Interstellar" , "Godfather Part 2"];
```

- Console log:  the index of `Anastasia`

- Do the following and console.log the final results (I have included some *thought* questions, you don't have to write out an answer for those marked as such):
    
    1. use the `.sort` method Thought question: what did this do to the array? Did it permanently alter it? 
    1. Use the method `pop`
    1. `push` "Guardians of the Galaxy" 
    1. Reverse the array
    1. Use the `shift` method
    1. `unshift` "Hackers"
    1. `splice` "Titanic" and add "Avatar" (try finding the index of "Titanic", instead of counting it yourself) Thought question: did this permanently alter our array?
    1. `slice` the last half of the array (challenge yourself and try to programatically determine the middle of the array  rather than counting it and hard coding it) - Thought question: did this permanently alter our array? 
    1. store the value of your `slice` in a variable, console.log it - Thought question: what is going on here?
    1. console.log your final results

- After running the above tasks, Console.log the index of "X-Men" 
    -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

- Thought question: that we declared the variable `favMovies` with `const`, and yet, we were allowed to change the array. Weird? Should we have used `let`? 



# Hungry for More?

## Find the Median
- Find the median number in the following `nums` array, then console.log that number.
-  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`

```
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

Expected output:
=> 15
```

<hr>
&#x1F534; The commit message should read: <br>
"Find the Median answered"
<hr>


## Return of the Closets

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

### Alien Attire
1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

### Dress Us Up
1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

<hr>
&#x1F534; The commit message should read: <br>
"Kristyn and Thom have their outfits ready for class - array practice"
<hr>

### Dirty Laundry
Continue looking at the closet arrays:
1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

### Inventory
2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.

<hr>
&#x1F534; The commit message should read: <br>
"I looped through their closets".
<hr>

1. Finish the questions from the morning lab

2. Finish the questions from the afternoon lab

3. Finish the morning exercise

<hr>
&#x1F534; The commit message should read: <br>
"Hungry for More: I tackled..."
<hr>


# Reminder
Remember to submit an issue to our class repository with your work by 10 am Eastern tomorrow morning! Need a reminder on how to submit? Check out the instructions on how to submit homework in our class Wiki (located on our class Github) if you need a reminder.
