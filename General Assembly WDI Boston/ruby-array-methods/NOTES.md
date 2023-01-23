### Way to frame array methods in Ruby:

Remember when we had these javascript array methods that were expecting a
callback with certain arguments? This is the same thing we are doing here.

Write on the board a Javascript map method vs. a Ruby map method, and say what
they are expecting.

### Block vs. Method in Ruby:

"Ruby blocks are not functions or methods. Unlike functions, they can't stand
alone. A block is a chunk of code that can be invoked kind of like a function,
but not quite like one: a block only appears adjacent to a function call such
as .each"

You can add a .length (or similar methods) after a multi-line block OR an
inline block. For example:

```
people_named_nick = people.select do |person|
  person.given == 'Nick'
end.length
```

#### OR

```
people_named_nick = people.select { |person| person.given == 'Nick' }.length
```

Show them anonymous block vs. named block, for example:

```
people_named_nick = people.select do |person|
  person.given == 'Nick'
end.length
```

#### Is the same as

```
def isNamedNick(person)
  person.given == 'Nick'
end

people_named_nick = people.select { |person| isNamedNick(person) }.length
```

## Fibonacci Lab

Per Issue [#23](https://git.generalassemb.ly/ga-wdi-boston/ruby-array-methods/issues/23)

Into the lab if devs are struggling with how to accomplish these tasks, point them in the direction of the `select` method. We use this in the next code along, but they have not seen it yet.

### Set Operations

When showing them `|`, also show them what it looks like when we do `+` to illustrate the difference (being that `|` does not include duplicate values, whereas `+` does).

So `union = developers | consultants` vs. `concat = developers + consultants`

## Useful Diagrams

From Issue #32 ![Iteration Diagram](https://git.generalassemb.ly/storage/user/3667/files/280ede68-9487-11e7-8179-20976e1cdd04)
