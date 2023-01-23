![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# RSpec Assessment

## Instructions
* Fork and clone this repo.
* Run `bundle`.
* Open `math_spec.rb`.
* Write tests for the methods inside of `lib/math.rb`.
* For every test you write, run `rspec` to run your tests.
* For every method, write one example group (`it` block) with 3 different expectations. 
  * The expectations should be very similar. Your expectations should test that passing in particular inputs results in expected output.
  * The expectations should differ by passing in different parameters for each one.
* You have 25 minutes.

## Example

Suppose we had the following method:

```ruby
def sum(*args)
  args.reduce(:+)
end
```
A successful test would check that:

1. `sum(2,3)` returns `5`
1. `sum(5,6)` returns `11`
1. `sum(-10,32)` returns `22`

