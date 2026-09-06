import React from 'react'

const component1 = ({count}) => {// Using {count} directly without using props(this is a object) and then props.count is called destructuring

  return (
    <div>
      {count} {/* To get this count from App.jsx you are prop drilling from App => Navbar => Button => component1 , instead of drilling it from these many pages u can directly access it from App with the help of useContext hook */}
    </div>
  )
}

export default component1
