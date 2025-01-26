import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
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
    <div className="App">
      <Navbar />
      <Header />
      
    </div>
      
    </>
  )
}

export default App
