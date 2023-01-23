# Ruby Racer

JANCorp has the next best idea. We want to build an application that tracks racers and the races they've accomplished. Before we can get started on our web app we want to see if what the models would look like in Ruby!


## How to do this assignment

1. In the `ruby_racer` folder, run `bundle install` to make sure you have the right gems installed
2. Run `rspec` to run your tests. They should all fail.
3. Start with the `Race` tests / class (see steps below)
4. Then do the `Racer` tests / class (see steps below)

For each individual test:

1. Read the error message.
2. Make the smallest change in your code to fix the error.
3. Run the test.
4. Repeat 1 - 3 until the test passes
5. Move to the next test.

## Bonus!

Try writing the tests yourself:
```
$ rm -rf spec
```

## Specs
### Race Spec
- A race has a name
- A race has a type(eg, "foot", "bike" "car")
- A race has a distance(integer in kilometers)
- A race has kilometer times(array of integers in seconds for each kilometer)
- A race can get its total time(returns total time in seconds)
- A race can get its slowest km run(return an integer in seconds for which ever kilometer took the longest)
- A race can get its quickest km run(return an integer in seconds for which ever kilometer took the shortest)

### Bonus Race Specs
- A race can get its average speed for the race rounded to 2 decimal places in meters per minute
- A race can get human readable formats for times(an array of strings following the following format `"2 minute(s) 43 second(s)"` for an integer value of `163`)

### Racer Spec
- A racer has a name
- A racer can have races (but can not set races directly)
- A racer can add a race
- A racer can find the best race of a given race type and distance

### Bonus Racer Specs
- A racer can find the best average speed in meters per minute of a given race type and distance rounded to two decimal places
- A racer can find the fastest time for km given a race type

> The bonus specs are commented out, if you'd like to accomplish these make sure you comment them back in.

### Super Bonus

Create a command line interface where users can track their races, add/create new races.

### Super Mega Bonus

Persist data using file i/o
