import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  /*
  > [10,20,30,40,50].map((e,i)=>{return {element:e,index:i}})
[
  { element: 10, index: 0 },
  { element: 20, index: 1 },
  { element: 30, index: 2 },
  { element: 40, index: 3 },
  { element: 50, index: 4 }
  ]
  > Array(30_000).fill(0)
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
    ... 29900 more items
    ]
    > Array(30_000).fill(0).length
    30000
    >
    */

  // const nums = new Array(30_000_000).fill(0).map((_, i) => {
  //   return {
  //     index: i,
  //     isMagical: i === 29_000_000 // so this will run till the 29 million th index, its a very heavy computation
  //   }
  // })

  /*
  Type ".help" for more information.
  > Array(30_000_000).fill(0).map((_,i)=>{
    | return {
      | index: i,
      | isMagical:i===29_000_000
      | }})
      [
        { index: 0, isMagical: false },
        { index: 1, isMagical: false },
        { index: 2, isMagical: false },
        { index: 3, isMagical: false },
        { index: 4, isMagical: false },
        { index: 5, isMagical: false },
        { index: 6, isMagical: false },
        { index: 7, isMagical: false }, .....so on
        */
  const [count, setCount] = useState(0)


  // const magical = number.find(item => item.isMagical === true)// or can be directly written as item.isMagical

  // The above heavy computation will take place again and again as the count changes so the entire page re renders again even though the answer is same everytime, when you open the page itself it takes time to open and when you click on the count the count increasing will also take time sometimes gets stuck, so basically your page doesnt slow or (its responsiveness decreases)
  // So to tackle this problem we use useMemo

  // const magical = useMemo(()=>number.find(item => item.isMagical),[])// This says that memoise the final return of the function provided, so that the function is not executed again and again between re-renders, So useMemo is used when there is a heavy computation which you do not want to run again and again between re-renders

  // Even after using the above thing the website is still slow because 
  // 1=> on each render the const num reuns again and again so use useMemo on that

  //   return new Array(30_000_000).fill(0).map((_, i) => ({
  //     index: i,
  //     isMagical: i === 29_000_000
  //   }))
  // }, [])
  // const [number, setNumber] = useState(nums)
  // const magical = useMemo(()=>number.find(item => item.isMagical),[])
 
  // the above one is still slow because 
  // 2=> the const [number, setNumber] = useState(nums) also runs again and again generating array again and again 

  const magical = useMemo(() => {
    return new Array(30_000_000)
      .fill(0)
      .map((_, i) => ({
        index: i,
        isMagical: i === 29_000_000
      }))
      .find(item => item.isMagical)
  }, []) // the square bracket one is the dependence variable whre if the provided one changes the useMemo will run and the magical will be updated, like here store 30_000_000 or 29_000_000 in a variable provide any one and if it changes, it will be claculated again 

  return (
    <>
      <div>The magical number is {magical.index}</div>
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
    </>
  )
}

export default App
