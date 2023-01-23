import React from 'react'
import HoverLink from '../HoverLink'
import { render, fireEvent } from 'react-testing-library'

const setup = () => {
  const utils = render(<HoverLink>Facebook</HoverLink>)
  const input = utils.getByTestId('test')
  return input
}

test('Link changes the class when hovered', () => {
  const link = setup()

  expect(link.className, 'HoverLink should have \'normal\' class when not being hovered over.').toBe('normal')

  fireEvent.mouseEnter(link)

  expect(link.className, 'HoverLink should \'hover\' class when hovered over.').toBe('hover')
})
