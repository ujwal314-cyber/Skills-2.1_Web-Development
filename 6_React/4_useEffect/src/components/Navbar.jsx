import {React,useEffect} from 'react'

const Navbar = ({color}) => {

    useEffect(()=>{
        alert('Welcome to the page')
        return(()=>{
            alert("This Navbar was removed or commented out")//imagine you use if else statements to removw this component so this alert is shown when the component is removed or to experience how this happens you could just comment it out
        })
    },[])

    useEffect(()=>{
        alert('I will run on each render')//this will run twice when count is changed because first when the count was changed then the entire comonent <></> containing the count will be rendered again (basically the entire page) so it will be displayed
        
        //second time as the count was changed the color will also be changed so the navbar component will be rendered again so as the effect is in navbar itself it will run again
    })

    useEffect(()=>{
        alert('Color was changed')
    },[color])

  return (
    <div>Navbar</div>
  )
}

export default Navbar