### List show route

1.  Generate a route for a single list
1.  Update `app/router.js` for the single list route
1.  Add the `model` hook to the `list` route
1.  Invoke the `shopping-list` component from the `list` route template
1.  Link to the `list` route from the `/lists` template

```sh
ember generate route list
```

Now that we've refactored Shopping List to use data from the API, we'll move on to
persisting changes.
