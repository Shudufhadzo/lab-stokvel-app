import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Landing() {
    const [showAccounts, setShowAccounts] = useState(false);

    return (
        <div className="landing-container">
            <div className="header">
                <Link to="/emailverification">
                    <span className="back-arrow">&larr;</span>
                </Link>
                <h1>Atlegang DA</h1>
                <span className="menu-icon" onClick={() => setShowAccounts(!showAccounts)}>
                    ☰
                </span>
            </div>

            {showAccounts && (
                <div className="accounts-dropdown">
                    <h2>Satoshi Nakamoto</h2>
                    <p>View account info</p>
                    <div className="account-section">
                        <h3>Main account</h3>
                        <p>Transactions</p>
                        <p>Payment methods</p>
                        <p>Wallet address book</p>
                    </div>
                    <div className="account-section">
                        <p>Security</p>
                        <p>Subaccounts</p>
                        <p>Block account</p>
                        <p>Alerts</p>
                        <p>Referrals</p>
                        <p>Help & Support</p>
                        <p>Settings</p>
                        <p>Sign out</p>
                    </div>
                </div>
            )}

            <h2>Join a stokvel</h2>
            <div className="search-bar">
                <span className="search-icon"></span>
                <input type="text" placeholder="Search" />
            </div>
            <h3>Recommended stokvels</h3>
            <div className="stokvel-list">
                <div className="stokvel-item">
                    <span className="stokvel-icon">R</span>
                    Local Stokvel
                    <span className="stokvel-arrow"></span>
                </div>
                <div className="stokvel-item">
                    <span className="stokvel-icon">R</span>
                    Provincial Stokvel
                    <span className="stokvel-arrow"></span>
                </div>
                <div className="stokvel-item">
                    <span className="stokvel-icon">₿</span>
                    International Stokvel
                    <span className="stokvel-arrow"></span>
                </div>
                <div className="stokvel-item">
                    <span className="stokvel-icon">⭐</span>
                    New Age Stokvel
                    <span className="stokvel-arrow">></span>
                </div>
            </div>

            <div className="footer-menu">
                <div className="footer-item">
                    <div className="icon-placeholder">🏠</div>
                    <span></span>
                </div>
                <div className="footer-item">
                    <div className="icon-placeholder">💰</div>
                    <span></span>
                </div>
                <div className="footer-item">
                    <div className="icon-placeholder">🔍</div>
                    <span></span>
                </div>
                <div className="footer-item">
                    <div className="icon-placeholder">🔔</div>
                    <span></span>
                </div>
                <div className="footer-item">
                    <div className="icon-placeholder">💼</div>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

function AccountSidebar() {
    return (
      <div className="account-sidebar">
        {/* ... account sidebar content as provided above ... */}
      </div>
    );
  }
  
  export default Landing;
