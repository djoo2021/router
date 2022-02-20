import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
  <nav >
  <Link className="navbar-brand" to="moviesfilms">MOVIES</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link  className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/details">Details</Link>
    </li>
    </ul>
   
  </div>
</nav>
        </div>
  )
}

export default Header