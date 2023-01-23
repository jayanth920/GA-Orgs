[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ember Components

Components are used to encapsulate (repetitious) markup and tie it to behavior.
Instead of separating our concerns along technological lines (HTML, CSS, JS),
components tie all three of these technologies together under a unified visual
element in the user interface.

## Prerequisites

- [ga-wdi-boston/ember-object](https://git.generalassemb.ly/ga-wdi-boston/ember-object)
- [ga-wdi-boston/ember-routing](https://git.generalassemb.ly/ga-wdi-boston/ember-routing)

## Objectives

By the end of this, developers should be able to:

- Model the user interface using components.
- Represent visual hierarchies with nested components.
- Register actions and click handlers on component objects.
- Pass data down from routes to components, and from components to components.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Install dependencies with `npm install`.

## Components Represent a Visual Element

> From [Communication Between Distant Components - Ember Igniter](http://emberigniter.com/communication-between-distant-components/)
![component hierarchy](https://cloud.githubusercontent.com/assets/388761/12339386/dc1cc062-bae2-11e5-85be-ae33da715b2c.png)

![](https://i.stack.imgur.com/sV364.png)

## Follow-Along: Wireframe the Shopping Lists Interface

Let's wireframe the [Shopping Lists
client](https://git.generalassemb.ly/ga-wdi-boston/listr-client) application
interface with a focus on identifying different logical interface elements.
We'll call these visual elements "components".

![shopping list demo](https://cloud.githubusercontent.com/assets/388761/12339395/e809372a-bae2-11e5-8073-89bcee5a7351.png)

## Code-Along: Create Shopping Lists Index Route

We'll need to generate the application index route and template as a landing page.

```js
ember generate route index
```

```js
//app/routes/index.js
import Route from '@ember/routing/route';

export default Route.extend({

 });
```

NOTE: there is no model hook for the index route because we currently don't need to pull in any data on initial page load.

```html
<!-- app/templates/index.hbs -->
  <h2>Welcome to Shopping Lists!</h2>
  {{#link-to 'lists'}}Check out the lists{{/link-to}}
```

We already have a lists route defined with some data hard coded in, so we
should be able to use this new link right away!

## Code-Along: Create a List Component

Since the list is a visual component of our UI, we should actually pluck that
out into an Ember component.

What are some of the advantages of converting our list markup into a component?
Besides the fact that it is less semantic to have an each block inside of an
each block, our code becomes much DRY-er if we ever want to reuse this format
in other parts of our application.

Let's name it `shopping-list` to follow best practices. We wouldn't want to clash
with any new HTML elements in future specs!

```js
ember generate component shopping-list
```

Now, we can move our previous markup to the `shopping-list`'s template.js.

After doing this, we can simply reference this component inside our `lists.hbs`
file. However, there is one more thing we need to do in order for the reference
to our component to work: We need to tell the component that we are rendering
what we are passing down as a 'list'. In order to avoid confusion, I am going
to rename 'list' in my `each` block to 'listOfItems'. I can then pass down
'listOfItems' as 'list' inside my component.

## Lab: Create a List Item Component

Just like the list itself, each list item is an individual visual component of
our UI. Create a list item component and name it `shopping-list/item`.

## Code-Along: Toggle Display of a List

Toggle display of list on header click.

Let's explore Ember's [`classNameBindings`](https://guides.emberjs.com/v2.18.0/components/customizing-a-components-element/)
and see if that can help us achieve this toggle.

You may have noticed that when you generate a component in Ember, you get a
file in a `components` folder in addition to the file we've been working with
inside `templates/components`. It is in this first file that we can add
classNameBindings to our component.

After adding our classNameBindings and our actions, we will need to add our CSS
to the class we created and attach our action to the appropriate handlebars
element.

After we have successfully added our styles in `app/styles/shopping-list.scss`, let's
make sure not to forget to import this file in `app/styles/app.scss`.

## Lab: Toggle Strike-Through of a List Item

Create an action of `toggleProperty` that toggles a `classNameBindings` of
`listItemCompleted`. This class should have a CSS style declaration that
strikes through completed list items.

## Additional Resources

- [Ember Component Guide](https://guides.emberjs.com/v2.18.0/components/defining-a-component/)
- [Ember Component API Documentation](https://emberjs.com/api/classes/Ember.Component.html)
- [Ember Actions](https://guides.emberjs.com/v2.18.0/templates/actions/)
- [Ember Action Handler](http://emberjs.com/api/classes/Ember.ActionHandler.html#method_send)
- [Parent to Children Component Communication for UI State - Ember Igniter](http://emberigniter.com/parent-to-children-component-communication/)
- [Communication Between Distant Components - Ember Igniter](http://emberigniter.com/communication-between-distant-components/)
- [Ember Best Practices: Actions Down, Data Up... wait what?](https://dockyard.com/blog/2015/10/14/best-practices-data-down-actions-up)
- [How Ember Data affects data down, actions up](http://www.samselikoff.com/blog/how-ember-data-affects-data-down-actions-up/)
- [Data Down, Actions Up tutorial](https://emberigniter.com/getting-started-ember-cli-data-down-actions-up-tutorial/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
