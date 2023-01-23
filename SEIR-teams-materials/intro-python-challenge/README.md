[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python Coding Challenge Homework

## Instructions

1. Fork and clone this repository to your machine.
1. Check out a development branch.
1. Complete the prompts listed below in [challenge.py](./challenge.py). To test your output in terminal, run `python3 challenge.py` from within this repository. Comment out the prompts as you complete them to keep your output clean and easy to read.
1. When complete, submit your homework by making a pull request on this repository.

Unless otherwise stated, assignments are due the next class day at 10 am ET.

# Part 1: Most Clocks Are Normal, But Some Are Cuckoo!

## Skill you're Practicing: Writing Conditionals

You're making a program for your coworkers that displays a message on their desktop's idle screen. Depending on the time of day, you want to print a different quote.

You'll create a variable, `time`, which has an integer value between zero and 23, representing the hour of the day in [military time](https://www.thebalancecareers.com/military-time-3356971), which is a 24-hour clock.

Write a conditional statement with Python code that prints exactly one message using the following rules:

- If the time of day is before 9 a.m. --> print the quote `'Morning is wonderful. Its only drawback is that it comes at such an inconvenient time of day.'`

- Otherwise if the time of day is before or exactly 4 p.m. --> print the quote `'Working hard or hardly working?'`

- Otherwise, if the time of day is before 8 p.m. --> print the quote `'How did it get so late so soon?'`

- Otherwise if the time of day is before 10 p.m. --> print the quote `'A day without sunshine is like, you know, night.'`

- Otherwise, for any time 10 p.m. or later --> print the quote `'Burning the midnight oil!'`

## Starter Code

```python
time = 8

# Continue to write more code!
```

> **Hint:** Test your code with different values for time of day. Make sure you are only printing one statement, regardless of the value of `time`!

# Part 2: I Came, I 'Saur, I Conquered

## Skill you're Practicing: Writing Conditionals with Multiple Conditions

The mighty Tyrannosaurus rex is the king of dinosaurs, and he does whatever he pleases. When he's hungry, he eats. When he's angry, he fights. When he's bored, he roars. When he's tired, he sleeps!

Write a conditional statement that selects one of the following actions for T-Rex based on his current mood. T-Rex's actions are ordered by precedence:

- If T-Rex is angry, hungry, and bored he will eat the Triceratops.
- Otherwise if T-Rex is tired and hungry, he will eat the Iguanadon.
- Otherwise if T-Rex is hungry and bored, he will eat the Stegasaurus.
- Otherwise if T-Rex is tired, he goes to sleep.
- Otherwise if T-Rex is angry and bored, he will fight with the Velociraptor.
- Otherwise if T-Rex is angry or bored, he roars.
- Otherwise T-Rex gives a toothy smile.

## Starter Code

```python
angry = True
bored = True
hungry = False
tired = False

# Example `if` statement:
if bored:
    print('T-Rex roars! RAWR!')
```

# Part 3: IOU!

## Skill you're Practicing: Writing `for` Loops to Iterate Over a List

You have a list of Disney characters and you want to find out if each of them contain `i`, `o`, or `u` in their names. Loop through each character in the list and print out the following:

- If the name contains a 'u', print out the name plus `'U are so Uniquely U!'`
- Otherwise if the name contains an 'i', print out the name plus `"I bet you're Impressively Intelligent!"`
- Otherwise if the name contains an 'o', print out the name plus `'O My! How Original!'`
- Otherwise, print the name plus `"Ehh, a's and e's are so ordinary."`

## Starter Code

```python
disney_characters = ['simba', 'ariel', 'pumba', 'flounder', 'nala', 'ursula', 'scar', 'flotsam', 'timon']
```

## Expected Output

Be sure to run your code to see if the output is correct!

```
simba I bet you're Impressively Intelligent!
ariel I bet you're Impressively Intelligent!
pumba U are so Uniquely U!
flounder U are so Uniquely U!
nala Ehh, a's and e's are so ordinary.
ursula U are so Uniquely U!
scar Ehh, a's and e's are so ordinary.
flotsam O My! How Original!
timon I bet you're Impressively Intelligent!
```

> **Hint**: You can determine whether or not a string contains a particular character with an `if` statement. For example, `if 'b' in my_string:` will be true if `my_string` contains any b's.

# Part 4: If You're Cold, Sit in a Corner. It's 90 Degrees!

- Look up "while loops" to tackle this exercise!

## Skill you're Practicing: Writing `while` Loops

Wow! It's 90 degrees Fahrenheit and you are sweating buckets! Luckily you have air conditioning, but it's really old and kind of finicky. It cools the room by three degrees and shuts off, so you have to keep turning it back on until the temperature gets to where you want it to be. Seventy five sounds much more pleasant than 90, so that's what you're shooting for.

- While the temperature is greater than 75 degrees Fahrenheit, print `'The temperature is XX — crank the AC!'`, and subtract 3 degrees from the temperature.

- Once the temperature is cool enough and the loop is done, print `'75. Ahh, that's better.'`

## Starter Code

```python
temperature = 90
```

## Expected Output

Be sure to run your code to see if the output is correct!

```
Temperature is 90 — crank the AC!
Temperature is 87 — crank the AC!
Temperature is 84 — crank the AC!
Temperature is 81 — crank the AC!
Temperature is 78 — crank the AC!
75. Ahh, that's better.
```

> **Hint:** Make sure that your loop conditional is being updated with each iteration. Otherwise you'll end up with an infinite loop!
