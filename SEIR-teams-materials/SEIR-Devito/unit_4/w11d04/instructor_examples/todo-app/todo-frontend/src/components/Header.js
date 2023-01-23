import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="title">
          <h1>
            {this.props.currentView === 'todo'
              ? 'TO DO LIST'
              : "COMPLETED LIST"
            }
          </h1>
          <h2>
            yes, another one...
          </h2>
        </div>
        <ul>
          <li onClick={() => this.props.handleView('todo')}>{this.props.todoCount} TODOS</li>
          <li onClick={() => {this.props.handleView('completed')}}>{this.props.completedCount} COMPLETED</li>
        </ul>
      </div>
    )
  }
}

export default Header;
