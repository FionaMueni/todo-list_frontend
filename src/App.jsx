import { useState } from 'react'


function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginFunc = (event) =>{
    event.preventDefault()
    fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
              "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email: email,
        password: password,
      })}).then (response => response.json())
      .then((data)=> console.log(data)) 
    }


  return (
   <div className='flex flex-col justify-center h-screen items-center'>
    <h2 className='text-[blue] text-[40px]'>Login</h2>
    <form className='flex flex-col items-start gap-2' onSubmit={loginFunc}>
      <input type="text" placeholder='Enter Email Address' className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=> setEmail(event.target.value)}/>
      <input type="password" placeholder='Enter Your Password'className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=> setPassword(event.target.value)}/>
      <button type='submit' className='py-1 px-3 outline-none rounded-md bg-blue-500 border-none text-white'>Submit</button>
    </form>
    
    <div className='flex flex-col gap-1 mt-7'>
      <a href="/register" className='hover:text-blue-500'>Don't have an account? Register here</a>
      <a href="/forgot/password" className='hover:text-blue-500'>Forgot Password?</a>
    </div>
    
   </div>
  )
}

export default App
