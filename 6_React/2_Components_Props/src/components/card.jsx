import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <div className="card">
        <div className="title" style={{fontSize:30}}>{props.title}</div>{/* inline css will be applied like this style={{fontSize:30}} */}
        <div className="description">{props.description}</div>
    </div>
  )
}

export default card