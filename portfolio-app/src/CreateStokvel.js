import React from 'react';
import { Link } from 'react-router-dom';
import './JoinStokvel.css';

const JoinStokvel = () => (
  <div className="container">
    <header>
        <h1>DeFi Stokvel</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/join">Join Stokvel</Link></li>
                <li><Link to="/create">Create Stokvel</Link></li>
            </ul>
        </nav>
    </header>

    <div className="main-content">
        <h2>Join a Stokvel</h2>
        <p>Choose one of the options below to start saving with DeFi Stokvel:</p>
        <div className="buttons" style={{marginBottom: '40px'}}>
            <button type="button" style={{fontSize: '20px', padding: '12px 24px'}}>Join with Friends</button>
            <button type="button" style={{fontSize: '20px', padding: '12px 24px'}}>Find Partners</button>
        </div>
        <h3 style={{fontSize: '28px', marginBottom: '20px'}}>Difference between the two options:</h3>
        <ul style={{fontSize: '18px', lineHeight: '1.8'}}>
            <li><strong>Join with Friends:</strong> Create a Stokvel with people you know and trust. Save together and reach your financial goals.</li>
            <li style={{marginTop: '20px'}}><strong>Find Partners:</strong> Connect with other DeFi Stokvel users to form a Stokvel group. Expand your network and benefit from collective savings.</li>
        </ul>
    </div>

    <footer>
        <div className="social-media">
            <a href="https://www.facebook.com/DeFiStokvel" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://twitter.com/DeFiStokvel" target="_blank" rel="noopener noreferrer">Twitter</a> |
            <a href="https://www.linkedin.com/company/DeFiStokvel" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://www.instagram.com/DeFiStokvel" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; 2023 DeFi Stokvel. All Rights Reserved.</p>
    </footer>
  </div>
);

export default JoinStokvel;
