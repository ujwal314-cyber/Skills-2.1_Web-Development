import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

      <main className='card_box'>
        <Card title='Card 1' description = 'This is the description of Card 1'/>
        <Card title='Card 2' description = 'This is the description of Card 2'/>
        <Card title='Card 3' description = 'This is the description of Card 3'/>
        <Card title='Card 4' description = 'This is the description of Card 4'/>
        <Card title='Card 5' description = 'This is the description of Card 5'/>
        <Card title='Card 6' description = 'This is the description of Card 6'/>
        <Card title='Card 7' description = 'This is the description of Card 7'/>
        <Card title='Card 8' description = 'This is the description of Card 8'/>
        <Card title='Card 9' description = 'This is the description of Card 9'/>
        <Card title='Card 10' description = 'This is the description of Card 10'/>
        <Card title='Card 11' description = 'This is the description of Card 11'/>
        <Card title='Card 12' description = 'This is the description of Card 12'/>
      </main>

      <Footer/>

    </>
  )
}

export default App
