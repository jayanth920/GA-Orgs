
### Create items on the API

1.  In the `shopping-list` component
    1.  Add a form after `each` with `{{action "createItem" on="submit"}}`
    1.  Add an input to the form with `value=newItem.content`
    1.  Add a `newItem` property
    1.  Add the `createItem` action to send the action up
1.  In the `list` route
    1.  Add `createItem='createItem'` to invoking `shopping-list`
    1.  Add the createItem action to the route

Does it work?

Unfortunately, no.  The API uses a nested route for creating new list items.
This doesn't fit directly with `ember-data`'s modeling of APIs, so we have to do
some extra work.

We'll extend the default application adapter, included in `ember-template` to
handle this case.
