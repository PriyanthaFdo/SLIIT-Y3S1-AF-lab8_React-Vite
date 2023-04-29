import { useState } from 'react'
import './App.css'
import Greetings from './components/Greetings'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greetings />
      <NavBar />
    </>
  )
}

export default App
