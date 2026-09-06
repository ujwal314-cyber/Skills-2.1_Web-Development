import React from 'react'
import { counterContext } from '../context/context'
import { useContext } from 'react'

const component1 = () => {
    const value =useContext(counterContext)
  return (
    <div>
      {value.count} 
    </div>
  )
}

export default component1
