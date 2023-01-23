# Alice in DOMland
Oh no!  Alice is in DOMland but nothing is working right!

- The *potion* should make her *smaller*

- The *cake* should make her *bigger*

## Huh? Stop with this tomfoolery, what should I do!?
Ok, ok.  Here's all you need to do.  
Make it so when the `drink potion` button is pressed, the *width of the image* becomes `100px`. When the `eat cake` button is pressed, the *width of the image* becomes `300px`.

## How to proceed (Hints!)
- Add query selectors to alice, and both buttons and save those all to variables.  
- Note that Alice's width starts at `200px`.  
- Add an event listener on the potion button that listens for a `click` event. 
- When clicked, run a function that changes the image's width.  
- Do the same for the cake button

<summary>
    More help!
    <details>
        Use `style.width` to set the image's width. 
        Checkout <a href="https://www.w3schools.com/jsref/prop_style_width.asp">W3Schools</a> for more info
    </details>
</summary>

## Bonus
- Make it so the buttons change Alice's size just `10 px` at at time!  The buttons should now add or subtract 10px to the current width. 