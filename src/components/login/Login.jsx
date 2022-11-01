import React from 'react'
import LoginCss from "../login/Login.css";
import NavBar from '../NavBar';

const Login = () => {
  return (
    <div className='bg-login'>
      <NavBar />
      <div className='login'>
      <div className='logins'>login</div>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Password" />
        <button>login</button>
      </div>

    </div>
  )
}

export default Login
