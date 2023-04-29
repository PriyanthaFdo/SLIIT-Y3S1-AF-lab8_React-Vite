import { useState } from 'react'
import './App.css'
import Greetings from './components/Greetings'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import CustomButton from './components/CustomButton'

function App() {
  return (
    <>
      <Greetings />
      <NavBar />
      <Card 
        title="hello"
        description="Hello this is a image of a man. Lorem Ipsum fdf aeak adfe o fawe fjnadf dk"
        image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" 
      />
      <CustomButton text="Bye" type="danger" size="extraWide" />
      <Footer />
    </>
  )
}

export default App
