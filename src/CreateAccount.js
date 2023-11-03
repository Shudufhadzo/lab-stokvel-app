import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function CreateAccount() {
    return (
        <div className="signIn-container"> 
            <Link className="back-arrow" to="/signin">&larr;</Link>

            <div className="logo-container">
                <div className="logo">
                    <div className="inner-logo"></div>
                </div>
                <h2>Create your account</h2>
            </div>

            <button className="social-signin google">Continue with Google</button>
            <button className="social-signin facebook">Continue with Facebook</button>

            <div className="separator">Or</div>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />

            <Link to="/createprofile" className="sign-in-button">Continue</Link>
            <Link to="/signin" className="create-account-link">Already have an account? Sign in</Link>
        </div>
    );
}

export default CreateAccount;
