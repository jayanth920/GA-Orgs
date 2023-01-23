# ![](images/ga.png)

# Pixart

For this assignment you'll be creating a Javascript painting app. When you're done, [it should display this functionality](http://ga-wdi-exercises.github.io/pixart_js/).




**Step 1:** Let's grab all of the elements that we will need to add the correct functionality.
    1. First grab the input box by grabbing it by its 'id' and setting it to a variable called 'input'.
    2. Next grab the button also by using its 'id' and set it to a variable called 'setColor'.
    3. Third, grab the div with the class of 'brush' and set it to a variable called 'brush'.
    4. Lastly, grab the body of the page and set it to a variable called 'body'.
    Make sure to console log each of your variables to verify that you grabbed them all correctly.

**Step 2:** Now let's add an event listener to our 'setColor' variable so that whenever we 'click' it, something happens. For now just add this line to your event listener to verify that it works when you click it: `console.log('this works!')`
<details>
<summary>Spoiler</summary>
<br>

```js
setColor.addEventListener('click', () => {
    console.log('this works!')
})
```
</details>

**Step 3:** The purpose of our 'brush' variable and element is so that we can set the color of the brush to whatever value is inside of the input box. Let's update our event listener so that when we click the 'Set Color' button we see the backgroundColor of the brush update. We can do this by grabbing what is INSIDE of the input box using the `value` property. In this case we have our input box saved to a variable called `input` so let's grab the value of `input` and set the backgroundColor of the brush to `input.value`
<details>
<summary>Spoiler</summary>
<br>

```js
setColor.addEventListener('click', () => {
    brush.style.backgroundColor = input.value
})
```
</details>

##### This is AWESOME! We see stuff happening, but it's not very exciting yet, right? Let's keep going!

**Step 4:** Let's create some divs so that we can add further functionality. We want to be able to hover each div and have the backgroundColor of that individual div to change to the color that the brush is set to.
How can we create a bunch of divs all at once instead of having to hard code every single div?! With a `for loop`, of course! Let's create a `for loop` that will create **8000** divs. First set up your `for loop`:
```js
for(let i = 0; i < 8000; i++){

}
```

**Step 5:** Now that we have the basic for loop set up, let's create a new 'div' element for each iteration of the loop. Remember the `createElement()` method? Let's use that to help us make a new `div` element each time the loop iterates. (Remember to do this inside of the loop)
`Ex: `let span = document.createElement('span')`
<details>
<summary>Spoiler</summary>
<br>

```js
for(let i = 0; i < 8000; i++){
    let div = document.createElement('div')
}
```
</details>


**Step 6:** Awesome! Now we have to have some styling properties for each div we made right? This is already provided for you in CSS, so we can simply add the class with the appropriate styling to each div we made.
Add the class of `square` to each of your newly created div. If you want to see the styling, just check the `square` class in your CSS to see what each div is getting.
<details>
<summary>Spoiler</summary>
<br>
Your for loop should now look like this

```js
for(let i = 0; i < 8000; i++){
    let div = document.createElement('div')
    div.classList.add('square')
}
```
</details>


**Step 7:** Great! But we still don't see this divs appear on the page. We need to tell JS to append them to the body. Use the `appendChild()` method in your `for loop` to append each div to the body.
<details>
<summary>Spoiler</summary>
<br>
Your for loop should now look like this:

```js
for(let i = 0; i < 8000; i++){
    let div = document.createElement('div')
    div.classList.add('square')
    body.appendChild(div)
}
```
</details>

Our page should now look like the original! Just no functionality yet.

**Step 8:** To give each div some functionality, let's add an event listener to each div right INSIDE our `for loop`. Set up an event listener like you have been up to this point, but instead of listening for a 'click', let's listen for a 'mouseover'.
<details>
<summary>Spoiler</summary>
<br>
Your for loop should now look like this:

```js
for(let i = 0; i < 8000; i++){
    let div = document.createElement('div')
    div.classList.add('square')
    body.appendChild(div)

    div.addEventListener('mouseover', () => {
        
    })
}
```
</details>


**Step 9:** Cool, so now all we have to do is write some logic that will change the backgroundColor of that div to the background color of the brush. Remember how we updated the backgroundColor of the traffic light and the color switcher? We're going to be doing the same thing here. For now let's set the background color to turn 'green' whenever that div is hovered over.
`Ex: element.style.backgroundColor = "red"`
<details>
<summary>Spoiler</summary>
<br>
Your for loop should now look like this:

```js
for(let i = 0; i < 8000; i++){
    let div = document.createElement('div')
    div.classList.add('square')
    body.appendChild(div)

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'green'
    })
}
```
</details>


AWESOME!!!! This is working and now we can draw! But we have one more step to go to make this function properly. 

**Step 10:** Let's change our event listener so that each div changes to the current color of the brush instead of hardcoding the color 'green'. This part is up to you. Think about how we set the color of the div, and think about how we can extract that same property from the brush. This part is tricky at first, that is why `console.log()` is our best friend. It helps us check the properties.
<details>
<summary>Spoiler</summary>
<br>
Your for loop should now look like this:

```js
for(let i = 0; i < 8000; i++){
    let div = document.createElement('div')
    div.classList.add('square')
    body.appendChild(div)

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = brush.style.backgroundColor
    })
}
```
</details>

---


### Bonus

* Add a color swatch. Add three boxes with set background colors that you like. When you click on each of those boxes, it should set the current brush color to that color.