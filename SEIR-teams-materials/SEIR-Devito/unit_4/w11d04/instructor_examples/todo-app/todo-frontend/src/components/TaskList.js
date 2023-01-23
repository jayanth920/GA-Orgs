import React, { Component } from 'react'
import Task from './Task'

class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
         { this.props.currentView === 'todo'
            ? <div>
              {this.props.todoTasks.map( (task, index) => {
                return (
                  <Task
                    key={index}
                    task={task}
                    handleCheck={this.props.handleCheck}
                    arrayIndex={index}
                    currentArray='todoTasks'
                  />
                )
              })}
              </div>
            : <div>
               {this.props.completedTasks.map( (task, index) => {
                 return (
                    <Task
                      key={index}
                      task={task}
                      handleCheck={this.props.handleCheck}
                      arrayIndex={index}
                      currentArray='completedTasks'
                    />
                  )
               })}
              </div>
          }
       </div>
    )
  }
}

export default TaskList;
