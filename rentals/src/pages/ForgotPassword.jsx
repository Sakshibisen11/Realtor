
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth'
import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
export default function ForgotPassword() {
 
  const [email,setEmail]=useState("");
  
  function onChange(e){
    setEmail(e.target.value)
  }
  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth=getAuth();
      await sendPasswordResetEmail(auth,email);
      toast.success("Email was sent")
    } catch (error) {
      toast.error("Cannot send email")
    }
  }
  return (
  <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
      <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
        <img src=" https://plus.unsplash.com/premium_photo-1661423729611-2ad9b64b98f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" 
        alt="key"
        className='w-full rounded-2xl ' />
      </div>
      <div className='w-full md:w-[67%] lg:w-[40%]  lg:ml-20'>
        <form onSubmit={onSubmit}>
          <input 
          className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="email" id="email" value={email} onChange={onChange} placeholder="Email Address"/>
         
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p className="mb-6">Don't have an account?
              <Link to="/sign-up" className='text-red-600
               hover:text-red-700 transition duration-200 ease-in-out'> Register </Link>
            </p>
            <p>
              <Link to="/sign-in"
              className='text-blue-600
              hover:text-blue-800 transition duration-200 ease-in-out'
              >Sign In</Link>
            </p>
          </div>
          <button type="submit"
          className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' 
          >Send reset Password</button>
          <div className='my-4 before:border-t flex before:flex-1 items-center before:border-gray-600 my-4 after:border-t flex after:flex-1 items-center after:border-gray-600'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth/>
        </form>
        
      </div>
    </div>
    
    </section>
  )
}
