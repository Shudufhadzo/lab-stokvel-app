import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <div className="signIn-container">
            {/* Logo and Title */}
            <div className="logo-container">
                <div className="logo">
                    <div className="inner-logo"></div>
                </div>
                <h1>Atlegang DA</h1>
            </div>

            {/* Sign-in and Create Account Buttons */}
            <div>
                <Link to="/signin">
                    <button className="sign-in">Sign in</button>
                </Link>
                <Link to="/createaccount">
                    <button className="create-account">Create account</button>
                </Link>
            </div>

            {/* Terms and Conditions Text */}
            <p>By using this service, you agree to the terms and conditions</p>
        </div>
    );
}

export default Home;
