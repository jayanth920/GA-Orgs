# STACHE Guidelines
##### Your guide to writing _good_ code

### S -> Small
- Methods should be small and concise
  - No more than 10-15 lines of code for each method
  - Methods should have one, clearly defined function that is readily apparent
- Classes should follow the Single Responsibility Principle
  - All classes should have a single concern and contain only methods related to the manipulation of the objects it creates.

### T -> Tested
(This criterium is currently optional!)
- __Red__
  - Write tests and watch them fail
- __Green__
  - Write just enough code to make the tests pass
- __Refactor__
  - Look at your code for areas of potential refactoring
    - Repeated code
    - More efficient design
- Run your tests to ensure that the refactor was successful.
- __WRITE MORE TESTS__

### A -> Arid

__D__ on't __R__ epeat __Y__ ourself! To keep your code DRY abstract areas of repeated code into methods.

### C -> Commented

- Use comments to clarify code whose function is not obvious (the why, not usually the *how*)
- Use comments to indicate areas of code that need further attention
- Use comments sparingly
  - Avoid over-commenting
  - Your code should be written in such a fashion that it explains itself.

### H -> Hugs and High-Fives!

![hugs](http://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif)

### E -> Easy-to-Read
- Lines of code should not extend beyond 80 characters to maintain readability.
- Mainting proper indentation and whitespace throughout your code.
  - Always indent 1 tab (2 spaces) when nesting lines of code.
  - Single line of whitespace between method definitions
- Name variables semantically for the data they represent
- Use CamelCase for classes
- Use snake_case for variable and method names
