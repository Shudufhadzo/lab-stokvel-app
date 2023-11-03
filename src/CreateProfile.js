import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function CreateProfile() {
    return (
        <div className="profile-container">
            <Link className="back-arrow" to="/createaccount">&larr;</Link>

            <div className="logo-container">
                <div className="logo">
                    <div className="inner-logo"></div>
                </div>
                <h2>Create your profile</h2>
            </div>

            <p>Please tell us a bit about yourself</p>

            <label htmlFor="full-name">What should we call you?</label>
            <input type="text" id="full-name" placeholder="Enter your full name" />

            <label htmlFor="employment-status">What is your employment status?</label>
            <select id="employment-status">
                <option value="" disabled selected>Choose your status</option>
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
            </select>

            <Link to="/emailverification">
                <button className="next-button">Next</button>
            </Link>
        </div>
    );
}

export default CreateProfile;
