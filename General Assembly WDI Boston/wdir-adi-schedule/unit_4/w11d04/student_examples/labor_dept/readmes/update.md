Previous: [delete](delete.md)

Next: [Make more component-ey](components.md)

---

We have a lot of moving parts! This is the last functionality we have to add.

And we have a lot of functionality to leverage. But let's list out what we have to do:

- We need an update function that interacts with the db
- We already can 'grab' a person on click and view their details. Now we have to pass those details into our form for updating.
- We have to update our state/view



We are going to use `fetch` again. Then we are going to update our state by calling `this.getPeople()` - if we had more time we could think of a more elegant solution. But this'll do just fine.


**People**
```jsx
handleUpdateSubmit (person) {
    fetch('/people/'+ person.id, {
      body: JSON.stringify(person),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedPerson => {
        return updatedPerson.json()
      })
      .then(jsonedPerson => {
        //need to update state be naughty, call that db!
        this.getPeople()
        this.toggleState('peopleListIsVisible', 'personIsVisible')
      })
      .catch(error => console.log(error))

}
```

Remember to add it to the constructor:

**People Constructor**

```js
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
```

Let's pass the function and the person down to `Person`

**People render**
```js
{
  this.state.personIsVisible ?
   <Person
    toggleState={this.toggleState}
    person={this.state.person}
    handleSubmit={this.handleUpdateSubmit}
   /> : ''
}
```

and from Person pass it to PersonFrom

**Person render**
```js
</div>
<PersonForm person={this.props.person}   handleSubmit={this.props.handleSubmit}/>
</div>
)
```

We want to fill the form, but only if `this.props.person` exists. It doesn't exist when we create a person. But it should when we choose a person to edit. We can use `componentDidMount` to help us out.

**PersonForm**
```js
componentDidMount(){
  if(this.props.person){
    this.setState({
      name: this.props.person.name,
      age: this.props.person.age,
      key_skill: this.props.person.key_skill,
      phone: this.props.person.phone,
      avatar: this.props.person.avatar,
      id: this.props.person.id
    })
  }
}
```

And that should do it!

We did a lot of planning and still ended up with a useless `Edit` button!!

That's ok, I think we did pretty alright

Full Code
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
  componentDidMount(){
    if(this.props.person){
      this.setState({
        name: this.props.person.name,
        age: this.props.person.age,
        key_skill: this.props.person.key_skill,
        phone: this.props.person.phone,
        avatar: this.props.person.avatar,
        id: this.props.person.id
      })
    }
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
          <PersonForm person={this.props.person}   handleSubmit={this.props.handleSubmit}/>
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
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
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

    handleUpdateSubmit (person) {
    fetch('/people/'+ person.id, {
      body: JSON.stringify(person),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedPerson => {
        return updatedPerson.json()
      })
      .then(jsonedPerson => {
        //need to update state be naughty, call that db!
        this.getPeople()
        this.toggleState('peopleListIsVisible', 'personIsVisible')
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
            handleSubmit={this.handleUpdateSubmit}
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
