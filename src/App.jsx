import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class=' flex justify-between gap-11  rounded-2xl h-15  '>
          <p class='w-20 flex justify-center items-center bg-amber-300 h-15 rounded-2xl'> Vite</p>
        <ul class='flex justify-center items-center gap-10 '>
          <li><a href="#">Home</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <button class='w-32  bg-amber-300 rounded-2xl hover:bg-amber-400 font-bold '>Sign Up</button>
      </nav>
      
    </>
  )
}

export default App
