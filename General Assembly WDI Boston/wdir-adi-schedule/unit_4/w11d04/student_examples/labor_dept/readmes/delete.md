Previous: [show](show.md)

Next: [update](update.md)

---



## Delete a person

- How can we delete a person?
_ We need a click event on our button
- We need to call a function that will:
  - We have to delete them from the database
  - We also need to update state so we can re-render our list

Let's start with our delete function, for now, all it will do is console.log.

**People**

```jsx
deletePerson (person) {
  console.log(person)
}
```

We will be accessing this in the function in a bit. So let's add it to the constructor.

We have to pass the person to our function. The person is in PeopleList. So we need to pass it down.

**People render()**

```jsx
{
  this.state.peopleListIsVisible ?
    <PeopleList
     toggleState={this.toggleState}
     people={this.state.people}
     getPerson={this.getPerson}
     deletePerson={this.deletePerson}
    /> : ''
}
```

Let's now move to `PeopleList`
We can't do this

```jsx
    <button className='button is-danger is-small' onClick={this.deletePerson(person, index)}>Delete</button>
```

Because it will call the function on load and you can't invoke it again with a click.

We can, instead, pass an anonymous function to handle the click event and call our function `deletePerson` inside of that

**PeopleList**

```jsx
  <button className='button is-danger is-small' onClick={() => this.props.deletePerson(person, index)}>Delete</button>
```

At this point, we should be able to press the delete button and console.log the correct person.

Let's add a fetch function, we'll use the `delete` route `people/:id`

Then we'll set state. What we want to do is keep all the people before the slice index position, and we'll want to keep everything else. By default, slice only returns the removed item. So we'll use the spread/rest operator (`...`) to give us a hand.

```js
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
```

This should do it! This should delete the person from our list and our database! Reload the page to be sure!

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
    people : []
    }
    this.deletePerson = this.deletePerson.bind(this)
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
