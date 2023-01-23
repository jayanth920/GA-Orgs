[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery AJAX CRUD

## Prerequisites

- [http-study](https://git.generalassemb.ly/ga-wdi-boston/http-study)
- [json-study](https://git.generalassemb.ly/ga-wdi-boston/json-study)
- [jquery-dom](https://git.generalassemb.ly/ga-wdi-boston/jquery-dom)
- [library-api](https://git.generalassemb.ly/ga-wdi-boston/library-api)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests to an API using `curl` and AJAX to:
  - (R)EAD a resource collection.
  - (R)EAD a specific resource.
  - (D)ELETE a specific resource.
  - (U)PDATE a specific resource.
  - (C)REATE a new resource.
- Use response data in future requests.
- Store and retrieve ids using data attributes.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.
1. Run your front-end server with `grunt serve`

## Library API

| HTTP Method   | URL Path     | Result            | Action           |
|:--------------|:-------------|:------------------|:-----------------|
| GET           | /books       | read list of books| index or list    |
| GET           | /books/`:id` | read single book  | show or retrieve |
| POST          | /books       | create book       | create           |
| PATCH         | /books/`:id` | update book       | update           |
| DELETE        | /books/`:id` | delete book       | destroy          |

We'll make requests to and receive responses from an HTTP server hosted at
`https://library-express-api.herokuapp.com`.

If not already installed in chrome, let's add a [JSON formatting utility](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en).

In your browser, navigate to `https://library-express-api.herokuapp.com/books`
to read the list of books.

## What is AJAX

Traditional web applications send / receive data synchronously. For example,
a user would submit a form, then they would be redirected to a new page with
some information from the server.

This process disrupts the user's experience, as any time the client needs to
communicate with the server, there is a redirect to a new page.

AJAX is the solution to this problem! It's an acronymn for:

**A**synchronous **J**avaScript **a**nd **X**ML

AJAX allows web applications to communicate with a server behind the scenes
(asynchronously). (i.e. When using AJAX, the user may never know that your
app is communicating with your server!)

### AJAX in jQuery

jQuery has AJAX capabilities and provides functions to make AJAX development easier.

For the purpose of this lesson, anytime we say `ajax`, we will be referring to
the jQuery function [jQuery.ajax](https://api.jquery.com/jQuery.ajax/)
(a.k.a. `$.ajax`)

### curl

`curl` is a tool that can be used on the command line to transfer data to &
from a server.

**curl scripts do NOT interact with our HTML or JavaScript in any way.**

`curl` is a way to make requests from the command line much like `$.ajax` is
used to make requests from the browser.

<img width="600" src="https://media.git.generalassemb.ly/user/5965/files/c6394980-086e-11eb-9e15-9d72b8c8d4e5"
 alt="using $.ajax from the browser versus using curl from the command line">

Testing a server (API) with `curl` is great since it helps keep the scope of
the testing small. If you have a bug in your client, you want
to be sure that you know the API works (or doesn't work) before you start
debugging the entire full-stack application. If you can make an HTTP request
with `curl` successfully, you should be able to easily construct an `$.ajax`
function specifying the same URL path, headers, and data.

These curl scripts can be complicated or very simple! Try running the
following command in your terminal - what do you get back?

```bash
curl https://www.google.com
```

For the library API, we will use [these docs](https://git.generalassemb.ly/ga-wdi-boston/library-api)
for examples of `curl` scripts and to learn about the responses we should
expect from the API.

For more general examples of how to use `curl`, refer to the [documentation](https://curl.haxx.se/docs/httpscripting.html).

## Methodical Approach

### Methodical File Structure

![File Structure](https://media.git.generalassemb.ly/user/16320/files/0dfc5980-8356-11eb-9d87-4c93b45da1df)

### jQuery AJAX Checklist

- [ ] Test API in browser (if possible)
- [ ] Test API with curl script
- [ ] Test API with AJAX

To implement AJAX, complete each step below, testing your web app along the way
and using error-driven development to determine your next step.

1. Add the HTML:

    - [ ] Add an **html form** to `index.html`.
      - [ ] Add input fields (if required) and a `submit` input to the form.
      - [ ] Add appropriate name attribute to inputs.

2. Create the event listener:

    - [ ] Attach an **event listener** that listens for the form submit event
    in `app/app.js`.
      - [ ] Place the event listener within the **document ready** block.

3. Create the submit handler callback:

    - [ ] Create a **submit handler** function in `app/books/events.js`.
      - [ ] Prevent the default action.
      - [ ] Get form field values, if necessary.

4. Call the API:

    - [ ] Create a function to call the API:
      - [ ] Make an **API call** using **$.ajax** in `app/books/api.js`.
      - [ ] Invoke this function within your submit handler callback.
    - [ ] Test the response from the AJAX function:
      - [ ] Use `.then()` and `.catch()` to handle the successful and failed responses.
      - [ ] Use `console.log` within the `.then()` and `.catch()` methods
      (wrapped inside an anonymous function within the method parentheses)
      to determine if the function is working.

5. Handle the API response:

    - [ ] Create **success and failure handler functions** in `app/books/ui.js`.
    - [ ] Replace the console logs with the submit handler as a callback to the
    event listener.

6. Test it out!

    - [ ] Test the feature end-to-end.

      If errors occur or the results are not as you expected:

      - [ ] Open the console and repeat the steps, if an error is thrown, trace it
      to the offending line of code in your project.
      - [ ] If there are no console errors, or if you can't make sense of the
      error, work through each step again, adding `console.log` statements at
      each step in your program to confirm where errors exist.

    If no errors occur, confirm that:

    - [ ] Both the success and failure handler message are displayed on
    your page at the correct times.

      If you don't see your messages on the page:

      - [ ] Confirm that you have a `<div>` to hold the
      message on the page.
      - [ ] Make sure your response handler functions within
      `ui.js` are correctly selecting the message div element.

### How to Use `getFormFields`

As software developers, it is extremely important that we utilize tools that
have already been built. Some examples of this include using a new npm package,
utilizing an open source library, and using the code that your team members
have already written.

You may feel the need to try and understand every single piece of the code you
are using, but this is not necessary most of the time!

> For example, you only need to know how to operate your dishwasher, not how
> to build one.

In this lesson, we will use a function that has already been written for us.
This function is named `getFormFields`, and it's used to collect input values
from HTML forms.

We will focus only on how to use the function based on its documentation without
understanding all of the code inside.

Check out the documentation for using the [getFormFields function](get-form-fields.md).

## CRUD a Book

Wait, what is
[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
and why do you keep saying it?

CRUD is an acronym that stands for:

- **C**reate
- **R**ead
- **U**pdate
- **D**elete

These four words describe the four basic functions of persistently storing
data. They also closely relate to the HTTP methods that we can use to interact
with an API through requests. We'll discuss each of them as we code them out.

### Code Along: Index - (R)EAD Books Collection

- browser
- curl
- AJAX

### Code Along: Show -(R)EAD Specific Book

- browser
- curl
- AJAX

### Lab: Destroy - (D)ELETE Specific Book

- browser(?)
- curl
- AJAX

### Code Along: (U)PDATE Specific Book

- browser(?)
- curl
- AJAX

### Lab: (C)REATE New Book

- browser(?)
- curl
- AJAX

### Demo: UX

- Styled success and failure messaging
- Clearing Forms
- HTML5 Input Validation

## Event Delegation

When dealing with event delegation, we're faced with a small
problem that is simple to work-around if you know it exists. **Bubbling**
occurs when an event takes place on a child element of the
DOM that **does not** have an event handler of its own. In the scenario
that this happens, the browser will search up the DOM chain until it finds
an appropriate event handler.

<details>
<summary>What do you think would happen if I tried to add an event handler to something
contained in my template before it was rendered?</summary>
<br>
For events added to DOM nodes rendered after the document is ready, the event
should be added to the parent element that is rendered on page load so that when
an action is performed, the correct function is triggered for the event.
</details>

## Code Along: Dynamically Destroy Specific Book

Together we will add a delete button for every book we add to the screen when
indexing our books. This delete button is **dynamic** because it does not
need an `<input>` for the book's `id`.

We'll add a `data` *attribute* for the book's `id` to our delete button.
Then we will use the [jQuery `.data()` method](https://api.jquery.com/data/)
to access our book's id.

When the delete button is clicked on we will destroy the book. Since the delete
button is not initially on the screen we will use the
[jQuery `.on()`](http://api.jquery.com/on/) method's optional
[`selector` parameter](http://api.jquery.com/on/#direct-and-delegated-events)
to select the buttons.

## Lab: Dynamically Update Specific Book

Now it's your turn. In your teams you'll add a **dynamic** update form that
does not need an input for the book's *id*.

In your teams, work on the following:

- Add an *Update* form to each book displayed when indexing books.
- Give each *Update* form a `data-id` that corresponds to the book id.
- When the *Update* form is *submitted*, make a `PATCH` request to the API at
  `/books/:id`.
- Upon success, notify the user that the book has changed and that they will
  need to click "Get All Books".

>**Hints**:
>Use the jQuery `.on()` Documentation to apply the optional `selector` parameter.
>
>Use the jQuery `.data()` method to retrieve the id of the book to use in your
> API update request.

## Additional Resources

- [Learn jQuery AJAX](https://learn.jquery.com/ajax/jquery-ajax-methods/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
