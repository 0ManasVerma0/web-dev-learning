import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color){
  //   setColor(color)
  // }


  return (
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full bg-red-400 text-black shadow-lg'>RED</button>
              <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full bg-green-400 text-black shadow-lg'>GREEN</button>
              <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full bg-blue-400 text-black shadow-lg'>BLUE</button>
              <button onClick={() => setColor('gray')} className='outline-none px-4 py-1 rounded-full bg-gray-400 text-black shadow-lg'>GRAY</button>
              <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full bg-orange-400 text-black shadow-lg'>ORANGE</button>
            </div>
          </div>
      </div>
  )
}

export default App
