[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Client Routing

Why a router?  Shouldn't this go on the back end?

Before the advent of the SPA, the job of serving pages was left to the server
side of the equation (think Rails views).  You would make a request and the
server would handle populating and delivering a view to the client.

Fast forward a number of years where browsers are more advanced, the internet is
faster and users expect quick results.  A front end router lets us handle state
changes more efficiently.  Instead of having to rerender and entire page we can
only chose to change what we need. We can also serve more information faster so
instead of having to send entire pages from the server to the client we can send
smaller bits of data (like JSON) and let the client side handle the job of
rendering.

Router.js is a lightweight router that is used in Ember. We have included the
router in this template for your use.

## Prerequisites

-   Javascript
-   jQuery
-   Handlebars

## Objectives

By the end of this, developers should be able to:

-   Write a client router with appropriately named routes
-   Create click events that navigate between view states
-   Render data retrieved from an API based on a route

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install`.

## Lab: Exploring Router.js

-   Take some time groups of two or three and explore all of the files and
    folders in the scripts directory.

-   After looking through the files run `grunt serve` in the root of the
    directory to fire up your grunt server and navigate to `localhost:8080`. If
    there were parts of the code you didn't understand use `debugger` statements
    to clarify your understanding.

-   Be ready to answer questions to on what is happening with the router.  Also
    where you would write various pieces of your code.

## Demo I: Without Client Routing

Watch as I quickly create a webapp without using a client side router.

I am just going to be using the [browser-template](https://github.com/ga-wdi-boston/browser-template) for this.

Don't try to follow along for this, I will be moving quickly. Instead think
about the difference between what I am creating and what you understand from
the previous lab.

## Demo II: Investigating the Router

Please watch as I create a cat's route.  You can follow along on your machine
if it helps but you will be creating your own route shortly, so feel free to
watch.

### Creating a Route (for Cats)

I'm going to start by adding a button to my navbar so I can easily access my
route then I'm going to attach a click event to it.  Creating a button isn't
necessary for the route but it makes it easy to test and makes for a more
understandable demo.

In my HTML I'm going to add the following code to my navbar:

```html
<li><a href="#cats">Cats</a></li>
```

Cool, so now I have a line item, let's take a look in `router/index.js`.
Notice a pattern in the `Routes` array?  I'm going to follow that pattern and
add to it:

```js
{ name: 'cats', path: '/cats' },
```

Now when we click the `cats` button in our navbar we can see the URL change.

Take in look in `index.html`, notice a pattern? I'm going to follow that
pattern:

```html
<div id="cats" class="hidden">
  <h2>Cats</h2>

  <p>I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
    I like cats! I like cats! I like cats! I like cats! I like cats!
  </p>
</div>
```

## Lab: Adding your own route

-   Create "Book" route.
-   Change the view state.
-   Add some [Cat Ipsum](http://www.catipsum.com/index.php).

## Lab: Connecting an API

Using the following site for dummy JSON please perform the following steps:

API endpoint: `http://jsonplaceholder.typicode.com/posts`

We learned how to make API requests and have used them in all previous projects
let's take that knowledge and hit an API.

-   Change the content of your `Books` div to reflect the API payload.

## Bonus

-   After doing the above, try to do the same but with a nested route, so it
   would looks something like `localhost:8080/book/:id`

## Additional Resources

-   [Router5](http://router5.github.io)
-   [page (router)](http://smalljs.org/client-side-routing/page/)
-   [Router.js](https://github.com/tildeio/router.js/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
