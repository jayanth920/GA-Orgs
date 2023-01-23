## Helpful Diagrams

### Ruby Method Lookup Chain
![Ruby Method Lookup Chain](https://git.generalassemb.ly/storage/user/3667/files/54649168-93c6-11e7-8aaf-c41c754a3da0)

### Ruby Example

```ruby
class Mammal
  attr_reader :number_of_feet

  def initialize(number_of_feet)
    @number_of_feet = number_of_feet
  end
end

basic_mammal = Mammal.new(4)

basic_mammal.number_of_feet

class Dog < Mammal

  def bark
    puts "woof"
  end

  def bite
    puts "CHOMP"
  end

end

fido = Dog.new(4)

fido.number_of_feet
fido.bark()
```

# JavaScript section

We pretty much removed this section from the lesson where we would draw the
inheritance chain for javascript. Leaving these notes in here for now in case
we wnat to move them into another lesson.

### Javascript Method Lookup Chain
![Javascript Method Lookup
Chain](https://git.generalassemb.ly/storage/user/5692/files/7dc7de4c-6267-11e7-849a-fa21486910a0)

### Javascript Example

```javascript
const House = function (color) {
  this.color = color
}

House.prototype.whichColor = function () {
  return this.color
}

const myHouse = new House('green')

myHouse.whichColor()

const BlueHouse = function () {
}

BlueHouse.prototype = new House('blue')

myBlueHouse = new BlueHouse()

myBlueHouse.whichColor()
```
