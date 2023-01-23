[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Caesar Cipher Challenge

## Prerequisites

-   None.

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Work in [`lib/challenge.js`](lib/challenge.js). A pull request is not required,
but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone).

## Ceasar Cipher

> In cryptography, a Caesar cipher is one of the simplest and most widely known
> encryption techniques. It is a type of substitution cipher in which each
> letter in the plaintext is replaced by a letter some fixed number of positions
> down the alphabet. The method is named after Julius Caesar, who used it in his
> private correspondence.
>
> – [Caesar cipher - Wikipedia, the free encyclopedia](http://en.wikipedia.org/wiki/Caesar_cipher)

We're going to implement a simple Caesar Cipher called ROT13 ("rotate by 13
places"). The transformation can be represented by aligning two alphabets:

```md
Plain:    abcdefghijklmnopqrstuvwxyz
Cipher:   nopqrstuvwxyzabcdefghijklm
```

ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied,
so the same action can be used for encoding and decoding. The algorithm provides
virtually no cryptographic security, and is often cited as a canonical example
of weak encryption. ROT13 is used in online forums as a means of hiding
spoilers, punchlines, puzzle solutions, and offensive materials from the casual
glance.

## Requirements

1.  Plan using the whiteboard for about 10 minutes.
1.  Implement your `ROT13Cipher` module.
1.  You should implment a method `.encode` that takes a single word as an
    argument and returns the encrypted text. Read and run the tests. Try your
    code out in `node`. You should be able to use your code like this:

    ```js
    let cipher = require('./lib/challenge');
    cipher.encode('hello'); //=> 'uryyb'
    cipher.encode('jeff'); //=> 'wrss'
    ```

1.  Implement a `.decode` method that takes an encrypted word as an argument and
    returns the unencrypted text.

**NOTE**: It is okay to hard-code `alphabet` and `rotated`. Try generating them
with code after you get the solution working.

## Bonus

First, change your cipher so that it can take a string with spaces, allowing you
to encode and decode entire sentences, not just words.

```js
cipher.encode('hello jeff'); //=> 'uryyb wrss'
```

Then, change your cipher again so that it can also take a string with upper-case
characters.

```js
cipher.encode('Hello Jeff'); //=> 'Uryyb Wrss'
```

Next, implement a ROT25 cipher. You should implement both `.encode` and
`.decode` methods. Test drive your solution, and use the module pattern.

```js
let cipher = require('./lib/challenge').rot25;
cipher.encode('Hello Jeff'); //=> 'Gdkkn Idee'
```

**Very Challenging**: Finally, implement a cipher that takes a number between
one and twenty-five as a parameter when it is instantiated. This number `n`
will be used to rotate the alphabet by `n` places. For example, if you
instantiate your cipher with 13, you should get the same results as the
in-class lab. Use [ROT-n Rotation Encryption online](http://www.rot-n.com/) to
build your test strings for each potential input.

**NOTE**: You should be running grunt nag before diagnosing any bugs, since it finds some of the most common sources of errors.

Test your code by running grunt test.

## Additional Resources

-   [Caesar cipher - Wikipedia, the free encyclopedia](http://en.wikipedia.org/wiki/Caesar_cipher)
-   [ROT-n Rotation Encryption online - The Caesar Cipher and other rotation ciphers](http://www.rot-n.com/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
