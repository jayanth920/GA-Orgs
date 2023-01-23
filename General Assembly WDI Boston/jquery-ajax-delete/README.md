[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery AJAX Delete Element

## Prerequisites

-   [Ajax Get Element](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-element)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests using `curl` and AJAX to:
  - Delete a specific resource.
- Use response data in future requests.

## Preparation

1.  [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.

### DELETE /books/:id

Delete a book from the API

### Review: GET Single Book

First let's ensure we can get a book with a specific id.

Enter `https://wdi-library-api.herokuapp.com/books/1` into the chrome address bar to retreive a single book with `id=1`

We can also use curl to retrieve one book at a time.

### Demo: Delete Single Book using Curl

We'll use curl with the DELETE http verb to signify to our API that we want to delete the book

Why can't we delete a book using the browser address bar?

### Code Along: Write Curl Script

Let's write that curl command into a script.

### Lab: AJAX Delete Single Book

Again, take a stepped approach:

1.  Add a new form with text input for a book id to the form in `index.html`.
1.  Add a Delete button to the form.
1.  Add an event listener on the form's `submit` action within `assets/scripts/index.js`.
1.  Retrieve the value of the id, if any, in the submit handler.
1.  Branch on that value in the submit handler.
1.  Add a delete single book method to `assets/scripts/books/api.js`.
1.  Add a delete single book success and fail handler to `assets/scripts/books/ui.js`.
1.  Invoke the delete single book method from the submit handler passing the success and fail callbacks.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
