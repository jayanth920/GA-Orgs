# Recursion

Recursion is a method for solving problems where the solution depends on solutions of smaller instances of the same problem. This is in constrast it iteration where a statement is repeated with mutable state. Recursion is a declarative approach to looping, whereas iteration is an imperative approach to looping. Problems solvable by iteration can also be solved recursively.

In practice, we have a function that calls itself one or more time putting the calculations on the *stack* until the function reaches a *base case* which produces an answer trivally (doesn't put more function calls on the stack).

JavaScript, C and Ruby all support recursion. Examples of functions to solve for a term in the fibbonachi sequence:


C:
```c
int fibonacci(int n)
{
  if ( n == 0 )
    return 0;
  else if ( n == 1 )
    return 1;
  else
    return ( fibonacci(n-1) + fibonacci(n-2) );
}
```

Ruby:
```ruby
f = ->(x){ x < 2 ? x : f[x-1] + f[x-2] }
f.call(10)
```

### Exercise

Calculate factorial using recursion (JavaScript and Ruby)

Talk about the stack and resolution of it.

### Why?

Recursion is important for some data structures such as trees.

Some languages such as C or Java require a lot more overhead to manage the *stack* and favor iterative solutions, whereas functional languages with support for tail calls won't have such a hard time.

