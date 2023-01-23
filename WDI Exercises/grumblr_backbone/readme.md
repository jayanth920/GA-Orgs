# Grumblr Backbone

## Part One

You've had a chance to define models and collections for grumbles in class. For homework,
we'd like you to set up both models and collections for comments on a grumble.

### Getting Started Tips

1. Define a model for a comment using `Backbone.Model.extend`
  - You know it worked if:
    - You can create a new comment in the console using
    - `var comment = new App.Models.Comment({authorName: "bob", content: "learned backbone today!!"})`
2. Define a comments collection using `Backbone.Collection.extend`
  - You know it worked if:
    - You can instantiate a comments collection 
    - `var comments = new App.Collections.Comments([comment1, comment2, comment3])`
3. Associate comments with models

Associations in backbone are a little tricky, but we can associate
two collections by modifying the Grumble model using `this` and an `initialize` method:

```js
// js/models/grumble.js
App.Models.Grumble = Backbone.Model.extend({
  urlRoot: "http://grumblr.wdidc.org/grumbles",
  initialize: function(){
    this.comments = new Comments();
    this.comments.url = this.url() + "/comments";
  }
});
```

### Bonus

Try CRUD'ing a few comments using the developer console and the public grumblr api: http://grumblr.wdidc.org/grumbles

---