import React, { useState } from 'react'
import { assets } from '../assets/assets'
import './LoginPopup.css'
const LoginPopup = ({setShowLogin}) => {
  const [curr,setCurr]=useState("login")
  return (
    <div className='login'>
      <form className='login-container'>
        <div className="login-pop">
          <h2>{curr}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
      <div className="form">
        {
          curr==="login"?<></>:   <input type="text" />
        }
      
         <input type="text" />
         <input type="text" />
      </div>
      <button>{curr ==="sign Up"?"create account" :"login"}</button>
      <div className="login-condition">
        <input type="checkbox" />
        <p>by click </p>

      </div>
      {curr ==="login"?   <p>create new account <span  onClick={()=>setCurr("sign Up")}>click here</span></p>:   <p>allready account <span onClick={()=>setCurr("login")}>login here</span></p>}
   
   
      </form>
    </div>
  )
}

export default LoginPopup
