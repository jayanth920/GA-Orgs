# Underscore.js

## Learning objectives

* Explain what is underscore
* Describe why we might use underscore
* Use underscore functions and methods to manipulate data collections

## Framing: Intro to Underscore (5 min)

"Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects."
> [Underscore Documentation](http://underscorejs.org/)


### Why would we use Underscore?

Working with data. Any collection of data you can use underscore to manipulate it!

* With underscore, we can transform our arrays, objects, and functions with only one or two lines of code.

* Similar to Ruby Enumerables/Methods


Can we use Underscore with other libraries?

  >Answer: Absolutely! You may want to use it with jQuery.

  * **jQuery**: manipulation of the DOM and contents of webpages

  * **Underscore**: manipulation of data collections

  <!-- Underscore will help us manipulate data that jQuery uses in DOM -->

## Underscore Functions (10 min)

***Let’s look at the example below. What if we wanted to analyze and use these various collections of data for GA's DC campus?***

```js
var gaDC = {
  city: "Washington",
  state: "DC",
  programs: [
    {
      title: "WDI",
      content: "Web Development",
      type: "immersive",
      length: 12,
      cost: 13500,
      courseDates: ["March 14, 2016", "May 23, 2016", "June 27, 2016"]
    },
    {
      title: "UXDI",
      content: "User Experience",
      type: "immersive",
      length: 10,
      cost: 11500,
      courseDates: ["April 11, 2016", "July 22nd, 2016"]
    },
    {
      title: "DSI",
      content: "Data Science",
      type: "immersive",
      length: 12,
      cost: 14500,
      courseDates: ["May 9, 2016", "August 8, 2016", "Nov 7, 2016"]
    }
  ]
};
```

### ```_.each```
>Iterates over a list or collection of elements and returns the list

Example:
Let's iterate over of the programs offered at GA currently

**JavaScript:**

```js
  for(var i = 0; i < gaDC.programs.length; i++){
    var programTitle = gaDC.programs[i].title;
    console.log(programTitle);
  }
```

**Underscore:**

```js
  _.each(gaDC.programs, function(program){
      console.log(program.title);
  });
```

### ```_.pluck ```

>Creates an array of property values. This is useful when displaying or manipulating subsets of data

Example
How could we go about grabbing the titles of all of the courses offered at GA DC? How could we put those titles in an array?

**JavaScript:**

```js
  gaDC.programs.map(function(program){
    return program.title
  });
```

**Underscore:**

```js
  _.pluck(gaDC.programs, "title");
```

### ```_.shuffle```

>Returns a shuffled copy of the list by using a version of Fisher-Yates

Example
```js
var picturesArray = ["img1", "img2", "img3", "img4", "img5", "img6"];
var shuffledPictures = [];
```

**JavaScript:**

```js
var randomIndex = Math.floor(Math.random() * picturesArray.length);
var randomPic = picturesArray[randomIndex]
shuffledPictures.push(randomPic);
```

**Underscore:**

```js
var shuffledPictures = _.shuffle(picturesArray);
```

### ```_.sortBy```

>Returns a sorted copy of a list, ranked in ascending order by the results of running each value through iteratee

```js
  var numberArray = [120, 30, 2, 0, 56, 78, 230, 1, 4];
```
**JavaScript:**

```js
function compare(a,b) {
  return a - b;
}
numberArray.sort(compare);
```
**Underscore:**

```js
  _.sortBy(numberArray)
```

## You-Do: Pokemon_.Underscore Exercise (35 min)

![Pikachu](http://media.giphy.com/media/KdJFsGqetCf9S/giphy.gif)

Let's get practice using underscore!

Instructions:

Fork and Clone this exercise Repo:
https://github.com/ga-wdi-exercises/pokemon_underscore

## Additional Resources:
* [Underscore Documentation](http://underscorejs.org/)
* [Blog Article on Underscore and For loops](http://joelhooks.com/blog/2014/02/06/stop-writing-for-loops-start-using-underscorejs/)
* [JavaScript with Underscorejs](http://singlebrook.com/blog/simplify-your-javascript-with-underscorejs)
