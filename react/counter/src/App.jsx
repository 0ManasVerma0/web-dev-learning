import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(69) //first value here is variable and second value here is a method
  //let counter = 69; This won't be updated on webpage you can't see rendered new value
  const addValue = () => {
    setCounter(counter + 1) //Even if you write this 4 times it won't add +4 to your counter because react takes the full batch and jus proceeds to use one line of it, sometimes when you want to avoid this batching you could use a calback  inside setCounter((pervCounter) => prevCounter + 1), you have to do multiple times to avoid batching as this could no be the batch
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>A react practice {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button 
      onClick={addValue}>Add value</button>{" "}
      <button
      onClick={removeValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
