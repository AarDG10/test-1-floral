import React from 'react'
import './CSS/Login.css'

export const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name'/>
          <input type='email' placeholder='Enter Your Email Address'/>
          <input type='password' placeholder="Enter Your Password"/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already Have An Account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By Continuing, I Agree to the Terms of Use & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
export default Login;