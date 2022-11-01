import React from 'react'
import NavBar from '../../NavBar';
import Registrcss from "../registr/Registr.css";

const Registr = () => {
  return (
    <div className='bg-login'>
      <NavBar />
      <div className='login'>
      <div className='logins'>registr</div>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Password" />
        <input type="email" placeholder="Email .." />
        <input type="text" placeholder="Telefon Number" />
        <button>registr</button>
      </div>

    </div>
  )
}

export default Registr
