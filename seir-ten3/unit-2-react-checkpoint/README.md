[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Checkpoint: React

‼️ This is a timed activity. Please do not begin until it's time!

## Setup

Fork and clone this repo. When you are ready, submit your work via a pull request on the original repo.

**Before you begin anything, run `npm install` to download the dependencies.**

## Instructions

You're going to build a simple contact list manager using React and React
Router. An initial set of contacts and some
CSS has been provided in `src/styles/index.css`.

> See a demo of the final app at
> [https://tng-contacts.netlify.app](https://tng-contacts.netlify.app)

#### 🚨 Warning: Most of the component files are empty! If you try to import and use an empty component file, you'll get an Error: element type invalid. Scaffold out some basic code in each of your components to start.

### Setup

Inside `index.js`, import React Router and pass it to `ReactDOM.render()` as the
root component with `<App>` as a child component.

### `<App>`

Your `<App>` component should have state with a `contacts` property that is initially set to an empty array.

<details>
    <summary>Hint</summary>

```js
const [contacts, setContacts] = useState([]);
```

</details>

<br>

Use what you learned about useEffect to make a fetch request when the component mounts and load the contacts in the state. Set the url to use in your request as: `'/contacts.json'` -- this will fetch from the `contacts.json` file in your `public` folder.

<details><summary>Hint</summary>

```js
// inside a useEffect in App.js
fetch('./contacts.json')
	.then((res) => res.json())
	.then((data) => {
		// do something with the data
	});
```

</details>

<br>

Your `<App>` component should also render:

- A div with a className of `'App'`
- Your `<Header>` component
- A `<Routes>` component, in which you have:
  - Two `<Route />` components:
    - If the route path is `"/"` then render the `<ContactList>` element and pass the contacts in state to it as a prop named `contacts`.
    - If the route is `"/new-contact"` then render the `<NewContact>` component;

### `<Header>`

Your `<Header>` component should render:

- A `<header>` element with an `<h1>`
- A `<nav>` containing two React Router `<Link>`s, one to the homepage (`"/"`) and the other to create a new contact (`"/new-contact"`)

### `<ContactList>`

`<ContactList>` should take `contacts` as a prop

It should render:

- A `<Contact>` component for each contact object inside of the `contacts` prop. Each contact component should be passed one contact object as a prop named `contact`.
- A `<div>` with a class of `contact-list`.

> Don't forget to use a key prop! Because our contacts are just a hard coded list, you can use the contact's email as the key.

### `<Contact>`

Your `<Contact>` component will render a single contact.

It should render:

- An outer `<div>` with a className of `contact`
- An include an `<img>` for the `image`,
- `<h3>` for the `name`
- `<h4>` for the `email`.

### `<NewContact>`

Your `<NewContact>` component should render:

- A `<div>` with a className of `new-contact`
- An `<h1>` with a text of `New Contact`
- A form with inputs for the `name`, `email` and `image`.
- Each input should have a **id** and corresponding label element

### Bonus:

Make your New Contact form functional! When a new contact is submitted, you should save the new contact by updating your state inside of `<App>` and redirect the user back to the homepage/list of contacts.

Hint: You'll need to use either the `Navigate` or `useNavigate` hook to redirect back to the homepage after submitting a new contact.

> Note: Changes in state are ephemeral. Refreshing the browser will cause you to lose the newly created contact. In upcoming units, we will learn how to persist data to an API.

## Rubric

- [ ] App component is defined and exported
- [ ] App component accepts the `contacts` json objects as a prop and the `contacts` json object is properly passed
- [ ] Router is defined and setup in index.js
- [ ] Routes include a Route for the homepage (`"/"`) and for the new contact page (`"/new-contact"`)
- [ ] Header component is defined and exported
- [ ] Header component contains a title and two `<Link>`s, one to the homepage and
      the other to the new contact page
- [ ] ContactList component is defined and exported
- [ ] ContactList component iterates through the contacts, rendering a Contact
      component for each
- [ ] Contact component is defined and exported
- [ ] Contact component is rendering the image, name and email address of a contact
- [ ] NewContact is defined and exported
- [ ] NewContact contains a form

### Bonus

- [ ] NewContact adds a new contact to the parent App component
      state
