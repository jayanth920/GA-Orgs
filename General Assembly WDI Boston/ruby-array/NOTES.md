## Intro

Developers should be familiar with arrays, having just spent weeks with JavaScript. Rely on their existing knowledge and confidence. This is a chance to show that programming, regardless of language, follows the same basic principles. This talk can also introduce ways to work with and debug ruby code, browse Ruby documentation, and get familiar with conventions like variable naming.

## Demo

We can use this array for demo:

```rb
developers = ['Caleb', 'Joel', 'Julia', 'Adam']
```

## Code Along

As we go through the code along, identify 3 ways to check our work: 
 - console logs 
    - using `p`, `puts` or `print` statements. The difference here is `puts` adds a newline at the end of the statement (good for users), `p` is most useful for debugging and inspecting things, and `print` does not put a newline, allowing you to print multiple times on the same line. Also, `pp` can be used to "pretty print", showing arrays and objects in a nicer way. More [in this guide](https://www.rubyguides.com/2018/10/puts-vs-print/)
 - Breakpoint within our code using `binding.pry`
    - Always useful to show off and reinforce using breakpoints and binding.pry. Instructions are included, commented out, in the lib/code_along file.
 - Running specs and comparing output
    - verify our work with `bin/rspec spec/ruby_array_spec.rb`

## Labs

Use the methods we have seen in this talk, as opposed to more advanced things like ranges: to access all elements from 2nd element until end of array, use `[1..-1]` as compared to `[1, ( working_array.length -1 )]`

