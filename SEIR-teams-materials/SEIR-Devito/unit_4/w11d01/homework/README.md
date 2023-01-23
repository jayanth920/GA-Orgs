[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# React Groceries

![](https://images.ecosia.org/MRnvtai7ZRon25BJPyNToTIqJLU=/0x390/smart/https%3A%2F%2Fthedinnerdaily.com%2Fcms%2Fwp-content%2Fuploads%2F2015%2F12%2Fgrocery-store-32227-1920x1080.jpg)

Build an app that let's you make a list of groceries to buy

#### Learning Objectives

- Practice setting up a React app
- Practice Mocking a React app
- Practice using state
- Practice rendering a list
- Practice conditional rendering

#### Prerequisites

- Introduction to React static components, mocking, state, rendering

---

## Getting Started

1. `mkdir react_groceries`
1. `cd react_groceries`
1. `touch index.html app.js`
1. add all of the scripts for a react app

## Deliverables

Build a grocery app that allows users to make a grocery list

## Technical Requirements
1. Read over these specs and draw a mockup of your app (don't worry about bonus features at this point)
1. Make an array of at least 3 objects using the following format

```js
{
  item: '',
  brand '',
  units: '',
  quantity: 0,
  isPurchased: false
}
```
1. Render the grocery items from your array, display the item, brand, units, and quantity
1. Make a form so that new items can be added
1. Update your app to _conditionally_ render the grocery items on your page based on whether or not they were purchased 
1. Add some style to your app!

**Stretch goal:** Add a button for every item that says 'remove' and when clicked the value of `isPurchased` is toggled for that item

## Submission Guidelines

- Must be submitted no later than before the start of next class

## Hungry for more
- Make multiple grocery lists (one for each family member) and have them update independently
- sort your list alphabetically
- create other ways to sort your data (ie by quantity)
- change the 'remove' button's functionality to atually remove the item from the list
- add a 'later' button that toggles the css (gray text, strikeout etc.) if the item should be purchased later
- expand your app to allow for images (the images should be an http url ) and then render the image in your app - some images may take longer to load and not appear correctly, look into react life cycle events and/or lazy loading (if that is too much just keep trying images, some will work and save lifecycles/lazy loading for later)

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
