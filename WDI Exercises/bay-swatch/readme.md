# Events and Callbacks

# User Stories


0. *When I mouse-over on a color, I want to see its RGB color value in a box on the screen.* (10 min work, 15 min review)
  > Breaking it down:
  0. Select all elements with `swatch` class and store as a reference (*i.e. in a variable*)
  0. Add event listeners to each `swatch` class element to listen for mouse-overs
  0. Get the value of each `swatch` class element's color and change the text of the 'output box' to that value

0. *When my mouse enters the area of a swatch, I want the swatch to fade out. When the mouse leaves the color-box, I want the swatch to fade in.* (15 min work, 15 min review)
  >Breaking it down:
  0. Determine what event corresponds to the mouse entering the boundaries of a DOM element
  0. Determine what event corresponds to the mouse leaving the boundaries of a DOM element
    - http://api.jquery.com/category/events/mouse-events/
  0. Attach event listeners to each colored div to handle the mouse-enter event, and to handle the mouse-leave event
  0. Create event handler functions for each event
  0. Search jQuery documentation for methods to fade a DOM element in and out

0. *I'd like to be able to add more colors of my choosing, so that I'm not limited to just shades of black, red, green, or blue. I also want to be able to add any number of swatches of the color I've chosen.* (20 min work, 20 min review)
> The colors added by the user do NOT have to vary in their shade. Do not worry about adding in functionality to progressively make each div darker or lighter than the previous.

  >Breaking it down:
  0. When the user presses enter, thereby submitting the form, **store** user inputs from the **color** and **number** input text boxes and `console.log()` these stored values.  
  0. Create a div with a `class` of `swatch` using `$()`.
  0. Attach an additional class to this new div that matches the color entered by the user.
  0. Make the `background-color` of this div the color chosen by the user.
  0. Append this to `<div class="container">`.  
  0. Write a for-loop to append the requested color the requested number of times.
    > You can move the code above into this for-loop.

0. *I'd like to be able to click on a swatch and then another swatch, and switch their color-values (I want the swatches to switch places).*(20 min, 20 min review)
> The point here is to give the **impression** that the swatches are themselves switching places, but in reality, only their color-values are being swapped.

  > Breaking it down:
  0. You'll not only need to keep track of the number of clicks, but you'll need to differentiate even-numbered clicks (if the user has has clicked an even number of times) from odd-numbered clicks (if the user has clicked an odd number of times).
    - What javascript operator would we use here? Hint: it's a mathematical operator
  0. You'll also need to store the color value of the first div clicked and the color value of the second div to make the swap.
  0. Bonus UX Upgrade: Have the border of the first clicked element turn yellow after clicking on it. The size of the clicked swatch must not change. If the user clicks on the same element, the border disappears.  
