import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function SignIn() {
    return (
        <div className="signIn-container">
            <Link className="back-arrow" to="/home">&larr;</Link>

            <div className="logo-container">
                <div className="logo">
                    <div className="inner-logo"></div>
                </div>
                <h1>Atlegang DA</h1>
            </div>

            <button className="social-signin google">Sign in with Google</button>
            <button className="social-signin facebook">Sign in with Facebook</button>

            <div className="separator">Or</div>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />

            <Link to="#" className="forgot-password">Forgot password?</Link>
            <button className="sign-in-button">Sign in</button>
            <Link to="/createaccount" className="create-account-link">No account? Create one</Link>
        </div>
    );
}

export default SignIn;
