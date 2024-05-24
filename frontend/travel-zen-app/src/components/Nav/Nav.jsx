import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {

  return (
    <nav className="navBar">
        <img className="logo" src="https://www.travel-zen.com/storage/TRAVELZEN_logo-seul.png"/>
     <div className="links">
        <Link className="nav" to="/">Home</Link>
        <Link className="nav" to="/destinations">Destinations</Link>
        <Link className="nav" to="/register">Register</Link>
        <Link className="nav" to="/login">Login</Link>
      </div>
    </nav>
  );
}