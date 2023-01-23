[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Boggle Challenge

Test for words on a boggle board.

**IMPORTANT:** This challenge is an exercise in *problem solving*. It is
crucial to **read this entire document first** before beginning anything.
We suggest whiteboarding to make sure you understand the problem.

Next, solve `boggle` as simply as possible (don't be clever!). Then, solve
`bigBoggle` and compare it to your `boggle` solution. You might notice
patterns. Finish by make a single solution work for every kind of boggle
presented here.

## Prerequisites

- [js-reference-types](https://git.generalassemb.ly/ga-wdi-boston/js-reference-types)
- Familiarity with the concept of arrays.

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Create and checkout a new branch to work on.
1. Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

Map row/column coordinates onto an array index (i.e. represent a square grid
 using a simple array).  Use this mapping to return (potential) words from
 letters in the grid.

[Boggle](https://en.wikipedia.org/wiki/Boggle) is a word game played with
 letter-dice arrange in a 4X4 tray.

A _tray_ is just an array of length 16 with each element a single letter string.

A _list of coordinate pairs_ is an array with length <= 4 and each element is an
 array of length 2.  The sub-arrays contain two integers >= 0 and <= 3.

Write a function - in `lib/challenge.js` - that takes a **tray** and a **list of
 coordinate pairs** and returns a string representing the concatenation of the
 letters at each of the coordinates.

See `bin/challenge.js` for an example invocation.
Run it with `node bin/challenge.js`.

You should run `grunt nag` before diagnosing any bugs, since it finds some of
 the most common sources of errors.
After `grunt nag` passes, you should run `grunt test` to run the included tests.
Tests will tell you whether of not you've met these requirements.

### Big Boggle challenge

Big Boggle uses a 5X5 tray.

Make the following change in `spec/challenge.spec.js` to enable tests for this
bonus.

```diff
- xdescribe('Big Boggle', () => {
+ describe('Big Boggle', () => {
```

## Further Explanation

If we think of it in terms of a 4 x 4 game board.

```md
d  i  b  t
l  o  a  m
b  c  g  r
u  m  p  s
```

The the coordinate `0, 0` would give us `d`.
The the coordinate `1, 1` would give us `o`.
The the coordinate `2, 2` would give us `g`.
And the coordinates `0,0`,  `1,1` and `2,2` would give us `dog`

## Bonuses

Only try these after completing the main challenge.

### Super Big Boggle challenge

Super Big Boggle uses a 6X6 tray.

Make the following change in `spec/challenge.spec.js` to enable tests for this
bonus.

```diff
- xdescribe('Super Big Boggle', () => {
+ describe('Super Big Boggle', () => {
```

### Validate inputs

- Ensure tray has the correct length
- Ensure that coordinates fall within the tray
- Disallow coordinate pairs that aren't in a line

Return the empty string if a validation fails

## Hints

A tray is just an array of length 16 with each element a single letter string.

[Example in tests](https://git.generalassemb.ly/ga-wdi-boston-migrated/js-boggle-challenge/blob/solution/spec/challenge.spec.js#L12)

Become familiar with checking the tests for examples.

```js
const tray = 'dibtloambcgrumps'.split('')
```

A list of coordinate pairs is an array with length <= 4 and each element is an
array of length 2. The sub-arrays contain two integers >= 0 and <= 3.

[Example in tests](https://git.generalassemb.ly/ga-wdi-boston-migrated/js-boggle-challenge/blob/solution/spec/challenge.spec.js#L14)

```js
const coordPairs = [ [0, 0], [1, 1], [2, 2], [3, 3] ]
```

Write a function - in lib/challenge.js - that takes a tray and a list of
coordinate pairs and returns a string representing the concatenation of the
letters at each of the coordinates.

[Example in tests](https://git.generalassemb.ly/ga-wdi-boston-migrated/js-boggle-challenge/blob/solution/spec/challenge.spec.js#L21)

```js
boggle(tray, coordPairs) // "dogs"
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
