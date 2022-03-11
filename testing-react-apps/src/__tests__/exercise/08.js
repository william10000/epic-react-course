// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {renderHook, act as renderHookAct} from '@testing-library/react-hooks'
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'
import Counter from '../../examples/counter-hook'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

const setup = props => {
  let result = {}
  function TestComponent() {
    Object.assign(result, useCounter(props)) // default: initialCount = 0, step = 1
    return null
  }
  render(<TestComponent />)
  return result
}

test('Counter starts at 0', () => {
  render(<Counter />)

  expect(screen.getByText(/0/)).toBeInTheDocument()
  // 🐨 render the component
  // 🐨 get the elements you need using screen
  // 🐨 assert on the initial state of the hook
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
})

test('Counter increments to 1', () => {
  render(<Counter />)
  userEvent.click(screen.getByText(/increment/i))
  expect(screen.getByText(/current count:.*1/i)).toBeInTheDocument()
})

test('Counter increments to 3 and decrements back to 1', () => {
  render(<Counter />)

  for (let i = 0; i < 3; i++) {
    userEvent.click(screen.getByText(/increment/i))
  }
  expect(screen.getByText(/current count:.*3/i)).toBeInTheDocument()

  userEvent.click(screen.getByText(/decrement/i))
  userEvent.click(screen.getByText(/decrement/i))
  expect(screen.getByText(/current count:.*1/i)).toBeInTheDocument()
})

test('test hook more directly', () => {
  const result = setup({initialCount: 0, step: 1})

  expect(result.count).toEqual(0)

  act(() => result.increment())
  expect(result.count).toEqual(1)

  act(() => result.decrement())
  expect(result.count).toEqual(0)
})

test('test hook more directly setup function', () => {
  const {result} = renderHook(() => useCounter({initialCount: 2, step: 3}))

  expect(result.current.count).toEqual(2)

  renderHookAct(() => result.current.increment())
  expect(result.current.count).toEqual(5)

  renderHookAct(() => result.current.decrement())
  expect(result.current.count).toEqual(2)
})

/* eslint no-unused-vars:0 */
