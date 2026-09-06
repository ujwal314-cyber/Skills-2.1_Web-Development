import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom' // We use this so that when a particualr page is active we can bring some classes into effect

const Navbar = () => {
  return (
    <div>
        {/* <a href="/">Home</a> instead of this the below is used */}
        <nav>
        {/* <Link to='/'><li>Home</li></Link>
        <Link to='/login'><li>Login</li></Link>
        <Link to='/about'><li>About</li></Link> */}

        <NavLink to='/' className={(e)=>{return e.isActive?"red":""}}><li>Home</li></NavLink>
        <NavLink to='/login' className={(e)=>{return e.isActive?"red":""}}><li>Login</li></NavLink>
        <NavLink to='/about' className={(e)=>{return e.isActive?"red":""}}><li>About</li></NavLink>
        </nav>
        {/* Link is not a new html tag it is also converted into a anchor tag at runtime */}
    </div>
  )
}

export default Navbar