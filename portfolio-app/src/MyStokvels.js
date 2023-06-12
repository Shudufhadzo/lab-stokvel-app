import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyStokvels.css';

const MyStokvels = () => {
  const [stokvels, setStokvels] = useState([]);
  const userId = 1; // Replace with the current user's ID

  useEffect(() => {
    fetch(`http://localhost:3000/stokvels/${userId}`)
      .then(response => response.json())
      .then(data => setStokvels(data.stokvels))
      .catch(error => console.log(error));
  }, [userId]);

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
        <h2>Your Stokvels</h2>
        <div className="stokvel-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Total Investment</th>
                <th>Current Value</th>
                <th>Gains</th>
                <th>ROI</th>
                <th>Time Left</th>
              </tr>
            </thead>
            <tbody>
              {stokvels.map((stokvel, index) => (
                <tr key={index}>
                  <td>{stokvel.stokvelName}</td>
                  <td>{stokvel.currentValue.toFixed(2)}</td>
                  <td>{(stokvel.currentValue * (1 + stokvel.roi)).toFixed(2)}</td>
                  <td>{(stokvel.currentValue * stokvel.roi).toFixed(2)}</td>
                  <td>{(stokvel.roi * 100).toFixed(2)}%</td>
                  <td>{stokvel.timeLeft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
}

export default MyStokvels;
