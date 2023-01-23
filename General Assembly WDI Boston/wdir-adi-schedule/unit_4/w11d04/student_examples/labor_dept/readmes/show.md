Previous: [index](index.md)

Next: [delete](delete.md)

---

## Show One

We want to be able to click a name on the list and see a view of that person.

The person is being generated in `PeopleList`, so we have to lift the `person` up to the parent component, and then pass it down into the `Person` component.

Managing state can get tough! There is something called Redux that helps manage state in React apps. There is a nearly universal agreement that it is important to learn the basics of React well first before trying to learn Redux.

Set up state that will be shared:

**People**
```js
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
this.toggleState = this.toggleState.bind(this)
this.getPerson = this.getPerson.bind(this)
}

getPerson( person ) {
  this.setState({person: person})
}
```
Pass the function `getPerson` to `PeopleList`
Pass `person` to `Person`

**People**
```jsx
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
```

The way to lift state up is through a callback function. We'll now be calling two functions on click of the avatar and the name. So we have to wrap that code in curlies. Just write one and copy paste into the next one

**PeopleList**

```jsx
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
```

Next, we have to swap out our hard-coded data for our dynamic data

**Person**

```jsx

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
```
