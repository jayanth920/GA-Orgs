![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ember Views

## Lesson Details
### Foundations
At this point, students have already learned how to:

- Create a new Template using `ember g`
- Configure the Ember Router to point to a new Template.
- Create nested Views and route to them appropriately.

### Objectives
By the end of this lesson, students should be able to:

- Create and initialize a new Ember View.
- Use an Ember View to handle events triggered within a routable template.

## Ember Views
Ember Views are objects that represent the UI element described in detail by a Template. Ember 2 does not officially support Views at all (and, in fact, has completely eliminated `Ember.View`), seeking to replace them with Components. However, because Components are not yet routable, a routed Template cannot sit inside a Component (though it can contain Components); consequently, any events that happen in that template _cannot be caught_ by event handlers in a Component. Thus, at least in the scope of this course, we will continue to teach Views for the very limited use case of catching events that don't occur within Components.

In order to address this use case, and to generally ease the transition from Views to Components, the Ember team has released an [add-on](https://github.com/emberjs/ember-legacy-views) for Ember 2 that allows it to support `Ember.View` for a little while longer. This add-on can be downloaded by running the command `ember install ember-legacy-views`

Let's look at a simple example of how an Ember View can be applied to an existing page to add some simple behavior.

Consider our application from the previous lesson, on routing. What if we wanted something to happen while on the 'about' page whenever we clicked?

Given that the templates already exist, all we would need to do is
1. Generate a new View to go along with the 'about' Template, by running the command `ember g view about`. This will create a new file called `view.js` inside the `app/about` directory.

2. Inside the new `view.js` file, define a method called `click` that does something, such as printing text out to the console.
```javascript
import Ember from 'ember';

var i = 0;

export default Ember.View.extend({
  click: function(event){
    i += 1;
    console.log("I've been clicked " + i + " time(s).");
  }
});
```

That's it! You've now set an event handler in a View.

There are many different kinds of events that can be handled in Ember. Here's a list of most of the events that you'll come across:

**Mouse Events**
* `mouseUp` / `mouseDown`
* `click` / `doubleClick`
* `mouseMove` / `mouseEnter` / `mouseLeave`

**Keyboard Events**
* `keyUp` / `keyDown` / `keyPress`

**Form Events**
* `submit`
* `change`
* `focusIn` / `focusOut`

There are also some more obscure events, like those related to drag & drop, or responding to 'touch' triggers from mobile devices.

Handlers for all of these events (and more) can be set in Views _or in Components_, so keep this lesson handy for when we cover Ember Components - that's where we'll be doing the majority of our event handling.

## Additional Resources
- [Ember 2.0 Release Notes](http://emberjs.com/blog/2015/08/13/ember-2-0-released.html) - contains some info about preserving functionality of applications with top-level Views.
