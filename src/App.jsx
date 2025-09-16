import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class='bg-sky-200 flex justify-between p-2 '>
        <div class='w-20 bg-amber-300 p-2'>
          Vite
        </div>
        <ul class='flex align-middle gap-10 p-2'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <button class='w-20 bg-amber-300 p-2'>Sign Up</button>
      </nav>
      
      
    </>
  )
}

export default App
