# Delivery Notes

## Explanation of Namespacing

> When Jeff got to the section about the Math module, he had a really nice explanation of why we need namespacing for pi and cos - that in economics, pi isn't the mathematical pi, it's profit, which has the definition of revenue - costs. If pi were in the global namespace, we can't use it to represent the economic concept without breaking Ruby. Having it namespaced in the Math module allows us to have it available for both concepts.

## Diagram of Enumerable

- This is used in ruby class methods talk too. Notice in the bottom right corner, `Enumerable#pop` is diagrammed:

 ![diagram](https://git.generalassemb.ly/storage/user/4584/files/d7c18894-2649-11e7-91f7-e9ca59b08d52)

- Another whiteboard diagram this one to show where methods get inherited from:

 ![](https://git.generalassemb.ly/storage/user/3667/files/d7e4fb94-2649-11e7-9326-b529ca1dbd03)


## Note about .freeze

You’ll often see freeze used when assigning constants, to ensure that the values can’t be mutated. This is because reassigning a constant variable will generate a warning, but mutating a constant value will not.

## Framing

This lesson starts with explaining how the abstract data type of list, whether an array, object or range, would benefit from a lot of the same methods such as iterating.  Developers are then shown how in Ruby, modules can be used to share methods between different classes.  One goal is to see the benefit of using a module for shared functionality.  The next goal is similar to [ruby-array-methods](https://git.generalassemb.ly/ga-wdi-boston/ruby-array-methods) or [js-array-iteration-methods](https://git.generalassemb.ly/ga-wdi-boston/js-array-iteration-methods) and that is to *use the enumerable methods that are already included in classes* such as array, object and range.

Then, the lesson shifts to how to implement a module into a custom class.  Developers will be including the enumerable and comparable module in custom classes and setting up their class as required by the modules.  The goal is to *implement the modules in a custom class*.

## Whiteboard Diagrams

![](https://media.git.generalassemb.ly/user/16320/files/e34bf900-41af-11e9-91fb-74861ea947bf)
