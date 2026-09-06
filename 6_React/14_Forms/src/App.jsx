import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
    setError

  } = useForm()

  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000)
    })
  }// Function to stimulate the delay when data submitted to backend

  const Submit = async data => {
    // await delay(3)// Here there is a delay of 3 set wt if the user submits the form multiple times thinking its not submitted(not logged in the console), to avoid this isSubmitting is used

    let r = await fetch("http://localhost:3000",{method:"POST",headers:{"Content-Type": "application/json"},body:JSON.stringify(data)})
    // you cant do b.toString() cause it gives '[object Object]' headers is mandatory so that the express parser knows that the content-type is application or json so that it changes accordingly

    let res=await r.text()
    console.log(res)

    // if(data.username!=="Shubam")
    //   setError("myform",{message:"Invalid Credentials"})
    // if(data.username==="Rohan")
    //   setError("blocked",{message:"Access Denied"})
  }
  return (
    <>
      {/* <div>
        <form action="">
          <input type="email" name="" id="" />
          <input type="password" name="password" id="" />
          <input type="submit" value="Submit" />
        </form>
      </div>
      Making validations with traditiona forms using if else statement will make the script longer and complex so to make it easy use react-hook-form */}

      <div>
        <form action="" onSubmit={handleSubmit(Submit)}>
          {/* <input type="text" {...register('username', { required: true, minLength: 3, maxLength: 20 })} />
          {errors.username && <div className='red'>There was an error</div>} */}
          {/* Here above there constraints are put that 1=>it is required, you cant submit it without filling the field 2=>minlength and 3=>maxlength

          Here if any one is not satisfied the error will be displayed if you want a specific message for each case then follow the below one */}

          {isSubmitting && <div>Submitting...</div>}
          <input type="text" {...register('username', { required: {value:true, message:"This field is required"}, minLength: {value:3, message:"Enter a min of 3 characters"}, maxLength: {value:8, message:"You can enter a max of 8 characters"} })} />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input type="password" {...register('password', { required: {value:true, message:"This field is required"}, minLength: {value:3, message:"Enter a min of 8 characters"}})} />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
