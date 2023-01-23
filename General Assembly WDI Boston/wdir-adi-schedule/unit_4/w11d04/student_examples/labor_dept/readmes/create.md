Previous: [show](show.md)

Next: [update](update.md)

---


## Create a New Person

We built a form earlier. With react, it's usually better to build a static version first, and then add state last. When we have our structure first, it will help us think about state and passing props ahead of time and can reduce the amount of refactoring we do.

We have to do a few things to get our form working
1. write a function that will handle the submit
1. write a function that will track and change our letter input
1. because we will be handling state, we'll have to use the constructor and super etc..
1. We'll need to bind `this` to our functions in our constructor, otherwise, `this` will be undefined and we won't be able to update state
1. set up state, to be able to set from inputs
1. write a fetch function to interact with our database

start with simple functions, for `handleChange` we are targeting the id we gave the `input` element, this id name should match our data `model` and `state` keys

**PersonForm**
```js
handleChange (event) {
  console.log(event.target.id, this)

}
handleSubmit (event) {
  event.preventDefault()
  console.log(this.state)
}

```

Let's make sure we can get `this.state`

**PersonForm**
```js
constructor (props) {
  super(props)
  this.state = {
    name: '',
    age: 0,
    key_skill: '',
    phone: '',
    avatar: ''
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}
```

When we made our form, we used label with an attribute of `for`, this matched the `id` passed to the `input`. This is an important thing to do for web accessibility as it helps screen readers properly interpret forms.

But, we still have to add onChange event listeners to our input fields.

**PersonForm render**
```jsx
render () {
  return (
    <div className='field'>
      <form onSubmit={this.handleSubmit}>
        <label className='label' for='name'>Name</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            id='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <label className='label' for='age'>Age</label>
        <div className='control'>
          <input
            className='input'
            type='number'
            onChange={this.handleChange}
            value={this.state.age}
            id='age'
          />
        </div>
        <label className='label' for='key_skill'>Key Skill</label>
        <div className='control'>
          <input className='input'
            type='text'
            id='key_skill'
            onChange={this.handleChange}
            value={this.state.key_skill}
          />
        </div>
        <label className='label' for='phone'>Phone</label>
        <div className='control'>
          <input
            className='input'
            type='tel'
            id='phone'
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </div>
        <label className='label 'for='avatar'>Avatar</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            id='avatar'
            onChange={this.handleChange}
            value={this.state.avatar}
          />
        </div>
        <div className='control'>
          <input className='button is-primary' type='submit' />
        </div>
      </form>
        <button className="button is-link" onClick={()=> this.props.toggleState('peopleListIsVisible', 'addPersonIsVisible')}>Cancel</button>
    </div>
  )
}
```

It also helps us write one function to handle changes on all of our input fields

```js
handleChange (event) {
  this.setState({[event.target.id]: event.target.value})
}
```
We can console.log `this.state` to see that state is being updated as we expect


Let's work on our submit function. We have to
- prevent the default behavior of the submit button (it will refresh the page currently)
- make a post request with our state object
- For now we'll just console log the response


We'll put two functions in `People`
- one will update state
- one will handle the interaction with the database

**People**

```js
handleCreate (person) {
  const updatedPeople = this.state.people
  updatedPeople.push(person)
  this.setState({people: updatedPeople})
}
```
```js
handleCreateSubmit (event) {
  fetch('/people', {
    body: JSON.stringify(this.state),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(response => console.log(response))
    .catch(error => console.log(error))
}
```

Both access this, so let's pass them in to the construtor
**People constructor**

```js
this.handleCreate = this.handleCreate.bind(this)
this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
```
Next, we have to 'lift state up' to the parent component `People` so we can see the added person. To do this we must pass our functions down to our form.

It may seem excessive to pass `handleSubmit` down. Why not just declare it in the form?

My reasoning was that I wanted to be able to use the form for both submitting a create and submitting an edit. I want to reuse this component for different things, so to do that, I need the parent component to inform the form.

**People render**
```jsx
{
  this.state.addPersonIsVisible ?
   <PersonForm
    toggleState={this.toggleState}
    handleCreate={this.handleCreate}
    handleSubmit={this.handleCreateSubmit}
   /> : ''
 }
```

