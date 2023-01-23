gi![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# jQuery Introduction: Research Project From Fell

## Introduction

We're going to explore some of the features of jQuery by working through a few
not-very-likely hypothetical scenarios.

You find yourself working for the notorious Dr. Fell, a demented Latinist.  He
recently wandered into a conference on web design and noticed the Lorem ipsum
text, which he immediately recognized.  Unfortunately he also wandered through
a few panels on Javascript, and he has some definite ideas.

## Objectives

By the end of the lesson students will be able to:

- Manipulate the DOM by using jQuery selectors and functions
- Register and trigger event handlers for jQuery events

## Task 1

Dr. Fell provides you with an HTML version of *De Finibus Bonorum et Malorum*. 
He's seen someone using Sublime Text with the minimap on, and he wants exactly
that:  "Show them the whole text in really really small font on the right side
of the screen, and when they click on any paragraph, show it to them full-size
on the left!"

## Task 2

"Oh, and so they know where they are, make sure the paragraph they are reading
turns purple in the minimap!"

## Task 3

"Let's put something underneath the paragph - count how many times the words
for 'good,' 'bad,' and 'pain' are used!"

(And he goes into a lengthy explanation of Latin nouns, from which you take
away that any word starting with bon-, mal-, or dolor - should be counted.)

## Task 4

"And maybe add a button that, when they click it, shows them a table of
frequencies for *all* the words in that paragraph


* add a button to HTML page
* $( ? ).click (function(){ ? });
* add another table to HTML page OR add a placeholder for the table
* fill in click function

### Task 4a

Dr Fell makes a face when he sees the table.  "I thought computers were supposed to make things EASIER!" he says.  Then he gets an idea.  "Add a box the user can type into, and when he clicks the button, tell him how many times the word is in the paragraph!"

<input type="text" name"name">
 vs <input type="text" id="foo">
$('#foo').val()
$('#foo').val(27);
$('input[name="name"]').val()

---

## Task 5

"Now, when they click a word in the big display paragraph, change all the
identical words to red in both the mini-map and the main paragraph."

## Task 6

"Unless that word is one of the ones we counted in Task 3, in which case it
should turn royal purple."

## Other Notes

We'll be doing this as a codealong.
