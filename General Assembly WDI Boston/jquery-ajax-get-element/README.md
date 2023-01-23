[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery AJAX GET Element

## Prerequisites

-   [Ajax Get Collection](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-collection)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests using `curl`, the browser address bar, and AJAX for:
  - A specific resource.
- Use response data in future requests.

## Preparation

1.  [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.


We'll make requests of and receive responses from the same HTTP server we used in [jquery-ajax-get-collection](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-collection)

This server is deployed at https://wdi-library-api.herokuapp.com

### How to use `getFormFields`

To be able to fetch data for just one book, we'll need a way to tell the API
which book we're looking for. One way to do this is to have the user input the
ID of the book they're looking for. It turns out that needing to grab some user
input and send it to the API is a very common problem in front-end web 
development.

To help solve that problem, we've included a function called `getFormFields` in
the template that we use for our lessons, which is also the template you'll use
for your projects. Let's take a look at how to use that function. 

First, your `<input>`s will need to be wrapped in a `<form>`, like this:

```html
<form id="my-form">
  <input name="book[id]" type="text">
  <input name="book[name]" type="text">
  <button type="submit">Get Book</button>
</form>
```
Then, in your Javascript, you'd do something like this:

```js
const getFormFields = require('<path to lib>/get-form-fields.js')

$('#my-form').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
})
```

Then, the `data` variable would look like this:

```js
{
  book: {
    id: "<whatever was entered in the ID input >",
    name: "<whatever was entered in the name input>"
  }
}
```

**Note:** In this training, and in your projects, you'll spread the above
Javascript across a couple different files to keep everything organized.

### GET /books/:id

Retrieve a book from the API

### Demo: Browser Single Book

Entering `https://wdi-library-api.herokuapp.com/books/1` into the chrome address bar.

### Demo: Curl Single Book

We'll use curl to retrieve the one book at a time.

### Code Along: Curl Single Book

Let's write that curl command into a script.

### Lab: AJAX Single Book

Again, take a stepped approach:

1.  Add a text input for a book id to the form in `index.html`.
1.  Retrieve the value of the id, if any, in the submit handler.
1.  Branch on that value in the submit handler.
1.  Add a single book retrieval method to `assets/scripts/books/api.js`.
1.  Add a single book success and fail handler to `assets/scripts/books/ui.js`.
1.  Invoke the single book retrieval method from the submit handler passing the
 success and fail callbacks.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
