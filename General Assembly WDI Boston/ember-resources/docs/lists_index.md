### Get and display list data from the Shopping List API

1.  Generate a `list` model
1.  Refactor the `lists` route `model` hook

```sh
ember generate model list title:string hidden:boolean
```

This will create a new `model.js` file inside `app/list`. The README for the API
shows us the data we can expect at [GET
/lists](https://github.com/ga-wdi-boston/listr-api#get-lists). Note that the
items returned are just ids.  We specified the properties that we want the
`ember-data` model to have.  We could grab _all_ of the properties from the API, but we're leaving off items because we haven't created an item model, yet.

`DS.attr` is how we define attributes for our models. The default types are
'number', 'string', 'boolean', and 'date', but we can define our own if we
really need to. We can also use `DS.attr` to specify a default value for a
given attribute by passing in an optional object as a second argument.

As we saw in the material on routing, each Route has a `model` method that
exposes data to the template. Each Route also has a `store` property which
refers to whatever data store our application is using (in this case,
ember-data), so to make the List model available in the `lists` route, we
reference the store and query it for all instances.

```js
export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list');
  }
});
```

### Get and display item data

1.  Generate an `item` model
1.  Add a hasMany to the `list` model

```sh
ember generate model item content:string done:boolean list:belongs-to:list
```
