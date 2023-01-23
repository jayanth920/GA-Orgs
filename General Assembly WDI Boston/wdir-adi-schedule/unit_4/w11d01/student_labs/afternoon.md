# DOM Tree Tea House

Tea is the new coffee!

You are almost done with WDI! These instructions are significantly more vague than the morning lab! Use those brain muscles, find your own solutions, use class notes and morning lab to help yourself achieve glorious success!

## Set Up
- `mkdir tea`
- `cd tea`
- `touch index.html app.js`
- create a new react app (follow instructions from class/previous lab)
- using react, render an `h1` with the name of this 'business'

## Build a custom component that will contain an `ul`
For now, just have it have one `li` that says `tea`

**GOTCHA** : Remember render() can only return one html element. You can nest as many elements inside of that element though


## Conditionally render HTML

- make a new variable called `open`, set it to true to start. For the next two steps, just change the value in your `app.js` file (WHERE do you make this? globally? inside the class? as props? set it inside of state? Look back at the lecture notes and follow along)
- if `open` is true, render an `h2` that says 'Yes, we are open'
- if `open` is false, render an `h3` that says 'Sorry, we are closed'
<br>

![open](https://i.imgur.com/8CrqDjn.png)

![closed](https://i.imgur.com/SPvPQ1i.png)

Now make it so you can change the value of `open` through your page:

- write a function that will toggle open from true to false and false to true (hint something like `open = !open` )
- Add a click handler to the h1 or make a button to call the function and change the value of open, the `h2` should update as the value of `open` changes

## Use `.map` to render `li` with the following tea data
Change the `li` from a hard coded `tea` to render this 'data':

```js
const tea = ['Maple Bacon Tea', 'Chardonnay Tea', 'Dolphin Blue Tea', 'Labrador Tea', 'Ginko Biloba Tea']

```


## Pass Properties to Children
 - Remove `tea` as a global variable and instead add the `tea` array to state

 - Break list items (`li`) into their own component and pass down the data from the component that has the `ul`

## Add a Click Handler That Calls a Function
It will alert the customer that they are drinking whatever tea they clicked on

Thought question - where should this function go? In the list item component or its parent?


## Change a Component's State Through Interaction
- Create a form with a submit button
- Add the input to the tea array and have it render immediately on submit

## Use `this.props  children`
In your component that renders the list items, put some text between the tags like `The finest `

Then pass in to the list item child component `this.props.children` to render

![](https://i.imgur.com/cpczbhN.png)

This may seem a bit weird! Reread the notes, keep working on it

Final:

![final](https://i.imgur.com/bRd4kc2.png)

