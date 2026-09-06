import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'

// When you have multiple pages in your website and you use anchor tag to access from your main dashboard, the problem which comes into picture is that each time you click on the tag your page reloads so to avoid reloading of the page react router is used

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/login',
      element: <><Navbar /><Login /></>
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>
    },
    {
      path: '/user/:username',// This like u have to use /user/ujwal
      element: <><Navbar /><User /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
