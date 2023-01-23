[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby Hash

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `bundle install`.

## Objectives

By the end of this, developers should be able to:

- Create a Ruby Hash using both the literal `{}` and `new` constructors.
- Access and manipulate values in a Ruby Hash using specified keys.
- Obtain an Array of keys from a Ruby Hash.
- Explain why Symbols are preferred over Strings as keys in a Ruby Hash.

## Introduction

In Ruby, "A Hash is a dictionary-like collection of unique keys and their
values". In sharp contrast to JavaScript, [Ruby Hashes](http://ruby-doc.org/core-2.5.0/Hash.html)
are not the most general object in the language, but are instances of a
specialized class for key/value storage.

## Ruby Symbols

A [Symbol](http://ruby-doc.org/core-2.5.0/Symbol.html) is a sequence of
characters that is stored, at most, once in any instance of the Ruby interpreter.

In Ruby, strings are compared a character at a time, but symbols are compared
by `object_id`.  This makes comparing symbols fast and therefore much more
performant than strings when used as keys in a `Hash`.

### Demo: Test Equivalency

Let's quickly look at how Ruby compares Strings vs how it compares Symbols.

```rb
'bob'.equal? 'bob'
# => false

'bob' == 'bob'
# => true

'bob'.object_id == 'bob'.object_id
# => false

:bob.equal? :bob
# => true

:bob == :bob
# => true

:bob.object_id == :bob.object_id
# => true
```

Remember that everything is an object in Ruby, so everything has its own
`object_id`. Each string of `'bob'` gets a different `object_id`, but the
symbol `:bob` will always have the same `object_id`.

## Creating Ruby Hashes

Let's look at different ways to create a Hash and then add some key value pairs
to it.

### Demo: Hash Creation

```rb
apartment = {}
# => {}

apartment = Hash.new
# => {}

apartment = Hash.new('')
# => {}

apartment[:address]
# => ""

apartment[:address] = { street: '255 Long Road', city: 'Awesomeville' }
# => {:street=>"255 Long Road", :city=>"Awesomeville"}

apartment[:bedrooms] = 3
# => 3

priced_apartment = apartment.merge(rent: 1000)
# => {:address=>{:street=>"255 Long Road", :city=>"Awesomeville"}, :bedrooms=>3, :rent=>1000}
```

Picking sensible defaults may not always be easy.

### Code Along: Hash::new

Let's use the different forms of
[Hash::new](http://ruby-doc.org/core-2.5.0/Hash.html#method-c-new) to create
some hashes in `lib/code_along.rb`.

### Lab: Hash Literal

In [lib/lab.rb](lib/lab.rb), assign a hash using the literal syntax to the
variable `apartment`. Then, assign the keys `:sq_ft` and `:pets_allowed`,
each with a type-appropriate value of your choice. Finally, assign a default
value of `[]` to the hash and make sure that accessing non-existing keys return
the default value.

## Assigning and Accessing Elements in a Ruby Hash

### Demo: Accessing, Modifying, and Deleting

```rb
priced_apartment[:occupants] = []
# => []

lee = { name: 'Lee', age: 24, dog: 'Fluffy' }
# => {:name=>"Lee", :age=>24, :dog=>"Fluffy"}

adrian = { name: 'Adrian', age: 25, cat: 'Scratchy' }
# => {:name=>"Adrian", :age=>25, :cat=>"Scratchy"}

priced_apartment[:occupants].push(lee, adrian)
# => [{:name=>"Lee", :age=>24, :dog=>"Fluffy"},
# {:name=>"Adrian", :age=>25, :cat=>"Scratchy"}]

priced_apartment[:occupants][1].delete(:cat)
# => "Scratchy"

priced_apartment[:rent] += 150
# => 1150
```

### Lab: Appending

Create an `:occupants` key with the value of `[]` to the `apartment` hash in
[lib/lab.rb](lib/lab.rb). Add roommate Bo to `:occupants`. Append one or more
properties of your choosing to the roommate hash, such as `:job` or
`:education`.

### Demo: Hash Keys

To get an Array of the keys that have been set in a hash, use `Hash#keys`.

```rb
priced_apartment.keys
# => [:address, :bedrooms, :occupants, :rent]
```

### Lab: Hash.new Initialized With Default

What if we wanted to instantiate our new hash with this default right off the
bat? Checkout the Ruby docs on [new hashes with default blocks](http://ruby-doc.org/core-2.5.0/Hash.html#new-method).

Then, in `lib/lab.rb` initialize a new hash using `Hash.new` with a block that
sets the default value (without using `.default`) of all keys to the string
`"Cool, <keyname> does NOW exist"`

### Demo: Hash as Final Argument to Method

If the last argument to a method is a hash, you may omit the curly braces.

```rb
[].push 4, 'hi', first_name: 'sam', last_name: 'allen'
# => [4, "hi", {:first_name=>"sam", :last_name=>"allen"}]
```

### Lab: FizzBuzz with Hashes

Time to recreate the classic FizzBuzz problem with hashes!

Inside `lib/fizzbuzz.rb`, create a hash containing keys `"fizz"`, `"buzz"`,
`"fizzbuzz"`, and `"other"`, each with arrays as values. As you iterate through
all the numbers from 1 to `max_num`, add each number to one of the arrays
mentioned above; numbers divisible by 3 *only* should go into the `"fizz"`
array, numbers divisible by 5 *only* should go into the ``"buzz"`` array,
numbers divisible by both should go into the `"fizzbuzz"` array, and numbers
divisible by neither should go into the `"other"` array. Finally, once you're
done, return the hash as the result of `fizzbuzz`.

Run your code from the console using `ruby lib/fizzbuzz.rb`.

This time, you can verify your code is working by running

```sh
bin/rspec spec/fizzbuzz_hash_spec.rb
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
