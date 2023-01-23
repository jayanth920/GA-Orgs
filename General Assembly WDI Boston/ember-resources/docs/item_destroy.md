### Lab: Delete items on the API

1.  In the `shopping-list/item` component
    1.  Add a button with text "Delete" and `{{action 'delete'}}`
    1.  Add a `delete` action to send that action up
1.  In the `shopping-list` component
    1.  Add `delete='deleteItem'` to invoking `shopping-list/item`
    1.  Add the `deleteItem` action to send the action up
1.  In the `list` route
    1.  Add `deleteItem='deleteItem'` to invoking `shopping-list`
    1.  Add the deleteItem action to the route
