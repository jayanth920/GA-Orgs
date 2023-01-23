import React from 'react'
import CheckboxWithLabel from './CheckboxWithLabel'
import HoverLink from './HoverLink'

const App = () => (
  <div>
    <h1>Hello World!</h1>
    { /* This checkbox should display "on" when checked and
      "off" when not checked. */ }
    <CheckboxWithLabel labelOn="On" labelOff="Off"/>

    { /* This link should get the class "hover" when
      a user hovers over it. */ }
    <HoverLink page="https://facebook.com">Facebook</HoverLink>
  </div>
)

export default App
