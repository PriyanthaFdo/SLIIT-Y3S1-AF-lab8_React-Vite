import { useState } from 'react'
import './App.css'
import Greetings from './components/Greetings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greetings />
    </>
  )
}

export default App
