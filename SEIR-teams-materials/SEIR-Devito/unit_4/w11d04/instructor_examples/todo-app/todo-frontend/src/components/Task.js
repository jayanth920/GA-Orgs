import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <div className="task">
        <div className="task-item">{this.props.task.task_item}</div>
        <div className="task-actions">
          {this.props.task.completed
            ? <i
              className="incomplete far fa-check-square"
              onClick={() => {this.props.handleCheck(this.props.task, this.props.arrayIndex, this.props.currentArray)}}
              ></i>
            : <i
              className="complete far fa-square"
              onClick={() => {this.props.handleCheck(this.props.task, this.props.arrayIndex, this.props.currentArray)}}
              ></i>
          }
          <i className="delete far fa-trash-alt"></i>
        </div>
      </div>
    )
  }
}

export default Task;
