import React from 'react'
import Component1 from './component1'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Button = () => {
    const value=useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1/></span>I am a Buttton</button>
    </div>
  )
}

export default Button
