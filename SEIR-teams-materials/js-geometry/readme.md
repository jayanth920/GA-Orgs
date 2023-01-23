# Geometry

> **NOTE:** You can ignore the `module is not defined` error you see in the console when opening `index.html` in the browser. You should still be able to test your code.

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Fulfill the listed requirements, and commit after solving each prompt!
4. Starter code is available in geom.js.
5. You are required to turn in your submission by making a pull request on the original repository.

Starter code is available in [`geom.js`](geom.js). The JS file is already linked to your HTML. You are required to turn in your submission by making a pull request on the original repository.

Unless otherwise specified on the calendar or by an instructor, homework is due the next morning by 10:00am EST.

# Requirements

A series of prompts are located below. Complete each prompt in your `geom.js` file and **commit after each one!** 

### Tips

- Don't forget to test your code as you go. 
- Open the index.html file in Google Chrome to view your console.log() messages.
 
## Rectangle

Define a `Rectangle` class. Its constructor should take a `length` and `width` as arguments.

Augment the class with the following methods...
* `isSquare` - returns true if the rectangle is a square.

> Hint: Squares have sides of equal length.

* `area` - calculates the area of the rectangle.

> Hint: Area = length * width

* `perimeter` - calculates the perimeter of the rectangle.

> Hint: Calculate the perimeter by adding all of the sides together.

Create a few rectangles with different lengths and widths and test all your methods on them.

## Triangle

Define a `Triangle` class. Its constructor should take three sides -- `sideA` `sideB` and `sideC` -- as arguments.

Augment the class with the following methods...
* `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).

> Hint: Equilateral triangles have sides of the same length.

* `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).

> Hint: Isosceles triangles have two equal sides.

* `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).

> Hint: A triangle has three sides represented by `a`, `b` and `c`, as well as a semi-perimeter, represented by `s`. `s = (a + b + c)/2` and Area is equal to the square root of `s * (s - a) * (s - b) * (s - c)`.

* `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).

> Hint: Obtuse triangles have one side that is longer in length than both of the other two sides.

Create a few rectangles with different lengths and widths and test all your methods on them.

## LineSegment

Define a `LineSegment` class. Its constructor should take two pairs of coordinates -- `x1` `y1` `x2` `y2` -- as arguments.

Augment the class with the following method...
* `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).

> Hint: Calculate the line segment by taking the square root of `((x2 - x1) ** 2) + ((y2 - y1) ** 2)`.

Create a few line segments with different coordinates and use your length method on them.

## Shape

Define a `Shape` class. It should have the number of sides and a color associated with it. Make the other classes inherit from it.

## Bonus (Not Required)

- If you didn't finish the afternoon lab, [try finishing it up](https://git.generalassemb.ly/seir-129/js-gladiator)

- Still want more practice with constructors and classes? Try [this bonus assignment](bonus.md)

- Interested in looking into TDD (test driven development)? Consider testing this assignment with [Jasmine](https://github.com/ga-wdi-lessons/js-jasmine)!
