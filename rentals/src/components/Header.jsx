import React from 'react'
import { useState,useEffect } from 'react';
import { useLocation ,useNavigate} from 'react-router'
import {getAuth,onAuthStateChanged} from "firebase/auth"
export default function Header() {
  const [pageState,setpageState]=useState("Sign-in")
  const location=useLocation();
  const navigate=useNavigate();
  const auth=getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setpageState("Profile")
      }
      else{
        setpageState("Sign-in")
      }
    })
  },[auth])
  function pathMathRoute(route){
    if(route===location.pathname){
      return true
    }
  }
  return (
  
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
    <div className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
      <div>
           <img src="https://d3ds86a50t7cic.cloudfront.net/assets/6.4/public/default/frontend/mathrubhumi/images/popup-logo.webp" alt="logo" 
           className='h-14 cursor-pointer'
           onClick={()=>navigate("/")}
           />
        </div>
      <div>
        <ul className='flex space-x-10'>
          <li 
          className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`}
          onClick={()=>navigate("/")}>Home</li>
          <li 
           className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/offers") && "text-black border-b-red-500"}`}
           onClick={()=>navigate("/offers")}>Offers</li>
          <li
           className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
           ${(pathMathRoute("/sign-in") || pathMathRoute("/profile")) && "text-black border-b-red-500"}`}
           onClick={()=>navigate("/profile")}
           >{pageState}</li>
        </ul>
      </div>
      
    </div>
    </div>
  )
}
