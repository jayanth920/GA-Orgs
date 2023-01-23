![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# SpecTunes

## Objectives

By the end of this, students should be able to:

- Take plain-english business requirements and translate them into RSpec tests
- Write an RSpec test for the Track class
- Write an RSpec test for the Album class

## Instructions

* Fork and clone.
* Run `bundle` / `bundle install` (they're the same)
* Run `rspec --init`
* Create this file: `spec/track_spec.rb`
* Create this file: `spec/album_spec.rb`
* Create this file: `lib/track.rb`
* Create this file: `lib/album.rb`
* Write your rspec tests in the spec files. 
* Write the code to make your tests pass in the lib directory

### `Track`

* Has a title, list of artists (order doesn't matter), duration, and price
* Has a "set discount" method that reduces the price by a given percentage
* Has a "reset discount" method that restores the price to its original value

**Note:** The "set discount" method should not *return* a discounted price &ndash; it should actually *change* the price of the track. If I create a track with price `1.0` and I call `track.set_discount(0.2)`, subsequent calls to `track.price` should now return `0.8`. If I apply another discount, it should *replace* the previous discount rather than stacking onto it.

### `Album`

* Has a title and a list of `Track` objects (order matters)
* Has a duration (combined duration of all tracks)
* Has a price (combined price of all tracks)
* Has a list of artists (combined artists of all tracks in alphabetical order &ndash; *no duplicates*)
* Can determine whether the album is a single (has exactly one track)

### Next Steps

Still using test-driven development, add some data validation to these classes. For instance, I probably shouldn't be able to create an album with no tracks, or set a track's discount greater than 100%. Think of ways someone could abuse your code &ndash; what happens if I try to create a track with the "list of artists" set to `42`? Generally it's appropriate to raise `ArgumentError` when your methods receive invalid data as an argument.
