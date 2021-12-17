import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Vidly</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link " aria-current="page" to="/Movies">Movies</NavLink>
        <NavLink className="nav-link" to="/Customers">Customers</NavLink>
        <NavLink className="nav-link" to="/Rentals">Rentals</NavLink>
        <NavLink className="nav-link" to="/loginForm">login</NavLink>
        <NavLink className="nav-link" to="/register">Register</NavLink>
        {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
    )
}
