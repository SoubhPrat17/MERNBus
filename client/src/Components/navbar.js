import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"
import logo from "./images/bus-sm.png"

const Navbar = () => {
    return (

        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand nav-font" to="/">
                <img src={logo} width="45" height="30" className="d-inline-block align-top ms-3" alt="" />Bus Booking
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/tickets">Tickets</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
