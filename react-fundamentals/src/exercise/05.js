// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const Box = props => (
  <div
    className={`box box--${props.size}`}
    style={{backgroundColor: props.color, fontStyle: 'italic'}}
  >
    {props.text}
  </div>
)

const smallBox = (
  <Box size="small" color="lightblue" text="small lightblue box" />
)
const mediumBox = <Box size="medium" color="pink" text="medium pink box" />
const largeBox = <Box size="large" color="orange" text="large orange box" />

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
