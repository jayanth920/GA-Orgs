import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task_item: '',
      completed:false
    }
  }

  handleSubmit = (e) => {
     e.preventDefault()
     this.props.handleCreateTask(this.state)
     this.clearForm()
  }

  handleChange = (e) => {
     this.setState({task_item: e.target.value})
  }

  clearForm = () => {
    this.setState({ task_item: ''})
  }

  render () {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
         <form>
          <input
            type='text'
            placeholder="Create a new todo today"
            onChange={this.handleChange}
            value={this.state.task_item}
            />
          <button type="submit" className="submit-button"><i className="fas fa-plus"></i></button>
         </form>
       </div>
    )
  }
}

export default Form;
