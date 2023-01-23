# Ruby (Hashes) vs. JavaScript (Dictionaries): Study

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

## Required Readings

- Ruby-Doc.org
  - [Hash#[]](http://ruby-doc.org/core-2.5.0/Hash.html#method-i-5B-5D)
  - [Hash#delete](http://ruby-doc.org/core-2.5.0/Hash.html#method-i-delete)
- [Ruby Programming / Syntax / Literals - Interpolation](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Literals#Interpolation)
- Mozilla Developer Network
  - [Working with objects - (Deleting properties)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Deleting_properties)
  - [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
  - [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Recommended Readings

- Ruby-Doc.org
  - [Class: Hash](http://ruby-doc.org/core-2.5.0/Hash.html)
  - [Class: Symbol](http://ruby-doc.org/core-2.5.0/Symbol.html)
- Mozilla Developer Network
  - [Object - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - [Working with objects - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

## Ruby

### Creating a Hash

Create a hash named `dale` with the following key-value pairs. The keys should
be symbols.

| Key | Value |
| --- | --- |
| last_name | 'gribble' |
| first_name | 'dale' |
| occupation | 'exterminator' |

```ruby
# your answer here
```

### Adding Hash Keys

Add a key named `middle_name` to `dale` with the string `"Alvin"` as the value.
Add another key, `hobbies`, to `dale` with an array as the value. The array
should contain at least two strings of your choice. The keys should be symbols.

```ruby
#your answer here
```

### Removing Hash Keys

Remove the `middle_name` key from `dale`.

```ruby
# your answer here
```

### Modifying Hash Values

Modify `dale` so that the value of the key `last_name` is `"Gribble"` and the
value of the key `first_name` is `"Dale"`.

```ruby
# your answer here
```

### Hash Methods

Using Ruby's Hash methods, set a variable named `dale_keys` equal to all of
`dale`'s actual keys. Additionally, set a variable named `dale_values` equal to
all of `dale`'s values.'

```ruby
# your answer here
```

### Accessing Hash Properties and Values

Using Hash methods and string interpolation, create a string using
`dale` that equals `"My name is Dale Gribble and I'm an exterminator that enjoys
_____."`. The blank should be filled in with one of the hobbies that was added previously.

```ruby
# your answer here
```

----

## JavaScript

### Creating a Dictionary

Create a dictionary named `hank` with the following key-value
pairs.

| Key | Value |
| --- | --- |
| lastName | 'hill' |
| firstName | 'hank' |
| occupation | 'propane and propane accessories salesman' |

```javascript
// your answer here
```

### Adding Dictionary Properties

Add a property named `middleName` to `hank` with the string `"Rutherford"` as
the value. Add another property, `hobbies`, to `hank` with an array as the
value. The array should contain at least two strings of your choice.

```javascript
// your answer here
```

### Removing Dictionary Properties

Remove the `middleName` property from `hank`.

```javascript
// your answer here
```

### Modifying Dictionary Values

Modify `hank` so that the value of the key `lastName` is `"Hill"` and the value
of the key `firstName` is `"Hank"`.

```javascript
// your answer here
```

### Dictionary Methods

Using JavaScript's Array methods, set a variable named `hankKeys` that is equal
to all of `hank`'s keys. Additionally, set a variable named `hankValues` that is
equal to all of `hanks`'s values.'

```javascript
// your answer here
```

### Accessing Dictionary Properties and Values

Using provided methods and template literals, create a string
using `hank` that equals `"My name is Hank Hill and I'm a propane and propane
accesories salesman that enjoys ____."`. The blank should be filled in by one of
the hobbies you added earlier.

```javascript
// your answer here
```
