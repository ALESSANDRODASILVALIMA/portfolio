import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 /*
   Para envia pro git pages 
   npm run build 
   npm run deploy 
 */
  return (
    <>
      <h1>Alessandor da Silva Lima</h1>
      <div class="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500 w-[100px] h-[100px] rounded-full"></div>
    </>
  )
}

export default App
