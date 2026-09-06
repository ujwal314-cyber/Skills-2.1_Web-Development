import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [color,setColor]=useState(0)
  const [filter,setFilter]=useState(0)

  // useEffect(()=>{
  //   alert("Welcome to the page")//this will be displayed whenever the app.jsx will be rendered 
  //   //this will appear twice because in the main.jsx there is .Strictmode which will run the code twise once for checking and another time really so it appears twice
  // },[])

  useEffect(() => {
    alert("count was changed")//This will appear when count is updated
    setColor(color+1)
    // setFilter(filter+1)
  }, [count])

  useEffect(()=>{
    alert("I will run on each render main")
  })
  

  /*
  > First when the page is opened everything will be rendered so navbar will be rendered and hence Welcome will run
  > Next the each render nav will run
    {
      The reason why the main render will not run is that in that as the rendering of the code is not completed still 
      }
  > next as the navbar is rendering the color is set(initialized) (note its state is not set and the color changed is not running because of usestate) the color changes will run
  > Next after navbar is completly rendered it comes to the main code where Count is set Count changed will run
  > As the count changed will run, the color is updated
  > As a state is updated (need not be only color it can be a state like filter which is not used any where - the point is setState(Basically when the satate changes) causes the entire code to be rendered again) the entire section is rendered again so first the main will be run and then as in the section the navbar is also rendered the each nav render will run
  > Color was changed so Color changed will run 
  > Now as the rendering of the entire code is done the each main render will run and stop 
  */

  /*
  > Add a footer at the top
  > Now the Footer is rendered before Navbar so first the Filter changed will run
  > Then the useEffects in the navbar will run
  > Though the components are at the last 
  > First the components will be rendered then the rest code and in the components the ine which appears first will be rendered first
  */
     
     
     return (
       <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
          >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      <Footer/>
      <Navbar color={color}/>
      
    </>
  )
}

export default App
