# Model / View Seperation

## Learning Objectives
- Discuss the steps of planning an app
  - User stories
  - Wire frames
- Explain the rational of Model / View seperation
- Identify requirments of a model and define an interface
- Implement a model class
- Identify requirements of a view and define an interface
- Refactor and reorganize a working app


## Planning (10 minutes / 0:10)

The biggest challenge we face as our programs grow larger is complexity.

The bigger a program gets, the harder it is to reason about all of its working parts.

Planning is essential to managing this complexity.

"Weeks of programming can save hours of planning"

vs.

"Analysis Paralysis"

_- [Hacker News](https://news.ycombinator.com/item?id=12002254)_

It can be tempting to dive right into a project and start building immediately but in all but the smallest projects, this quickly leads to disorientation and wasted time.

Planning is crucial to the success of any project but it can be very difficult, intimidating even, to transition from planning to implementing.

It is alway possible to extend planning, drawing up designs for more and more features.

To combat scope creep in planning we want to abide by the mantra "[do less](https://www.youtube.com/watch?v=PKIpCPS-oZc)".

We want to identify the "[minimum viable product (MVP)](https://www.youtube.com/watch?v=1FoCbbbcYT8)", build the smallest thing that checks the most important boxes.

### [User stories](https://www.mountaingoatsoftware.com/agile/user-stories) (10 minutes / 0:20)

User stories are a tool used in Agile development where features of the app are described from the users perspective.

User stories generally take the form _As a **&lt;role&gt;**, I want **&lt;feature&gt;**, so that **&lt;benefit&gt;**_.

For the temperature converter we might just have one user story:

_As a user, I want to enter a temperature and see it in celsius, farenheit, and kelvin, so that I don't need to calculate them._

We can add "Conditions of Satisfaction" for further specificity

_As a user, I want to enter a temperature and see converted to celsius, farenheit, and kelvin, so that I don't need to calculate them._
- Tempeture should be able to be entered in celsius, farenheit, and kelvin

### Wire frames (10 minutes / 0:30)

After writing a few user stories, spend time mocking up a user interface that could provide the features described in the user stories.

Our user story describes temperature input that can be for any unit.
We'll use a number input field for the temperature and a dropdown menu for the unit.

Below the input will be the temperatures in each unit.

If while drawing up wireframes, more user stories or conditions of satisfaction come to mind, you can add to your user stories but be careful of scope creep.

Once you have a wireframe you are happy with, you can go ahead an implement at least a shell in HTML and CSS.

Clone this repo, navigate to the `code` directory and open atom. You will find the HTML and CSS built out already:

```bash
git clone https://git.generalassemb.ly/ga-wdi-lessons/js-model-view-seperation.git
cd js-model-view-seperation/code
atom .
```

If you would like to work along, you should checkout locally several remote branches:

```bash
git checkout add-model
git checkout add-view
git checkout seperate-files
```

Checkout the master branch so we're back to our starting place:

```bash
git checkout master
```

And finally create and checkout a new branch `in-class`.

```bash
git checkout -b in-class
```

## Implementation (15 minutes / 0:45)

Between our user stories and wireframe(s) we have a pretty comprehensive understanding of how we want our app to work.
We can always come back and add / update but as soon as we have a sense of what MVP looks like, we want to start writing code.

User interaction is inherently complicated.
There are many ways a user can interact with our app and it can difficult to even think of them all.
For this reason, it is very helpful to think of user interaction in isolation from the core logic of the application.

Additionally, we want to keep our "[truth out of the DOM](https://www.infoq.com/presentations/Getting-Truth-Out-of-the-DOM)" so that we don't have lots of DOM interaction cluttering up our app's "business logic".
DOM interaction is also inefficient and we want to minimize it.

For these reasons, it is a common approach to seperate the **model** (core behavior of the app; in our case going from one temperature to others) from the **view** (the behavior supporting user interactions; in our case responding to input and displaying output).

We will build the model first and then add the view to allow the user to interact with the model.

### Model (20 minutes / 1:05)

The first step of defining the model is identifying the pieces of data necessary to describe our application.

This is called the "model" or "state".

For the temperature converter we need:

- Current input temperature (number)
- Current input temperature unit
- Temperature in celsius
- Temperature in kelvin
- Temperature in farenheit

After we've identified the data needed to describe our application, we want to identify the logic that our application needs to accomidate the model data (this is as opposed to the logic needed to manage the user interface).

- Convert farenheit to celsius
- Convert farenheit to kelvin
- Convert celsius to farenheit
- Convert celsius to kelvin
- Convert kelvin to celsius
- Convert kelvin to farenheit
- Set the temperature and unit
- Get the temperatures

This is the interface for our `TemperatureConverterModel`.

We now want to build out the logic at the core of our app (not worrying yet about user interaction)

```js
class TempConverterModel {
  constructor (temp, unit) {
    // Initializes a temperature converter
  }
  setTemp (temp, unit) {
    // Updates TempConverterModel's internal state
  }
  getTemps () {
    // Returns the currently set temperature in each unit
  }
  cToF (cTemp) {
    // Convert celsius to farenheit
  }
  cToK (cTemp) {
    // Convert celsius to kelvin
  }
  fToC (fTemp) {
    // Convert farenheit to celsius
  }
  fToK (fTemp) {
    // Convert farenheit to kelvin
  }
  kToC (kTemp) {
    // Convert kelvin to celsius
  }
  kToF (kTemp) {
    // Convert kelvin to farenheit
  }
}
```

Built out, the `TempConverterModel` might look like:

```js
class TempConverterModel {
  constructor (temp, unit) {
    this.setTemp(temp, unit)
  }
  setTemp (temp, unit) {
    this.temp = temp
    this.unit = unit
    return this.getTemps()
  }
  getTemps () {
    switch (this.unit) {
      case 'c':
        return {
          c: this.temp,
          f: this.cToF(this.temp),
          k: this.cToK(this.temp)
        }
      case 'f':
        return {
          f: this.temp,
          c: this.fToC(this.temp),
          k: this.fToK(this.temp)

        }
      case 'k':
        return {
          k: this.temp,
          c: this.kToC(this.temp),
          f: this.kToF(this.temp)
        }
    }
  }
  cToF (cTemp) {
    return cTemp * 9 / 5 + 32
  }
  cToK (cTemp) {
    return cTemp + 273.15
  }
  fToC (fTemp) {
    return (fTemp - 32) * 5 / 9
  }
  fToK (fTemp) {
    return this.fToC(fTemp) - 273.15
  }
  kToC (kTemp) {
    return kTemp - 273.15
  }
  kToF (kTemp) {
    return this.cToF(this.kToC(kTemp))
  }
}
```

This code is found in the `add-model` branch.
If you are working along and have an `in-class` branch, you can overwrite your code with the code from `add-model`:

```bash
git reset --hard add-model
```
Note: this will overwrite any work you've done on your `in-class` branch.
If you would like to keep your work and add selectively, find the code on the [appropriate branch on GitHub](https://git.generalassemb.ly/ga-wdi-lessons/js-model-view-seperation/tree/add-model/code) and copy the code you would like to add.

This now is all of the data and logic our temperature converter model requires.

We can interact with it in the browser console and ensure it works properly.

Next we will look at the logic that handles the user interaction.

## Break (10 minutes / 1:15)

## View (20 minutes / 1:35)

The first thing we want to do in our view is target all of the important elements from the page to our app.

These are:
- The temperature input
- The unit input
- The temperature displays ('F', 'C', and 'K')

We also want to define logic for the interaction with the input fields

We want a method that will attach these event listeners to the relevant DOM elements (keeping in mind context).

And finally a render method which will update the page with the values from the model.

Our interface will look something like this:

```js
class TempConverterView {
  constructor (model) {
    // store the model as a property
  }
  init () {
    // target relevant elements
  }
  listen () {
    // associate event listeners with inputs
  }
  handleChange () {
    // event listener for inputs
  }
  render () {
    // update displays based on model
  }
}
```

After our class definitions, we need to add code to start up the app:

```js
$(document).ready(function () {
  const tcModel = new TempConverterModel()
  const tcView = new TempConverterView(tcModel)
  tcView.init()
})
```
Note that we initialize in an event listner for the `document` 'ready' event

A possible implementation is:

```js
class TempConverterView {
  constructor (model) {
    this.model = model
  }
  init () {
    this.inputs = {
      temp: $('#temp'),
      unit: $('#unit')
    }
    this.displays = {
      f: $('#f-temp'),
      c: $('#c-temp'),
      k: $('#k-temp')
    }
    this.model.setTemp(
      Number(this.inputs.temp.val()),
      this.inputs.unit.val()
    )
    this.listen()
    this.render()
  }
  listen () {
    this.inputs.temp.on('change', this.handleChange.bind(this))
    this.inputs.unit.on('change', this.handleChange.bind(this))
  }
  handleChange () {
    const temp = Number(this.inputs.temp.val())
    const unit = this.inputs.unit.val()
    this.model.setTemp(temp, unit)
    this.render()
  }
  render () {
    const {f, c, k} = this.model.getTemps()
    this.displays.f.text(f)
    this.displays.c.text(c)
    this.displays.k.text(k)
  }
}
```

If you are working along and have an `in-class` branch, you can overwrite your code with the code from `add-view`:

```bash
git reset --hard add-view
```

Or, find the code on the [appropriate branch on GitHub](https://git.generalassemb.ly/ga-wdi-lessons/js-model-view-seperation/tree/add-view/code) and copy the code you would like to add.

This is everything we need for our temperature converter MVP!

## Next Steps (15 minutes / 1:50)

At this point we want to spend some time looking for edge cases / making sure everything behaves as expected.
When we are happy with behavior we can refactor and organize our code.

"**[Refactoring](https://refactoring.com/)** …is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.

Its heart is a series of small behavior preserving transformations. Each transformation (called a “refactoring”) does little, but a sequence of transformations can produce a significant restructuring. Since each refactoring is small, it’s less likely to go wrong. The system is kept fully working after each small refactoring, reducing the chances that a system can get seriously broken during the restructuring."

We can also organize our code by splitting it into specifically focused files.

Let's pull `TempConverterModel` and `TempConverterView` into their own files. It is a very common pattern for a classes to get their own files.

If you are working along and have an `in-class` branch, you can overwrite your code with the code from `seperate-files`:

```bash
git reset --hard seperate-files
```

Or, find the code on the [appropriate branch on GitHub](https://git.generalassemb.ly/ga-wdi-lessons/js-model-view-seperation/tree/seperate-files/code) and copy the code you would like to add.

## Q&A and Model / View seperation in ATM

For the remainder of class, pull up the ATM lab you worked on this morning and try refactoring to have a model / view seperation.

Keep in mind, you don't necessarily need classes to persue a conceptual seperation.

## Review

- What are two techniques we can use for early planning (before we start writing code)?
- Why is planning such an important step of development?
- What is "analysis paralysis"?
- Why do we seperate our conceptual Model and View?
- What is the role of the model?
- What is the role of the view?
- What does "refactor" mean?
