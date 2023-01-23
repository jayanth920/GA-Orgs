Previous: [Navigate Views](react_navigate_views.md)

Next: [show](show.md)


---

## Show All People

- We're going to use `fetch` to get data from our database
- Since PeopleList and Person will share this data, we will put it in the nearest common ancestor, which is  the `People` component
- First, let's just see if we can console.log our data

** In the People component**

Let's add an array to hold our data:
```js
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
    this.toggleState = this.toggleState.bind(this)
  }
  ...
}
```

Now let's write a function to fetch our data, so that, by default, it shows us a list of people on load

Remember: We need access to `this` so let's add this function to our constructor to bind this properly



**People**

```js
getPeople () {
  fetch('/people')
    .then(response => response.json())
    .then(data => {
      this.setState({
        people: data
      })
    }).catch(error => console.log(error))
}
```

Groovy times! **_WHEN_** do we want to call this method?

We want to call it when the component is loaded, or rather, is mounted within the app/page.

Rabbit hole: If you want to live dangerously, you _could_ call it in the constructor, but since it is a asynchronous request, you might have trouble in some cases. [More info](https://stackoverflow.com/questions/38913138/can-i-put-ajax-in-react-component-constructor?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

We're going to play it safe, and use `componentDidMount` [Which is a React lifecycle method](https://reactjs.org/docs/state-and-lifecycle.html) . We're not going to talk too much about it. We're going to learn by using it.

**People**

```js
componentDidMount () {
  this.getPeople();
}
```

We now have `this.state.people` as an array full of people, just waiting to be rendered.

Let's pass that people array down from People to People list

**People**

```jsx
{this.state.peopleListIsVisible ? <PeopleList toggleState={this.toggleState} people={this.state.people}/> : ''}
```

Now we want to go into PeopleList and map over our array and display our people.

Note: we're including a second argument in map called `index`, we won't use it for this step, but we'll use it for a later one.

**PeopleList**

```jsx
class PeopleList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
        {this.props.people.map((person, index) => {
          return (

          )
        })}
...
}
```
Now let's copy paste our `tr` into the return.

It should work! We should get a lot of our hard coded 'data'

Expected Appearance:

![looping hard coded stuff](https://i.imgur.com/oANOwdT.png)

Let's now put in our data

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
              <td onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>
                <img src={person.avatar} alt={person.name} />
              </td>
              <td className='person' onClick={()=> this.props.toggleState('peopleListIsVisible', 'personIsVisible')}>
                <h3> {person.name} </h3>
              </td>
              <td>
                  <button className='button is-warning is-small'>Edit</button>
              </td>
              <td>
                  <button className='button is-danger is-small'>Delete</button>
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
