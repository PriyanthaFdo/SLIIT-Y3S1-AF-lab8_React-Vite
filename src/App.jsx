import { useState } from 'react'
import './App.css'
import Greetings from './components/Greetings'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greetings />
      <NavBar />
      <Footer />
    </>
  )
}

export default App
