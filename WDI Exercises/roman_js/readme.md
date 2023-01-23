# Romanize!

## Objective
Create a function that accepts an integer as an argument. It should than convert that number into its [roman numeral](https://en.wikipedia.org/wiki/Roman_numerals) equivalent.

```
2499 = MMCDXCIX
543 = DXLIII
13 = XIII
```

### Pairing!

You can do this challenge in either JS or Ruby. Pair with someone that wants to code in the same language as you. Ideally someone you've never worked with before!

### Specs? (aka What's this SpecRunner.html?)

If you open SpecRunner.html in your browser, you can see that there are 19 specifications, 8 pass and 11 fail.  These specifications (or tests) indicate how your code should perform.  They provide examples of what output is expected for various inputs. Eight specs already pass, because the starter code supports them.

Check out src/Roman.js.  You can see that the specs are expecting a function called "romanize", that accepts an Arabic numeral and returns a Roman numeral.

Click on "Spec List" to see a listing of the specs. See that the numbers below 10 are passing (green)?  The specs live in spec/RomanSpec.js.

Feel free to ignore SpecRunner.html, but you may find it helpful as you refactor your code to support the next range of Roman Numerals.

**Pro-Tip:** Comment out the failing specs, leaving only a single failing spec.  Just focus on one requirement at a time.

### Pseudo Code!(10m)

We recommend you pseudocode for the first 10 minutes. Start writing down/typing how to break this problem down.

### Stating the obvious

You are looking for an algorithm that will calculate a Roman numeral.  Simply creating a massive conversion chart that includes all numbers is, well, simply painful.

### Bonus

- How clear is your code?  Is it obvious where you support the subtraction cases (IV, IX, etc)?  Does your code reflect your vision of how you, personally, calculate Roman Numerals?
- Create a web page that converts roman numerals
- Refactor to another language
