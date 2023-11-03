import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function EmailVerification() {
    return (
        <div className="container">
            {/* Back arrow */}
            <div className="back-arrow"><Link to="/createaccount">&larr;</Link></div>
            
            {/* Logo and Title */}
            <div className="signIn-container">
                <div className="logo">
                    <div className="inner-logo"></div>
                </div>
                <h1>Atlegang DA</h1>
            </div>

            {/* Email Verification Info */}
            <h2>Next up, verify your email</h2>
            <p>
                To continue setting up your account, head over to your email inbox and click on the verification link we just sent you.
            </p>
            
            {/* Resend Email and Complete Buttons */}
            <div className="verification-actions">
                <button className="resend-email">Resend email</button>
                <Link to="/landing">
                    <button className="complete-button">Complete</button>
                </Link>

            </div>
        </div>
    );
}

export default EmailVerification;
