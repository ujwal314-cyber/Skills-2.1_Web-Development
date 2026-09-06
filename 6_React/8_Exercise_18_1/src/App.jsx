import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [card, setCard] = useState([])

  async function fetchData() {
      let x= await fetch('https://jsonplaceholder.typicode.com/posts')
      let y=await x.json()
      setCard(y)
      console.log(y)
    }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='text-white bg-black'>
      <div className="flex bg-black flex-wrap justify-between gap-y-20">
        {card.map((item)=>{
          return(<div key={item.id} className="border-3 w-80 h-100">
              <div>UID :- {item.userId}</div>
              <div><h2 className='text-center mt-10'>{item.title}</h2></div>
              <div className='mt-10 text-center'>{item.body}</div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default App
