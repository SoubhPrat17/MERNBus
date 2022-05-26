import React from 'react'
import "../App.css"
import loginimg from "./images/login-image.png"


const Login = () => {
    return (
        <>
            <section className="login">
                <div className="container mt-15">
                    <div className="login-content row">
                        <div className="login-form col-md-6">
                            <h2 className="login-title">User Login</h2>

                            <form id='login'>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input className='form-control' type="email" placeholder='Enter your Email' name='email' id='email' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-shield-security"></i>
                                    </label>
                                    <input className='form-control' type="password" placeholder='Enter your Password' name='password' id='password' />
                                </div>
                            </form>
                        </div>

                        <div className="col-sm login-image">
                            <figure>
                                <img src={loginimg} alt="Login image" height="450px" width="450px" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
