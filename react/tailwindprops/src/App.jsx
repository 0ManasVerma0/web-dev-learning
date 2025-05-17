import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-yellow-500 p-3 rounded-md'>Here's a Vite with Tailwind</h1>
      <Card />
      <Card year={2021} />
      <Card year={2022}/>
      <Card year={2027}/>
    </>
  )
}

export default App
