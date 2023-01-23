import React from 'react'

export default class CheckboxWithLabel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }

  onChange = () => {

  }

  render () {
    const text = this.state.isChecked ? '' : '' // Use props here
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {text}
      </label>
    )
  }
}
