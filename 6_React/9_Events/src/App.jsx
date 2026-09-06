import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Name")
  // const [form, setForm] = useState({email:"",phone:""})
  const [form, setForm] = useState({})// if you set it to empty then you should use the ternary operator or else you will get error (see the input tag)

  const handleClick = () => {
    alert("Button was Clicked")
  }
  
  const handleMouseOver = () => {
    alert("Mouse on div")
  }

  // const handleInput = (e) => {
  //   setname(e.target.value)
  // }
  
  // const handleInput = (e) => {
  //   setForm(e.target.name)
  // }//Doing this for the email phone whould replace wt ever you type inplace of the entire object instead of updating the object
  
  const handleInput = (e) => {
    setForm({...form,[e.target.name]:e.target.value})// ...form evaluates into { } where into you pass name:value

    // U cant write e.target.name: e.target.value, [] are must
    // {...form} returns { email: 'dsfcawfs', phone: '34253234567' }

    console.log(form)//type and see in the console => Reason for that is setForm is asynchronos so console.log runs before it
  }

  return (
    <div className='flex h-screen bg-neutral-800 justify-center items-center text-white flex-col'>
      <div>
        <button onClick={handleClick} className='px-5 py-2 bg-black rounded-[10px]'>Click Me</button>
      </div>

      <div onMouseOver={handleMouseOver} className="h-50 w-50 text-center bg-red-400"> This is a div</div>

      {/* <input type="text" className='bg-black m-3' value={name} /> When you set this value the Name will appear in the textbox and you cannot change it neither add or remove wt is there so you have to handle this event to allow to type in the input */}
      {/* <input type="text" className='bg-black m-3' value={name} onInput={handleInput}/> */}
      {/* <input type="text" className='bg-black m-3' value={name} onChange={handleInput}/>Both are same */}

      {/* <input type="text" className='bg-black m-3' name='email' value={form.email} onChange={handleInput}/>
      <input type="text" className='bg-black m-3' name='phone' value={form.phone} onChange={handleInput}/> */}

      <input type="text" className='bg-black m-3' name='email' value={form.email?form.email:""} onChange={handleInput}/>
      <input type="text" className='bg-black m-3' name='phone' value={form.phone?form.phone:""} onChange={handleInput}/>
    </div>
  )
}

export default App
