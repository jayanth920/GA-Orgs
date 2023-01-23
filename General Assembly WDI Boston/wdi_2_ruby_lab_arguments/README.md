# Ruby Arguments Lab

The goal of this lab is to provide practice creating methods with more complex sets of method arguments including:

- Default
- Splat
- Options hash

## Exercise

#### Create the following files in their appropriate locations
* `person.rb`
* `person_spec.rb`
* `pet.rb`
* `pet_spec.rb`
* `polygon.rb`
* `polygon_spec.rb`

Write appropriate Rspec tests using TDD for the entirety of this exercise. Test first, code second. All of your tests should be passing at the end of this.

### Pets

You should be able to create a new Pet. The pet must be supplied a name. They have a randomly set default 'species' of "cat", "dog" or "bunny wearing backpack", which can be overridden with an argument. Optionally, they can be given a number of claws, number of teeth, number of backpacks. 

### People

You should be able to create a new Person. The person must be supplied a name. The person also has attributes of:

* age (days)
* weight (kg)
* height (cm)
* eye_color
* hair_color
* pets (array)

If no age is provided, then their age should be 0 days. 

If no weight is provided, the weight should be randomly assigned between 60-100kg

If no height is provided, the height should be randomly assigned between 150-200cm

If no eye or hair colors are provided, don't do anything with them.

Write a method that returns their weight as [stones](http://en.wikipedia.org/wiki/Stone_(unit)). All properties should be able to be get/set.

Write a method that will allow them to greet any number of other people objects (not strings) with a greeting (default value, "Hi").

### Polygon

You should be able to create a new [Polygon](http://en.wikipedia.org/wiki/Polygon). The Polygon can have any number of sides (more than 2). These are all simple or non-intersecting polygons. The arguments to the polygon are the lengths of its sides. 

You should have methods to return: 

- sum_of_interior_angles
- number_of_corners
- degrees_of_freedom
- area

#### Bonus 1
Can you determine the name of some polygons from the number or length of their sides? Call the function `name`

#### Bonus 2
Can you calculate the centroid of the polygon? Call the function `centroid`
