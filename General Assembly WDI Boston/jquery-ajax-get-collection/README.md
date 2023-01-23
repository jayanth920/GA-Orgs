[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery AJAX GET

## Prerequisites

-   [http-study](https://git.generalassemb.ly/ga-wdi-boston/http-study)
-   [json-study](https://git.generalassemb.ly/ga-wdi-boston/json-study)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests using `curl`, the browser address bar, and AJAX for:
  -  A resource collection.
- Use response data in future requests.

## Preparation

Set up the client:

1.  [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.

We'll make requests to and receive responses from an HTTP server hosted at https://wdi-library-api.herokuapp.com

## Connecting to the library-api-guide

### GET /books

Retrieve a list of books from the API

### Demo: Browser Book Collection

Entering `https://wdi-library-api.herokuapp.com/books` into the chrome address bar.

If not already installed in chrome, let's add a [JSON formatting utility](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en).

### Demo: Curl Book Collection

`curl` is a command line utility for making http requests.  We'll use curl to
 retrieve the book collection.

### Code Along: Curl Book Collection

Let's write that curl command into a script.

### Code Along: AJAX book Collection

We'll take a stepped approach:

1.  Add a form to `index.html`.
1.  Add a submit input to the form.
1.  Add an event listener to the form in the document ready event in
 `assets/scripts/index.js`.
1.  Add a submit handler to pass as callback to event listener
  `assets/scripts/books/events.js`.
1.  Add a book collection retrieval method to `assets/scripts/books/api.js`.
1.  Add a collection success and fail handler to `assets/scripts/books/ui.js`.
1.  Invoke the collection retrieval method from the submit handler passing the
 success and fail callbacks.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
