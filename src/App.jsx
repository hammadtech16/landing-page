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
      <header class=' pt-8 flex justify-between mt-10'>
        <div class='flex flex-col items-start gap-6'>
          <p class='uppercase text-black'>Try it Now!</p>
          <h2 class='text-5xl text-black m-4 font-medium w-100 text-left '>Change the way you use your <span class='text-sky-500 font-serif text-6xl m-4'>Money</span></h2>
          <button class='w-42 h-12   bg-amber-300 rounded-3xl hover:bg-amber-400 font-bold '>Get Started Now</button>
        </div>
        <div class=' w-1xl '>
          <img src="\src\assets\solar-img.jpg" class='rounded-2xl'  alt="" srcset="" />
        </div>
      </header>
    </>
  )
}

export default App
