import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className='footer'>
        <img className="logo" src="https://www.travel-zen.com/storage/TRAVELZEN_logo-seul.png"/>
        <div className='footerNav'>
        <h1 className='footerHeader'>Quick Links</h1>
        <Link className="foot" to="/">Home</Link>
        <Link className="foot" to="/destinations">Destinations</Link>
        <Link className="foot" to="/register">Register</Link>
        <Link className="foot" to="/login">Login</Link>
        </div>
        <div className='footerNav2'>
         <h1 className='footerHeader2'>Contact</h1>
         <div className='foot2'><b>Address: </b>  123 Main St Orlando Fl 45268</div>
         <div className='foot2'><b>Email: </b>  TravelZen123@hotmail.com</div>
         <div className='foot2'><b>Phone: </b> 555-555-5555</div>
        </div>

    </div>
  )
}

