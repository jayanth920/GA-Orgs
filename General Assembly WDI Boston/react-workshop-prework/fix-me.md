# Debugging Exercise

To brush up on your Javascript before diving into React, we've provided a
simple front-end web app that is suffering from a number of bugs. Your task
is to fix those bugs.

## The app

The app we've provided is a simple front-end-only Tic Tac Toe game. It's using
very old-school Javascript, and no package mangager, build tools, linters, or
third party dependencies. In fact, it's just three files: `index.html`,
`index.js`, and `index.css`. They're connected by `<script>` and `<link>` tags
in the HTML. 

To see the app in action, you'll need to visit `index.html` in your web
browser. The url you need to visit will look like this:
```
file://<absolute path to this repo>/index.html
```
The app is meant to satisfy the following user stories:

- As a user, I can play a game of tic-tac-toe against myself.
- As a user, when a player wins a game, I can see a message that tells me who
won.
- As a user, when a players wins a game, the game board will remain visible but
not allow additional moves to be made. 
- As a user, when there is a tie game, I can see a message that says so.
- As a user, I can click "Reset" to start a new game at any time.

Right now, it's falling a bit short of those goals.

## Bugs

You should fix the following bugs:

- The game sometimes says a player has won when they haven't.
- If you click on an occupied cell, the game switches turns.
- The game will say it's a tie when only 8 cells are filled.
- The reset button doesn't work.
- Even if it did work, it won't clear the winner/tie message.
- You can keep making moves after someone has won.

You can fix these bugs any way you see fit. However, note that none of them
require writing a lot of new code. Each one can be solved by writing one line
of code, or by modifying one existing line. It's definitely in your best
interests to read through the code and try to understand how it works before
you start trying to fix the bugs.

## Tips

- Use lots of `console.log()`s
- Google anything you're not familiar with
- Believe in yourself