**PersonForm**
```jsx
render () {
  return (
    <div className='field'>
      <form onSubmit={this.handleSubmit}>
```


This is where we lift state up:
**PersonForm**
```jsx
handleSubmit (e) {
   e.preventDefault()
   this.props.handleSubmit(this.state)
 }
```


And now, when we create a new person, we should have them added to the data base, return to our list view and see them at the top of our list.

Full Code:

```jsx

class PersonForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: 0,
      key_skill: '',
      phone: '',
      avatar: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange (event) {
    this.setState({[event.target.id]: event.target.value})

  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render () {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <label className='label' for='age'>Age</label>
          <div className='control'>
            <input
              className='input'
              type='number'
              onChange={this.handleChange}
              value={this.state.age}
              id='age'
            />
          </div>
          <label className='label' for='key_skill'>Key Skill</label>
          <div className='control'>
            <input className='input'
              type='text'
              id='key_skill'
              onChange={this.handleChange}
              value={this.state.key_skill}
            />
          </div>
          <label className='label' for='phone'>Phone</label>
          <div className='control'>
            <input
              className='input'
              type='tel'
              id='phone'
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div>
          <label className='label 'for='avatar'>Avatar</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='avatar'
              onChange={this.handleChange}
              value={this.state.avatar}
            />
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
              <img src={this.props.person.avatar} alt={this.props.person.name} />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Name:</span> {this.props.person.name} </h3>
              <p className='tile is-child box'><span>Phone:</span> {this.props.person.phone} </p>
              <p className='tile is-child box'><span>Key Skill:</span> {this.props.person.key_skill} </p>
              <p className='tile is-child box'><span>Age:</span>{this.props.person.age} </p>

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
        {this.props.people.map((person, index) => {
          return (
            <tr>
              <td onClick={()=> { this.props.getPerson(person); this.props.toggleState('peopleListIsVisible', 'personIsVisible')}}>
                <img src={person.avatar} alt={person.name} />
              </td>
              <td className='person' onClick={()=> { this.props.getPerson(person); this.props.toggleState('peopleListIsVisible', 'personIsVisible')}}>
                <h3> {person.name} </h3>
              </td>
              <td>
                  <button className='button is-warning is-small'>Edit</button>
              </td>
              <td>
                  <button className='button is-danger is-small' onClick={() => this.props.deletePerson(person, index)}>Delete</button>
              </td>
            </tr>
          )
        })}
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
    editPersonIsVisible: false,
    people : [],
    person: {}
    }
    this.deletePerson = this.deletePerson.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.getPerson = this.getPerson.bind(this)
    this.toggleState = this.toggleState.bind(this)

  }

  componentDidMount () {
    this.getPeople();
  }

  deletePerson (person, index) {
    fetch('people/' + person.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          people: [
            ...this.state.people.slice(0, index),
            ...this.state.people.slice(index + 1)
          ]
        })
      })
  }

  handleCreate (person) {
    const updatedPeople = this.state.people
    updatedPeople.unshift(person)
    this.setState({people: updatedPeople})
  }

  handleCreateSubmit (person) {
    fetch('/people', {
      body: JSON.stringify(person),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdPerson => {
        return createdPerson.json()
      })
      .then(jsonedPerson => {
        this.handleCreate(jsonedPerson)
        this.toggleState('addPersonIsVisible', 'peopleListIsVisible')
      })
      .catch(error => console.log(error))
}

  getPerson( person ) {
    this.setState({person: person})
  }

  getPeople () {
    fetch('/people')
      .then(response => response.json())
      .then(data => {
        this.setState({
          people: data
        })
      }).catch(error => console.log(error))
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
        {this.state.peopleListIsVisible ? <button className='button is-success' onClick={()=>this.toggleState('addPersonIsVisible', 'peopleListIsVisible')}>Add a Person</button> :''}
        {
          this.state.peopleListIsVisible ?
            <PeopleList
             toggleState={this.toggleState}
             people={this.state.people}
             getPerson={this.getPerson}
             deletePerson={this.deletePerson}
            /> : ''
        }
        {
          this.state.addPersonIsVisible ?
           <PersonForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
           /> : ''
         }
        {
          this.state.personIsVisible ?
           <Person
            toggleState={this.toggleState}
            person={this.state.person}
           /> : ''
        }
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
