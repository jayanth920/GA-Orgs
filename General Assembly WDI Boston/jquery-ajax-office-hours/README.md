[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery Ajax Office Hours

An extension of the [jquery-ajax-crud](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-crud)
lesson using the Library API hosted at [https://wdi-library-api.herokuapp.com](https://wdi-library-api.herokuapp.com).

## Prerequisites

- [html-css](https://git.generalassemb.ly/ga-wdi-boston/html-css)
- [jquery-dom](https://git.generalassemb.ly/ga-wdi-boston/jquery-dom)
- [jquery-ajax-crud](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-crud)

## Objectives

By the end of this, developers should be able to:

- C(reate) a resource,
- R(ead) a single resource,
- R(ead) all resources,
- U(pdate) a resource,
and
- D(elete) a resource from the Library API.
- Display the results of CR(R)UD actions for the user.

## Preparation

1. Fork and clone this repository.
1. Change into the new directory (`cd`).
1. Create and checkout a new branch, named `response`.
1. Follow the directions given in the [Instructions](#Instructions) section of
this file.
1. When finished, push to your fork and submit a pull request.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone), and [pull
requests](https://github.com/ga-wdi-boston/meta/wiki/PullRequest).

## Instructions

All resources in the Library API follow this pattern:

| Verb   | URI Pattern  | Controller#Action  |
|:-------|:-------------|:-------------------|
| GET    | `/resource`     | `resource#index`  |
| GET    | `/resource/:id` | `resource#show`   |
| POST   | `/resource`     | `resource#create` |
| PATCH  | `/resource/:id` | `resource#update` |
| DELETE | `/resource/:id` | `resource#destroy`|

For each of the following resource sections, take a look at the linked
documentation and listed user stories. Then, in `app/`
create a folder for each resource and the files `events.js`, `api.js`, and
`ui.js` inside. Follow the steps in the [Methodical Approach](#methodical-approach)
section to fullfill all user stories and represent the following mockup in the
browser.

![crud website mockup](https://media.git.generalassemb.ly/user/16103/files/602cbb00-0397-11e9-8d1f-402b3c2df65a)

Based on the above mockup, in the html file for each resource (`authors.html`,
`members.html`, and `librarians.html`), replace `<Resource(s)>` with the name of
the resource you are CRUD-ing. For Update and Create you may need to add more
input elements to your form than appear in this basic mockup to cover all fields.
You can display individual and lists of resources in the `<Content appears here>`
box area, but don't feel the need to worry about any styling.

### Authors

[`Authors` Documentation](https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/authors.md)

#### User Stories:

- As a user, I want to be able to see all Authors
- As a user, I want to be able to see a single Author
- As a user, I want to be able to create a new Author
- As a user, I want to be able to update an existing Author's data
- As a user, I want to be able to delete an existing Author

### Members

[`Members` Documentation](https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/members.md)

#### User Stories:

- As a user, I want to be able to see all Members
- As a user, I want to be able to see a single Member
- As a user, I want to be able to create a new Member
- As a user, I want to be able to update an existing Member's data
- As a user, I want to be able to delete an existing Member

### Librarians

[`Librarians` Documentation](https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/librarians.md)

#### User Stories:

- As a user, I want to be able to see all Librarians
- As a user, I want to be able to see a single Librarian
- As a user, I want to be able to create a new Librarian
- As a user, I want to be able to update an existing Librarian's data
- As a user, I want to be able to delete an existing Librarian

## Methodical Approach
1.  Test API in browser (if possible)
1.  Test API with curl script
1.  Add feature to web application with AJAX
    1.  Add a form to `index.html`.
    1.  Add a input fields and submit input to the form.
    1.  Add an event listener to the form in the document ready event in
 `app/app.js`.
    1.  Add a submit handler to pass as callback to event listener
  `app/<resource>/events.js`.
    1.  Add a API call in `app/<resource>/api.js`.
    1.  Add a success and failure handler in `app/<resource>/ui.js`.

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

## Bonus Challenges

### Pokemon API

- [Pokemon API](https://pokeapi.co/)

1.  On page load, make an AJAX call to get pikachu data and display the following data on the page
- name
- height
- weight
- sprites front_default as image
- moves as list of names
- ability as list of names

### Dogs API

- [Dog API](https://dog.ceo/dog-api/)

1.  On page load, make an AJAX call to display a random dog image on the page.
2.  On page load, make an AJAX call to list all the dog breeds on the page.

Challenge
- Make each dog breed clickable and on click display all dog images for that breed.

### GOT API

- [Game of Thrones API](https://anapioficeandfire.com/)

Research the data on your own and use it how you'd like!

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
