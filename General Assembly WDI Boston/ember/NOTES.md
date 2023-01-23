* Watchman was listed as optional in the walkthrough, so many of the developers might not have actually installed it.

* Running `tree` will generate a really large tree, so it may be helpful to simply direct the developers' attention to the one in the readme.

1. In which folder will mainly you be working?
  - You will mainly be working in the `app` folder

2. Where is the default HTML layout defined?
  - The default HTML layout is defined in `app/index.html`

3. Where will you find the ready-to-deploy files?
  - You can find the ready-to-deploy files in `app/app.js` ?

### Questions
* In your `routes` folder, does the name of the file determine the name of the route? Like `app/routes/index.js` would result in a route like `/index`?
  * Yes

* What is `export default`?
  * A way to only export a single function, variable, etc. rather than an object with a whole bunch of things.

* What is `import`?
  * Basically just an ES6 way of writing a `require` statement.

* Why is the `model` method listed like that?
  * That's an ES6 thing, it is equivalent to writing `model : function(){}`

* What is the `Router.map()` method? Is it at all related to the `Array.prototpye.map()` method?
  * No, this method is not at all related to `Array.prototpye.map()`. It is merely a way of connecting an Ember template to a url on your Route object. We'll get into this more in Ember routing.

* What is the `extend()` method on the end of `Ember.Route`?
  * This is simply a way of instantiating a new object using the `Route` constructor, with a additional methods or attributes. We will go further into this in `ember-object`

Not sure how in depth to go with the key parts of an Ember application... I feel like there will be a lot of questions here, but most of them will be answered at a later point. Try to defer as much as possible.

Essentially: The Ember Router maps a URL to a route. The Route Handler will then create an Ember Object, that will load a specific template and associate it with data from a model. The template will then render a component with the model data it has been associated with.
