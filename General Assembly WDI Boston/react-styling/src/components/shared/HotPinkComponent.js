import React from 'react'
import styled from 'styled-components'

// Create a new styled-components `button` with custom styling
const HotPinkButton = styled.button`
  border-radius: 25px;
  border: 2px solid;
  color: white;

  /* Accessing the 'primaryColor' prop for the background */
  background: ${(props) => props.primaryColor};
`

const HotPinkComponent = (props) => (
  <div>
    <HotPinkButton primaryColor='HotPink'>Click this button!</HotPinkButton>
  </div>
)

export default HotPinkComponent
