// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  // 🐨 create a div to render your component to (💰 document.createElement)
  const myDiv = document.createElement('div')
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(myDiv)

  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter />, myDiv)
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  const [dec, inc] = myDiv.querySelectorAll('button')

  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  const count = myDiv.firstChild.querySelector('div')

  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(count.textContent).toBe('Current count: 0')

  // 🐨 click the increment button (💰 increment.click())
  inc.dispatchEvent(clickEvent)

  // 🐨 assert the message.textContent
  expect(count.textContent).toBe('Current count: 1')

  // 🐨 click the decrement button (💰 decrement.click())
  dec.dispatchEvent(clickEvent)

  // 🐨 assert the message.textContent
  expect(count.textContent).toBe('Current count: 0')

  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  myDiv.remove()

  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
