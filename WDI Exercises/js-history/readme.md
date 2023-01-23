# JavaScript

## What is a programming language and how is that different than HTML and CSS (15 minutes / 0:15)

HTML is a **markup language**, a system in which tags are used to add meaning to the text of a document and describe non-text aspects of the document.
HTML doesn't operate on data, it is data.
As fancy as an HTML document can get, it is still ultimately describing a document, not a program.

CSS is a **stylesheet language**, a language to describe rules for the presentation of a structured document.
While there is a lot of depth to CSS it is ultimately focused on the document which is limiting.

A program is a collection of instructions that preforms a task when executed by a computer.
This task can be editing digital video, running a game, transfering money between bank accounts, operating a robot in a factory, mining data, firing missiles, presenting a web application, or simply printing some lines to a console.
There are many programming languages and they could all do all of these things, but some better than others.

Programing languages generally share several features such as **data types**, **variables**, **logic**, **control flow**, and **functions** that allow them to express any conceivable procedure.
Every programming language has a specific **syntax** used to write these instructions.
Every programming language also has a set of built in features that provide the basic building blocks for more complex instructions sets, that let the instructions have external effects (produce output) and that take external input from users and other programs.

Developers choose to use different programming language for a variety of reasons.
It may have features that make a particular task easier or more efficient or it may have a clear syntax.
We use JavaScript when building web apps because it is the only language that runs in the browser.

## The Turbulent History of JavaScript (10 minutes / 0:25)

![Browser Market Share 1994-2009](https://upload.wikimedia.org/wikipedia/commons/5/55/Layout_engine_usage_share-2009-01-07.svg)
- **1993**: National Center for Supercomputing Applications (NCSA) of the University of Illinois at Ubrana-Champaign release [NCSA Mosaic](https://en.wikipedia.org/wiki/Mosaic_(web_browser)) popularizng the web.
- **early 1994**: Mosaic Communications founded and begins work on Mosaic Netscape (internally, Mozilla)
- **late 1994**: Mosaic Netscape released and quickly dominates web browser market
- **early 1995**: Mosaic Communications is renamed Netscape Communications and Mosaic Netscape is renamed Netscape Navigator.
  - Microsoft is making large investment in web browsers and is challenging Netscape.
  - As browser competition intensifies, Netscape founder, Marc Andreessen, beleives there is a need for a light weight language marketed to web designers that could be embedded directly in web pages.
    - Brennan Eich is hired to write "Scheme for the web".
    - Simultaneously, Netsape is working with Sun Microsystems to build Java extensibility into the browser leading to the decision that this new language should mimic Java to an extent.
    - Brennan Eich prototypes the language then called Mocha in ten days.
- **late 1995**: Mocha is released as a supported feature of the Netscape Browser under the name LiveScript
  - In the subsequent release of the Netscape Browser, LiveScript is regretably renamed JavaScript in an effort to ride the coat tails of the heavily marketed Java.
- **1996**: Microsoft reverse engineers JavaScript and releases JScript.
  - Netscape submits JavaScript to Ecma International to publish a standard (ECMAScript-262)
- **1998**: Netscape open-sources their browser and creates the Mozilla Project.
  - ECMAScript 2 Standard published.
- **1999**: ECMAScript 3 standard published.
- **2003**: ECMAScript 4 falls apart.
  - Apple releases Safari.
- **2005-2009**: Lots of excitement but things keep falling apart.
  - Open source community works to address failings of the standards comittees
  - ECMAScript 5 released
- **2008** Chrome released
- **2009** Node.js released
- **2015**: Change the naming convention to ECMAScript 2015 (commonly ES6)
- **2016**: ECMAScript 2017 released but not such a big deal because people had be using Babel.

![Browser Market Share 2009-2015](https://upload.wikimedia.org/wikipedia/commons/8/86/Usage_share_of_web_browsers_%28Source_StatCounter%29.svg)

- This turbulent history has resulted in some of the more interesting features of JavaScript including:
  - The thriving open source community with extemely powerful tools (jQuery, Express, React, Babel etc).
  - Extremely powerful runtimes as a result of competition between browser makers.
  - Language details that seem odd (`==` and `===`).
  - Occasional browser inconsitencies.
  - Ambiguous syntax

Note: Check out [Can I Use..](https://caniuse.com/) for detailed info on browser support of JS features.

## Linking a JavaScript file (5 minutes / 0:30)

From the command line:

```shell
$ cd ~/wdi/sandbox
$ mkdir js-data-types-and-control-flow
$ cd js-data-types-and-control-flow
$ touch index.html script.js
$ atom .
```

Update the files as follows:

In index.html:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>This is the Title</title>
    <script src="script.js"></script>
  </head>
  <body>
  </body>
</html>
```

In script.js
```js
console.log("hello world")
```

Back at the command line run:
```bash
open index.html
```

Your default browser will open (we ask for this class you use Chrome but other browsers will have similar tools you should definitely explore).

You can bring up the Development Tools (DevTools) with the command **Command + Ctrl + J** (`⌘ + ⌥ + J`) and should see:

![DevTools Console says 'Hello World!'](https://user-images.githubusercontent.com/7882341/27314092-830ea8ac-553f-11e7-954f-c8502b382d6d.png)

### Linking multiple scripts

Again, back at the command line run:
```bash
touch script2.js
```

In script2.js add:
```js
console.log("hello world, from script2")
```

In index.html, in the head after the other script tag, add:
```html
...
  <script src="script2.js"></script>
...
```

Go back to the browser and refresh the page.

**Bonus** [async and defered attriutes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

## Linter (10 minutes / 0:35)

- Install [Linter](https://github.com/steelbrain/linter)
- Install [linter-js-standard](https://github.com/ricardofbarros/linter-js-standard)
- Install [atom-standard-formatter](https://github.com/stephenkubovic/atom-standard-formatter)
- Install [standardjs-snippets](https://github.com/gaboesquivel/atom-standardjs-snippets)

The errors we get in the linter might be confusing at first.
There is a standard list of rules [here](https://standardjs.com/rules.html).
The errors for the most part should be understandable plain English but if the meaning of an error isn't clear, google "Standard JS [Error Message Here]".

To use the formatter press `ctrl-alt-f` and the formatter will correct any errors it can in your file.

Why do we want a linter?

## Developer Tools (10 minutes / 0:45)

### `console.log`

We have seen `console.log` frequently in the pre-work and we will see it much more.
The most difficult aspect of programming is not having insight into the exact value of things in a running program.
`console.log` provides us this insight.

```js
const randomNum = Math.floor(Math.random() * 10)

console.log(`The random number is ${randomNum}`)

```

### `debugger`

`debugger` is like a super powered `console.log`.
Where `console.log` leaves us a little evidence about what's going on in the program execution, debugger puts the process on hold and lets us look at any part of the paused process.
It then lets you walk through your script step by step.

```js
let greeting = "Hello"
let subject = "World"
debugger;
let message = `${greeting}, ${subject}!`
console.log(message)
let messageParts = message.split(", ")
```

We don't actually need to have a `debugger` line and StandardJS doesn't like it.

Instead we can set breakpoints directly through the developer tools.

Much more information on debugging with Chrome Dev Tools is available [here](https://developers.google.com/web/tools/chrome-devtools/javascript/)

## References

- [W3C: A Short History of JavaScript](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript)
- [Auth0: A Brief History of JavaScript](https://auth0.com/blog/a-brief-history-of-javascript/)
- [Wikipedia: JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [Standard JS](https://standardjs.com/)
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/javascript/)
