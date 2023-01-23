# Refactoring Exercise

Your next exercise is to refactor that same tic-tac-toe app to use all the new
ES6 features you read about. You may want to refer back to
[the ES6 reading](modernize-me.md) for details on how some of those new
features work. You'll also probably want to do some Googling.

## Requirements

- Replace all constructor functions with ES6 `class` syntax
- Replace all prototype methods (e.g. `Game.prototype.makeMove`) with ES6 class
methods
- Replace all instances of `var` with `let` and `const`
- Replace all non-prototype functions with arrow function syntax
- Replace all instances string concatenation (e.g. 'sting' + someVar) with
template literal syntax
- Your app must have the exact same functionality as it did before the refactor

## Tips

- If you're not certain about an ES6 feature or what it replaces, read up on it
- Test your app after each change to make sure that you haven't introduced any
bugs
- `let` and `const` work a bit differently from `var` -- you might have to move
some things around to make this change
- Feel free to make more changes if you see other ways in which the code could
be improved!
