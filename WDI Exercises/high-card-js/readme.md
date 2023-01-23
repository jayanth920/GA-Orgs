# Let's Play High-Card-Wins

## Introduction

Let's play High Card! It's an exciting game of luck, skill, and... actually, just luck.

Modify `script.js` so that the game executes properly! No need to touch `index.html`.

The "interface" for this game consists entirely of alert boxes (aka dialog boxes) in your web browser. If you get stuck in an infinite loop of alert boxes, note that Chrome gives you the option to "Prevent this page from creating additional dialogs" after the first alert box. Clicking this will mute all subsequent alert boxes until you close and reopen the page.

## Directions

Inside `script.js` you'll find the following methods:

- `buildDeck`: Populates the `deck` array with 52 standard playing cards.
- `shuffleDeck`: Randomizes the order of `deck`.
- `getMorePlayers`: Asks the user if they want to add an additional player to the game. If they do, the player is added to the `players` array. If not, the script continues.
- `deal`: Assigns one card to each player.
- `findHighestCard`: Finds the player with the highest card. Aces are high. For now, don't worry about ties, nor about one suit being more valuable than another suit.
- `announceWinners`: Alerts the card each player drew, their name, and their ranking. For example, "Alice is number 1 with the 9 of Spades! Bob is number 2 with the 6 of diamonds!" (Dialogs are annoying. How could you show all this in one alert box, rather than one for each player?)
- `playANewGame`: Runs all the previous methods in the proper order.

## Hints

- Methods you will definitely need to use:
	- `Math.random()`
	- `alert()`
	- `prompt()`
- How can you make Javascript "remember" what `this` is?
- Some methods that you might want to research, but by no means have to use:
	- `array.sort()`:
		```js
		array.sort(function(itemA, itemB){

		});
		```
	- `array.indexOf()`
	- `array.forEach()`:
		```js
		array.forEach(function(item, index){

		});
		```
	- `array.push()`
	- `array.pop()`
	- `array.unshift()`

  - [Screencast of an instructor solving it](https://youtu.be/X1341yVNCqE)

## Bonus 1

If there's a tie, announce "It's a tie between [name] and [name] with the [value] of [suit]!"

## Bonus 2

If there's a tie, deal all the players new cards.

## Bonus 3

Eliminate ties altogether. Spades > Hearts > Diamonds > Clubs.

## Bonus 4

Make this game run as an actual webpage -- not in alert boxes.

## Bonus 5

Turn the game into a series of "turns". After each round, deal all players new cards. Keep track of who has won the most rounds. Announce them as the winner.
