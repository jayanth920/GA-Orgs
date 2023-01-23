Previous: [Back End](back_end.md)
Next: [React Navigate Views](react_navigate_views.md)

---

## Planning

- We're going to have an App component that will encompass two components
  - People
  - Companies
- We'll build the static components of all of people, and just put some dummy html ( a div ) as a placeholder for companies - you'll get to work on companies as a lab  or homework later
- Then, we'll start building stateful components of people


### People
 - Three components
  - button for new (toggles appearance of new form)
  - form for new (submit button and toggle back to list view)
  - list of people
    - click on person to see more details - button to return to list view
    - click delete to delete the person
    - click edit to see more details and a pre-filled form
    - edit form, pre-filled, submit button and toggle back to show

Most of the style is from the [Bulma CSS framework](https://bulma.io/).



Main/index view:

![](https://i.imgur.com/lEqTkAz.png)

New/Create view:

![](https://i.imgur.com/J7Tm71I.png)


Show/Edit/Update view:

![](https://i.imgur.com/M133kWy.png)


- As we work on the components, we'll decide if we need to make more components



## Setting Up React

We'll be working in the `public` directory.

This will be a single page application that will be the `index.html`

The CSS is already linked, there is  a small `main.css` file. Additionally, the Bulma CSS framework is being used

**Index.html** is already set up for you. We'll be attaching our React components to a div with a class of `container`


**js/app.js**

We're going to start in the js/app.js folder.

One of React's features is components. Typically, each component will get its own file. This helps with organization.

In a professional dev environment, there are additional tools like Webpack, Gulp, Docker and more that help with developing complex apps. One of the main features that we are not using, is that all of the javascript is compiled into one big file and that is what is attached to the index.html.

Our app is pretty tiny, in the end we'll have 6 components. So we're not going to worry about learning about these extra tools right now. Instead, we're just going to load them all through the `index.html`. They have already been linked and placed in the correct loading order.



Let's get started!

```jsx
class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <h1 className='title'> Labor Department 2.0 </h1>
        <div className='columns'>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
```

Expected Appearance:

![header](https://i.imgur.com/8G49Qtk.png)

Let's build out some more static elements

```

class People extends React.Component {
  render () {
    return (
      <div className='people column'>
        <h2> People </h2>
      </div>

    )
  }
}
class Companies extends React.Component {
  render () {
    return (
      <div className='companies column'>
        <h2>Companies</h2>
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <h1 className='title'> Labor Department 2.0 </h1>
        <div className='columns'>
        <People />
        <Companies />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
```

We're not dealing with companies and it's cluttering up our code

- cut and paste the Companies component into the file `/js/Companies.js`

```
class Companies extends React.Component {
  render () {
    return (
      <div className='companies column'>
        <h2>Companies</h2>
      </div>
    )
  }
}
```
- The link should have already been added like so:

```html
<script type="text/babel" src="js/Companies.js"></script>
<script type="text/babel" src="js/app.js"></script>
```

Everything should load the same on page reload. Being able to break react into multiple files will help with organization.

If at any time you feel that the companies component is cluttering up your view, feel free to remove it. You'll likely come back to it for hw or lab, but we won't work on it for the rest of this code along.

### Add a Form

This isn't a lesson typing, let's just copy paste this whole thing in and add the component below the `h2` in the `People` component

```jsx
class PersonForm extends React.Component {
  render () {
    return (
      <div className='field'>
        <form>
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input className='input' type='text' id='name'/>
          </div>
          <label className='label' for='age'>Age</label>
          <div className='control'>
            <input className='input' type='number' id='age'/>
          </div>
          <label className='label' for='key_skill'>Key Skill</label>
          <div className='control'>
            <input className='input' type='text' id='key_skill' />
          </div>
          <label className='label' for='phone'>Phone</label>
          <div className='control'>
            <input className='input' type='tel' id='phone' />
          </div>
          <label className='label 'for='avatar'>Avatar</label>
          <div className='control'>
            <input className='input' type='text' id='avatar'/>
          </div>
          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
        <button className="button is-link">Cancel</button>
      </div>
    )
  }
}
```

Expected Appearance:
![form visible for people](https://i.imgur.com/nlQcU9G.png)


Don't forget to put this component inside `People`

Remember, Atom let's us fold our code, maybe we should put this in a new file, but let's finish building out our stateless components first

![folded code](https://i.imgur.com/GjghhGE.png)

We may be tempted to start adding state, let's not. But we can put a button inside our `People` component that reads `Add a Person`

```jsx
class People extends React.Component {
  render () {
    return (
      <div className='people column'>
        <h2> People </h2>
        <button className='button is-success'>Add a Person</button>
        <PersonForm />
      </div>

    )
  }
}
```

Let's render the template for the people list. We want to see their avatar, a name an edit and a delete button.

I like vertical alignment so I am going to put this into a table.

GOTCHA: Using a table? React will insist you use the `tbody` tag.

```jsx
class People extends React.Component {
  render () {
    return (
      <div className='people column'>
        <h2> People </h2>
        <button className='button is-success'>Add a Person</button>
        <table>
          <tbody>
            <tr>
              <td>
              <img src="https://robohash.org/static_react_component13/?size=100x100&set=set4" alt="Felix Fancy Pants" />
            </td>
            <td className='person'>
              <h3> Felix Fancy Pants </h3></td>
            <td>
              <button className='button is-warning is-small'>Edit</button>
            </td>
            <td>
              <button className='button is-danger is-small'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <PersonForm />
    </div>
    )
  }
}
```
Expected Appearance:

![template table](https://i.imgur.com/7fueN3v.png)


## Person Component

Let's make a `show` view so we can see more about the person.

We'll show their
- avatar
- name
- age
- phone
- key skill
- company

- the form we have for new is pretty similar for what we want to use for edit, for now, as a placeholder, let's just add that form in

```jsx
class Person extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src="https://robohash.org/static_react_component13/?size=100x100&set=set4" alt="Felix Fancy Pants" />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Name:</span> Felix Fancy Pants </h3>
              <p className='tile is-child box'><span>Phone:</span> 555-555-5555</p>
              <p className='tile is-child box'><span>Key Skill:</span> Bug Squashing</p>
              <p className='tile is-child box'><span>Age:</span> 4 </p>
              <p className='tile is-child box'><span>Employed at:</span> Petscapades </p>
            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-warning'>See Full List</button>
          </div>
          </div>
        </div>
        <PersonForm />
      </div>
    )
  }
}

```

Don't forget to add this component to People

```jsx
</table>
<PersonForm />
<Person />
</div>
```

Expected Appearance:

![people static complete](https://i.imgur.com/wHRSluF.png)


Full Code:

```jsx
class PersonForm extends React.Component {
  render () {
    return (
      <div className='field'>
        <form>
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input className='input' type='text' id='name'/>
          </div>
          <label className='label' for='age' id='age'>Age</label >
          <div className='control'>
            <input className='input' type='number' />
          </div>
          <label className='label' for='key_skill'>Key Skill</label>
          <div className='control'>
            <input className='input' type='text' id='key_skill' />
          </div>
          <label className='label' for='phone'>Phone</label>
          <div className='control'>
            <input className='input' type='tel' id='phone' />
          </div>
          <label className='label 'for='avatar'>Avatar</label>
          <div className='control'>
            <input className='input' type='text' id='avatar'/>
          </div>
          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
        <button className="button is-link">Cancel</button>
      </div>
    )
  }
}

class Person extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src="https://robohash.org/static_react_component13/?size=100x100&set=set4" alt="Felix Fancy Pants" />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Name:</span> Felix Fancy Pants </h3>
              <p className='tile is-child box'><span>Phone:</span> 555-555-5555</p>
              <p className='tile is-child box'><span>Key Skill:</span> Bug Squashing</p>
              <p className='tile is-child box'><span>Age:</span> 4 </p>
              <p className='tile is-child box'><span>Employed at:</span> Petscapades </p>
            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-warning'>See Full List</button>
          </div>
          </div>
        </div>
        <PersonForm />
      </div>
    )
  }
}

class People extends React.Component {
  render () {
    return (
      <div className='people column'>
        <h2> People </h2>
        <button className='button is-success'>Add a Person</button>
        <table>
          <tbody>
            <tr>
              <td>
              <img src="https://robohash.org/static_react_component13/?size=100x100&set=set4" alt="Felix Fancy Pants" />
            </td>
            <td className='person'>
              <h3> Felix Fancy Pants </h3></td>
            <td>
              <button className='button is-warning is-small'>Edit</button>
            </td>
            <td>
              <button className='button is-danger is-small'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <PersonForm />
      <Person />
    </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <h1 className='title'> Labor Department 2.0 </h1>
        <div className='columns'>
        <People />
        <Companies />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)

```
