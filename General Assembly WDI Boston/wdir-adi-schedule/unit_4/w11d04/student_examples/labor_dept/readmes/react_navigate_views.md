Previous: [React Static Components](react_static_components.md)

Next: [Index](index.md)

---

### Adding State to People Component

Note: There is something called React Router which handles different views and updates the url. It is really nice and worth investigating if you have a lot of views.

Let's toggle the new form.

We can also toggle the display by using CSS or remove and add things to the DOM. Let's stick to what we've already seen.

**People**

```jsx
class People extends React.Component {
...
</table>
{this.state.addPersonIsVisible ? <PersonForm /> : ''}
<Person />
</div>

```

Our People component will have a few types of state,

By default, on page load, let's see
- `Add a Person` button (always visible)
- a list of people `peopleListIsVisible: true`

- new form should be hidden `addPersonIsVisibe: false`

- We don't want to see the individual view `personIsVisble: false`
- We don't want to see the edit person form `editPersonIsVisible: false`

So there are a few states we have to set up and toggle

let's set up state

**People**
```js
class People extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      peopleListIsVisible: true,
      addPersonIsVisible: false,
      personIsVisible: false,
      editPersonIsVisible: false
    }
  }
  ...
}
```

We can either write a toggle function for each state property or we can write our function to take in any true/false value and update state.

Let's go with the latter.

Here is our function

**People**

```js
toggleState (st) {
  this.setState({[st]: !this.state[st]})
}
```

And, since we'll be referring to `this` in the function we have to add it to the constructor in order to bind `this` properly.

**People: Constructor function**

```js
this.toggleState = this.toggleState.bind(this)
```

It is going to take a string, which is the name of the state property we are toggling then we will toggle it to the opposite value and setState.

Let's trigger this on our `Add a Person` button

Remember, we want to pass `toggleState` a value and the only way to do that , is to wrap it in an anonymous function

**People**

```jsx
  <button className='button is-success' onClick={()=>this.toggleState('addPersonIsVisible')}>Add a Person</button>
```

Test it!

Now let's hide the  Person view

**People**

```jsx
</table>
{this.state.addPersonIsVisible ? <PersonForm /> : ''}
{this.state.personIsVisible ? <Person /> : ''}
</div>
```

Let's hide the list view and instead see the person view.

Bleh, we would have to wrap the ternary over the whole table.

Let's grab that table, which will be a list of all the people and put it in its own component.

**PeopleList**

```jsx
class PeopleList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <img src="https://robohash.org/static_react_component13/?size=100x100&set=set4" alt="Felix Fancy Pants" />
            </td>
            <td className='person'>
              <h3> Felix Fancy Pants </h3>
            </td>
            <td>
                <button className='button is-warning is-small'>Edit</button>
            </td>
            <td>
                <button className='button is-danger is-small'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
```

Add it back to `People`, conditionally

**People**
```jsx
{this.state.peopleListIsVisible ? <PeopleList /> : ''}
{this.state.addPersonIsVisible ? <PersonForm /> : ''}
{this.state.personIsVisible ? <Person /> : ''}
</div>
```

On page load:

