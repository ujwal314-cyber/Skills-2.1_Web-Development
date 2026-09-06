import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(23) //This means that create a state count and a function setCount to update the value of count and the value of the state count is set to 0 by useState(0)
  // these are called as Hooks and the above one is State Hook

  return (
    <>
      <div>The Count is {count}</div>
      <button onClick={()=>{setCount(count**2)}}>Click Me</button>
    </>

    // We cant use it like
    // <>
    // let a=0;
    //   <div>The Count is {a}</div> //Because this will already be rendered 
    //   <button onClick={()=>{a=a+1}}>Click Me</button>// So even if the value of a is updated the above one will not change as it is alredy rendered 
    // But useState and setState make it possible
    // </>
  )
}

export default App
