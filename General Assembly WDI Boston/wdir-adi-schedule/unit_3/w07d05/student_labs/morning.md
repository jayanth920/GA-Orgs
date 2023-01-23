# 🎙️💰👟 Represent 🎙️💰👟

![](https://i.imgur.com/GquWxXI.png)

> Get your AngularJS data **represent**ed correctly.
>
> Data in `app.js` --> represented in `index.html`


### Directions

* make a directory and inside it have an html file and a js file
* Include the Angular CDN in the html file
* Set up the **module / app** bound to the `html` tag
* Set up the **controller** bound to the `body` tag

* Model the following data in your Angular controller, and display it on the page according to the appropriate directive.


### Data

Display all three values of the following data object on the webpage.

```javascript
  this.track = {
    Artist: "Run-D.M.C.",
    Title: "My Adidas",
    Lyric: "My Adidas walk through concert doors/And roam all over coliseum floors."
  }
```

**this.track** is singular because it represents one track object. Below is **this.tracks**, plural, because it represents many track objects (in an array). Use a repeat to display all of these tracks on your page.

```javascript
  this.tracks = [
    {
      Artist: "J. Cole",
      Title: "Villematic",
      Lyric: "You hate it before you played it. I already forgave ya."
    },
    {
      Artist: "Snoop Dogg" ,
      Title: "Gin and Juice",
      Lyric: "Rollin' down the street, smokin' indo, sippin' on gin an juice/Lay back with my mind on my money and my money on my mind."
    },
    {
      Artist: "Lil Wayne",
      Title: "I Feel Like Dying",
      Lyric: "I can mingle with the stars and throw a party on Mars/I am a prisoner, locked up behind Xanax bars "
    },
    {
      Artist: "Lil Wayne",
      Title: "6 Foot, 7 Foot",
      Lyric: "Real gs move in silence like lasagna."
    },
    {
      Artist: "Notorious B.I.G.",
      Title: "Juicy",
      Lyric: "We used to fuss when the landlord dissed us/No heat. Wonder why Christmas missed us/Birthdays was the worst days/Now we sip champagne when we thirst-ay."
    },
    {
      Artist: "Grandmaster Flash & the Furious Five",
      Title: "The Message",
      Lyric: "Don't push me cause I'm close to the edge/I'm trying not to lose my head/It's like a jungle. Sometimes it makes me wonder/How I keep from goin' under."
    },
    {
      Artist: "Elzhi",
      Title: "Hands Up",
      Lyric: "Put your hands where I can see 'em, so they look like 12 PM"
    },
    {
      Artist: "Cypress Hill",
      Title: "Insane in the brain",
      Lyric: "Cops, come and try to snatch my crops"
    }
  ];
```

Within the repeat, make it so that the track will only display the "lyric" value **if** the Artist is Lil Wayne.

## Reference: Directives

* `ng-app`
* `ng-controller='ControllerName as obj`
* `{{ }}`
* `ng-repeat`
* `ng-if`


## Bonus

Create a new app (new index.html, new app.js)
- Make a clicker counter
- display the number 0
- make a button that every time you click, the value goes up on the display by 1
- make a button that every time you click, the value on the display goes down
- make a reset button that resents the counter to 0
- if the counter shows a negative number change the css to have a background color that is red or red-ish.

#### Additional Angualar Directives

- `ng-class`
or
- `ng-style`


## Bonus Bonus
## Caesar Cipher

Activity Creator: Thom Page<br>
Major updates: Karolin Rafalski<br>

Make a Caesar Cipher page that takes an input and encodes it with a Caesar Cipher and and displays the encoded input while the user is typing (no submit button).

Also make it so the user can decode an encoded message.


![page](https://i.imgur.com/tu3CHD6.png)


#### Additional Angualar Directives

- `ng-keyup`
- `ng-model`


### The Code

You can use the [Caesar Cipher code](https://en.wikipedia.org/wiki/Caesar_cipher) below or write your own



Start with a hard-coded shift amount. Once you get your message encrypting and decrypting, try adding the functionality to change it on button click/input amount

[Here is a video demo for inspiration](https://youtu.be/8MbehO9JwY0)

<details><summary>Caesar Cipher Code</summary>

```js
const caesarShift = (str, amount) => {
  // Wrap the amount, deals with negatives
  if (amount < 0) {
    return caesarShift(str, amount + 26)
  }
  // go over each character
  let output = str.split('').map(c => {
    // check if it is a letter
    if (c.match(/[a-z]/i)) {
      // convert to number code
      let code = c.charCodeAt(0)
      // shift by number code uppercase
      if ((code >= 65) && (code <= 90)) {
        return String.fromCharCode(((code - 65 + amount) % 26) + 65)
      // shift by number lowercase
      // could just be else, but more readable to write another if statement
      } else if ((code >= 97) && (code <= 122)) {
        return String.fromCharCode(((code - 97 + amount) % 26) + 97)
      }
    // other character? Don't shift it
    } else {
      return c
    }
  })
  return output.join('')
}
```


</details>

<br>


## Bonus Bonus Bonus

## Stop Watch

- Make a new `index.html` `app.js`
- Reuse whatever code you like from your clicker counter
- Change your clicker counter into a stopwatch that goes up by 1 second or 100 milliseconds (your choice)
- Research AngularJS digest loop and lifecycle events to find the right directive/service for your stopwatch
- Have the watch stop, start, countdown and reset
- Have the watch measure milliseconds, seconds, minutes and hours properly
- Add a lap button that marks the time the button is pressed and adds it to a list below the stopwatch
- Add a clear laps button that clears the lap list
- Style it to look awesome

