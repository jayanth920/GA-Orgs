import React from 'react'

export default class HoverLink extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      class: 'normal'
    }
  }

  _onMouseEnter = () => {

  }

  _onMouseLeave = () => {

  }

  render () {
    return (
      <a
        className='normal'
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        data-testid='test'
      >
        {this.props.children}
      </a>
    )
  }
}
