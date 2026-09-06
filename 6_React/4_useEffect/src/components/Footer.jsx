import {useEffect} from 'react'

const Footer = ({filter}) => {
    useEffect(()=>{
        alert("Filter was changed")
    },[filter])
  return (
    <div>
      
    </div>
  )
}

export default Footer
