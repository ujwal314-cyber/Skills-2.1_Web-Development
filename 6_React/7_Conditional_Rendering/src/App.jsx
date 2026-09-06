import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btn, setbtn] = useState(0)
  const [todolist, setTodo] = useState([
    {
      id: '1',
      title: "T1",
      desc: "This is T1"
    },
    {
      id: '2',
      title: "T2",
      desc: "This is T2"
    },
    {
      id: '3',
      title: "T3",
      desc: "This is T3"
    }
  ])

  // const Todo = ({ todo }) => {
  //   return (<>

  //     {/* <div>I am a Todo</div> */}
  //     <div className="m-5 border-4">

  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>

  //     </div>
  //   </>)
  // }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>

          {/* <Todo/> */}

          {/* {todolist.map(item => {
            return <Todo todo={item} />
          })}

          {/* For the above one you will get an error saying
          react-dom_client.js?v=902f3ded:12936 Each child in a list 'should have a unique "key" prop.'
          Check the render method of `div`. It was passed a child from App. See https://react.dev/link/warning-keys for more information. 

          > This error appears because whenever a list is rendered we have to provide a key which is unique to each element
          
          > For the error to go you must give a key and the key should be unique for each element so ideally choose id here as title is also different for each you can use it but always go for a id which will be always unique (Like for databases also)  /} */}

          {/* {todolist.map(item => {
            return <Todo key={item.id} todo={item} />
          })} */}

          {/* Mostly you do not follow the above approach in which you create a separate a function and return it and here you access it instead you directly return the part wt you returned in the function like the below one */}

          {todolist.map(item => {
            return (<div key={item.id}>

              {/* <div>I am a Todo</div> */}
              <div  className="m-5 border-4">

                <div className="todo">{item.title}</div>
                <div className="todo">{item.desc}</div>

              </div>
            </div>)
          })}

          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        {/* { One way} */}
        {/* {btn?<button>Shown only on a particular condition</button>:""} */}

        {/* Second Way  */}
        {btn && <button>Shown only on a particular condition</button>}

        <button
          type="button"
          className="counter"
          onClick={() => { setCount((count) => count + 1); setbtn(!btn) }} //this means if btn is true then set false , if false set true so=> on click the btn will be shown on second click it will dissapear
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
