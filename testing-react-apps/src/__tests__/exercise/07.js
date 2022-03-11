// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'
import {render} from '../../test/test-utils'

const renderWithTheme = (children, initialTheme = 'light') =>
  render(<ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>)

test('renders with the light styles for the light theme', () => {
  // 🐨 uncomment all of this code and your test will be busted on the next line:
  // renderWithTheme(<EasyButton>Easy</EasyButton>)
  render(<EasyButton>Easy</EasyButton>)

  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
  //
  // 🐨 update the `render` call above to use the wrapper option using the
  // ThemeProvider
})

test('renders with dark styles after clicking "Toggle theme"', () => {
  // renderWithTheme(<EasyButton>Easy</EasyButton>, 'dark')
  render(<EasyButton>Easy</EasyButton>, {theme: 'dark'})

  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})

/* eslint no-unused-vars:0 */
