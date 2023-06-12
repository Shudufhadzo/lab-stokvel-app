import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import stok1 from './images/stok1.png';
import stok2 from './images/stok2.png';
import stok3 from './images/stok3.png';

const Portfolio = () => {
  const [stokvels, setStokvels] = useState([]);

  useEffect(() => {
    const userId = 1; // Replace with the current user's ID

    fetch(`http://localhost:3000/stokvels/${userId}`)
      .then(response => response.json())
      .then(data => setStokvels(data.stokvels))
      .catch(error => console.log(error));
  }, []);

  return (
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
        <h2>Your Stokvel Portfolio</h2>
        <p>Keep track of your stokvel investments and returns. Join or create stokvels to grow your wealth with the power of DeFi Stokvel.</p>
      </div>

      <div className="portfolio">
        {stokvels.map((stokvel, index) => (
          <div className="portfolio-item" key={index}>
            <img src={index === 0 ? stok1 : index === 1 ? stok2 : stok3} alt={`Stokvel ${index + 1}`} />
            <h3>{stokvel.stokvelName}</h3>
            <p>Investment: R{stokvel.currentValue}</p>
            <p>Current value: R{(stokvel.currentValue * (1 + stokvel.roi)).toFixed(2)}</p>
            <span>+{(stokvel.roi * 100).toFixed(2)}% ROI</span>
          </div>
        ))}
      </div>

      <div className="portfolio-buttons">
        <Link to="/dashboard" className="button">My Stokvels</Link>
        <Link to="/join" className="button">Join Stokvel</Link>
        <Link to="/create" className="button">Create Stokvel</Link>
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
};

export default Portfolio;
