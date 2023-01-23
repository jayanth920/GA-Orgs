import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import CheckboxWithLabel from '../CheckboxWithLabel'

it('CheckboxWithLabel changes the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  )

  expect(queryByLabelText(/Off/i), 'Checkbox text should be \'Off\' when not checked.').toBeTruthy()

  fireEvent.click(getByLabelText(/Off/i))

  expect(queryByLabelText(/On/i), 'Checkbox text should be \'On\' when checked,').toBeTruthy()
})
