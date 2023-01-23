# RSpec Geometry

Using test-driven development with [RSpec](https://relishapp.com/rspec), we'll create the following classes:

### `Rectangle`

* Has a length and a width
* Has methods that return its perimeter and area

### `Circle`

* Has a radius
* Has methods that return its circumference and area

### `Triangle`

* Has three side lengths
* Has methods that return its perimeter and area
* Has a method that determines whether the triangle is valid (hint: use the Inequality Theorem)

**Bonus:** Prevent invalid triangles from being created in the first place by raising an `ArgumentError`. Be sure to do this in a test-driven way by changing your tests *first* to describe the new behavior before changing any code. The method that checks for validity can now be private &ndash; why is this?

**Bonus:** Implement similar validity checks for Rectangles and Circles using a private method.
