import React from 'react';
import { useState } from 'react';
const Register = () => {
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
  
    const registerFunc = (event) =>{
      event.preventDefault()
      fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
                "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          phoneNumber,
          password,
          password_confirmation: passwordConfirmation,
          
          

        })}).then (response => response.json())
        .then((data)=> console.log(data)) 
      }
  
  
    return (
     <div className='flex flex-col justify-center h-screen items-center'>
      <h2 className='text-[blue] text-[40px]'>Register</h2>
      <form className='flex flex-col items-start gap-2' onSubmit={registerFunc}>
        <input type="text" placeholder='Enter Email Address' className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=> setEmail(event.target.value)}/>
       
        <input type="text" placeholder='Enter User Name' className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=> setUserName(event.target.value)}/>
        
        <input type="text" placeholder='Enter Phone Number' className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=> setPhoneNumber(event.target.value)}/>
        <input type="password" placeholder='Enter Your Password'className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=> setPassword(event.target.value)}/>
        <input type="password" placeholder='Confirm Your Password'className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=> setPasswordConfirmation(event.target.value)}/>
        <button type='submit' className='py-1 px-3 outline-none rounded-md bg-blue-500 border-none text-white'>Create Account</button>
      </form>
      
      <div className='flex flex-col gap-1 mt-7'>
        <a href="/" className='hover:text-blue-500'>Already have an account? Login here</a>
        <a href="/forgot/password" className='hover:text-blue-500'>Forgot Password?</a>
      </div>
      
     </div>
    )
  
}

export default Register;