![page load](https://i.imgur.com/IDcTYXF.png)

`Add Person` toggles the form, but we also want our list to go away too. Lets update our function:

**People**

```js
toggleState (st1, st2) {
  this.setState({
    [st1]: !this.state[st1],
    [st2]: !this.state[st2]
  })
}
```

Add a second argument to our button click:

**People**

```jsx
        <button className='button is-success' onClick={()=>this.toggleState('addPersonIsVisible', 'peopleListIsVisible')}>Add a Person</button>
```
Now they should both toggle.

Let's add this function to our `Cancel button in our form`

**PersonForm**

```jsx
</form>
  <button className="button is-link" onClick={()=> this.props.toggleState('peopleListIsVisible', 'addPersonIsVisible')}>Cancel</button>
</div>
```


We should get an error! We have to pass this function down.
**People**

```jsx
      {this.state.addPersonIsVisible ? <PersonForm toggleState={this.toggleState}/> : ''}
```

Fixed!

When we click the avatar or name, we should also be able to toggle our view. We want to hide the list, and show the Person component. We can't add the click to the whole `tr` since we want different click events for edit and delete buttons which are also inside our `tr`.

We have a little more coding to do as these elements are children of the component. We'll have to pass the function down as props to both components

**People**

```jsx
People...


render () {
  return (
    <div className='people column'>
      <h2> People </h2>
      <button className='button is-success' onClick={()=>this.toggleState('addPersonIsVisible', 'peopleListIsVisible')}>Add a Person</button>
      {this.state.peopleListIsVisible ? <PeopleList toggleState={this.toggleState}/> : ''}
      {this.state.addPersonIsVisible ? <PersonForm /> : ''}
      {this.state.personIsVisible ? <Person toggleState={this.toggleState} /> : ''}
    </div>
  )
}
```

**PeopleList**

```jsx
...
return (
  <table>
    <tbody>
      <tr>
        <td onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>
          <img src="https://robohash.org/static_react_component13/?size=100x100&set=set4" alt="Felix Fancy Pants" />
        </td>
...
```

Let's add the same onClick to the `td` with the person's name. That way we can click the avatar or person.

**PeopleList**

```jsx
<td className='person' onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>
  <h3> Felix Fancy Pants </h3>
</td>
```


Now we have to add a click event to `See Full list` in the Person component, it's going to be the same onClick as PeopleList, let's copy paste.

**Person**
```jsx
<button className='button is-warning' onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>See Full List</button>
```

Ok so we should have a few views.

On page load:

![on page load](https://i.imgur.com/XcdpzdH.png)

Add Person (both add person and cancel return to first view):

![add person](https://i.imgur.com/RCUhGNy.png)

One Person with form view:

![one person](https://i.imgur.com/kr8y3wl.png)

Note: the cancel button on one person doesn't work.  We can think about how to dynamically change it based on where it is rendering. However, in the interest of time we'll just move on since  we have enough functionality to move across our views for now. Time is so often the enemy!

We have some weirdness with the Add a person button with the show one view. Let's fix it real quick and move on. We could spend the rest of the day on routing views, but we must press forward!

So let's just have that `Add a person button show up the same time as the people list view`

**People**
```jsx
render () {
  return (
    <div className='people column'>
      <h2> People </h2>
      {this.state.peopleListIsVisible ? <button className='button is-success' onClick={()=>this.toggleState('addPersonIsVisible', 'peopleListIsVisible')}>Add a Person</button> :''}
      {this.state.peopleListIsVisible ? <PeopleList toggleState={this.toggleState}/> : ''}
      {this.state.addPersonIsVisible ? <PersonForm toggleState={this.toggleState}/> : ''}
      {this.state.personIsVisible ? <Person toggleState={this.toggleState} /> : ''}
    </div>
  )
}
```

Close enough! I think we can see how a 'simple' project can expand into a good amount of time to make it smooth and intuitive. We have to start interacting with our database though. Let's get to it!

All the code:

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
          <button className="button is-link" onClick={()=> this.props.toggleState('peopleListIsVisible', 'addPersonIsVisible')}>Cancel</button>
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
            <button className='button is-warning' onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>See Full List</button>
          </div>
          </div>
        </div>
        <PersonForm />
      </div>
    )
  }
}

class PeopleList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
          <tr>
            <td onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>
              <img src="https://robohash.org/static_react_component13/?size=100x100&set=set4" alt="Felix Fancy Pants" />
            </td>
            <td className='person' onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>
              <h3> Felix Fancy Pants </h3>
            </td>
            <td>
                <button className='button is-warning is-small'>Edit</button>
            </td>
            <td>
                <button className='button is-danger is-small'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

class People extends React.Component {
  constructor (props){
  super(props)
  this.state = {
    peopleListIsVisible: true,
    addPersonIsVisible: false,
    personIsVisible: false,
    editPersonIsVisible: false
    }
    this.toggleState = this.toggleState.bind(this)
  }

  toggleState (st1, st2) {
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }
  render () {
    return (
      <div className='people column'>
        <h2> People </h2>
        <div>
      {this.state.peopleListIsVisible ? <button className='button is-success' onClick={()=>this.toggleState('addPersonIsVisible', 'peopleListIsVisible')}>Add a Person</button> :''}
        </div>
      {this.state.peopleListIsVisible ? <PeopleList toggleState={this.toggleState}/> : ''}
      {this.state.addPersonIsVisible ? <PersonForm toggleState={this.toggleState}/> : ''}
      {this.state.personIsVisible ? <Person toggleState={this.toggleState}/> : ''}
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
