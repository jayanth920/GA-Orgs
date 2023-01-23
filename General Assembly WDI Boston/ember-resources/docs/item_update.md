## Ember CRUD - Data Down, Actions Up (DDAU)

Now that we have models loaded in our Routes, it's finally time to tie all of
this together.

Before talking about CRUD, though, we should start by talking about something
we touched on in the material on Components: 'actions'. 'Actions' are a special
class of trigger-able events that are handled by the `Ember.ActionHandler` Ember
Class. Similar to DOM events that 'bubble up', in Ember, we send actions up.
Sending actions from the inner most component up to its parent components
and eventually to the route so we can persist data to the API.

In this case, Components and Routes both incorporate `Ember.ActionHandler`, so
we can instead set our action handlers there. *All handlers related to Model
CRUD must go into the Route*, any other action handlers can be placed in either
place.

Defining Action handlers in a Route is very easy. Simply open up the `route.js`
file and make the following addition:

```js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(...){
    ...
  },
  actions: {
    create () { ... },
    update () { ... },
    destroy () { ... },
    // ... etc
  }
});
```

To trigger an action, you can add an `{{action ... }}` helper to an element
(usually a button) - this will cause that element to launch the action whenever
it executes its defaults behavior (in the case of a button, being clicked).

In Ember applications that use Components (which will soon be all of them) the
generally recommended strategy is to follow a 'data down, actions up' design
pattern, which essentially means two things:

1.  All Components look to their parent element as a source of data to bind to;
    as a result, data changes propagate 'downwards' from parent to child.
1.  Implicit in the first point is that all changes to data take place in the
    parent.  In order to effect changes to the data in a parent element,
    Components trigger their parents' actions; in this fashion, action
    invocations propagate 'upwards' from child to parent.

### Persist item changes to the API

1.  In the `shopping-list/item` component
    1.  Make listItemCompleted a computed property alias of the 'done' property of the bound `item` object (referred to as 'item.done')
    1.  Change toggleDone to send that action up
1.  In the `shopping-list` component
    1.  Add `toggleDone='toggleItemDone'` to invoking `shopping-list/item`
    1.  Add the toggleItemDone action handler to send the action up
1.  In the `list` route
    1.  Add `toggleItemDone='toggleItemDone'` to invoking `shopping-list`
    1.  Add the toggleItemDone action to the route
