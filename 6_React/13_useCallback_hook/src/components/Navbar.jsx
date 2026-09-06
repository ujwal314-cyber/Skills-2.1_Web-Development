import React,{memo} from 'react'

const Navbar = ({adjective, getAjective}) => {
    console.log("Navbar rendered")
  return (
    <div>
      I am a good {adjective}
      <button onClick={()=>{getAjective()}}>Get</button>
    </div>
  )
}

export default memo(Navbar)
