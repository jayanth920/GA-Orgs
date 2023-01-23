import React, { Component } from 'react';
// { Component } ... ES6 Object Deconstruction
import Header from './components/Header';
import TaskList from './components/TaskList';
import Form from './components/Form';

// when instructed you will be asked to import the required compoonents...
// but only do so when instructed

// any changes to state cause a rerender
// state can only live in a class based component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView:'todo',
      completedTasks: [],
      todoTasks: []
    }
    this.handleView = this.handleView.bind(this)
    this.fetchTasks = this.fetchTasks.bind(this)
    this.sortTasks = this.sortTasks.bind(this)
    this.setTasks = this.setTasks.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleCreateTask = this.handleCreateTask.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
  }


  // adding/updating new items methods
  handleCreateTask(task) {
    fetch('http://localhost:3000/tasks', {
      body:JSON.stringify(task),
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then( createdTask => createdTask.json())
      .then( jData => {
        this.updateArray(jData, 'todoTasks')
        this.handleView('todo')
      })
      .catch( err => console.log('this is err', err))
  }

  // updateArray( {task_item: 'newsomething'}, 'todoTasks')
  updateArray(task,array){
    this.setState( prevState => ({
      [array]:[...prevState[array],task]
    }))
    // prevState is a copy of state
    // this.setState( prevState => {
    //   console.log('this is prevState', prevState)
    //   prevState[array].push(task)
    //   // prevState['todoTasks'].push(task)
    //   return { [array]: prevState[array] }
    // })
  }

  // handle checking of item
  handleCheck(task, arrayIndex, currentArray){
    // this toggles the completed value
    task.completed = !task.completed
    // now we make our fetch call to PUT (update)
    fetch('http://localhost:3000/tasks/' + task.id, {
      body:JSON.stringify(task),
      method:'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( updatedTask => updatedTask.json())
    .then(jData => {
      this.removeFromArray(currentArray, arrayIndex)
      if(currentArray === 'todoTasks') {
        this.updateArray(jData, 'completedTasks')
      } else {
        this.updateArray(jData, 'todoTasks')
      }
    })
    .catch(err => console.log('this is error from handleCheck', err))
  }

  removeFromArray(array, arrayIndex){
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
    // this.setState( prevState => ({
    //   [array]: [...prevState[array].splice(arrayIndex, 1)]
    // }))
  }

  handleView(view) {
    // updating state causes a render
    this.setState({
      currentView: view
    })
  }

  fetchTasks() {
    fetch('http://localhost:3000/tasks')
     .then( data => data.json())
     .then( jData => {
       console.log('this is jData', jData)
       this.sortTasks(jData)
     })
  }

  sortTasks(tasks){
    let completedTasks = []
    let todoTasks = []
    // if it's a single param then you don't need the parens - task
    // it there are 2 params then yes...( task, index )
    tasks.forEach( task => {
      if(task.completed) {
        completedTasks.push(task)
      } else {
        todoTasks.push(task)
      }
    })
    this.setTasks(completedTasks, todoTasks)
  }

  setTasks(completed,todo){
    this.setState({
      completedTasks: completed,
      todoTasks: todo
    })
  }

  // run one time only lifecycle method...
  componentDidMount() {
     this.fetchTasks()
  }

  render() {
    // 3 states: mounting..updating...unmounting
    // lifecycle methods

    // 1. constructor
    // 2. render
    // 3. componentDidMount


    return (
      <div className="main-container">
        <Header
          currentView={this.state.currentView}
          handleView={this.handleView}
          todoCount={this.state.todoTasks.length}
          completedCount={this.state.completedTasks.length}
        />
        <Form
          handleCreateTask={this.handleCreateTask}
        />
        <TaskList
          currentView={this.state.currentView}
          handleView={this.handleView}
          todoTasks={this.state.todoTasks}
          completedTasks={this.state.completedTasks}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default App;
