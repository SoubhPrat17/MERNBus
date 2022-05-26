import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import image from './images/signup-page-png.png'

const Register = () => {
    return (
        <>
            <section className="register">
                <div className="container mt-5">
                <div className="register-content">
                    <div className="signup-form row">
                        <h2 className="form-title">Register here</h2>
                        <div className="col-md">
                        <form id="registration-form" className="register-form">

                            <div className="form-group">
                                <label htmlFor="name">
                                <i className="zmdi zmdi-account"></i>
                                </label>
                                <input className='form-control' type="text" placeholder='Enter your Name' name='name' id='name' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                <i className="zmdi zmdi-email"></i>
                                </label>
                                <input className='form-control' type="email" placeholder='Enter your Email' name='email' id='email' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                <i className="zmdi zmdi-phone"></i>
                                </label>
                                <input className='form-control' type="tel" placeholder='Phone number' name='phone' id='phone' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="work">
                                <i className="zmdi zmdi-case"></i>
                                </label>
                                <input className='form-control' type="text" placeholder='Your Workplace' name='work' id='work' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                <i className="zmdi zmdi-shield-security"></i>
                                </label>
                                <input className='form-control' type="password" placeholder='Enter your Password' name='password' id='password' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm-password">
                                <i className="zmdi zmdi-shield-check"></i>
                                </label>
                                <input className='form-control' type="password" placeholder='Confirm your Password' name='conpassword' id='conpassword' />
                            </div>

                            <div className="form-group form-button">
                                <input className='btn btn-primary mb-2' type="submit" value="Submit" placeholder='Submit' name="register" id="register" />
                            </div>
                        </form>
                        </div>
                        

                        <div className="register-image col-md">
                            <figure>
                                <img src={image} alt="Registration page Image" />
                            </figure>
                            <NavLink to ="/login" className='register-navlink text-dark'>Already Registered?</NavLink>
                        </div>
                    </div>
                </div>

                </div>
            </section>
        </>
    )
}

export default Register
