import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import MyStokvels from './MyStokvels';
import JoinStokvel from './JoinStokvel'; // Import your new components here
import CreateStokvel from './CreateStokvel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<MyStokvels />} />
        <Route path="/join" element={<JoinStokvel />} />
        <Route path="/create" element={<CreateStokvel />} />
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
export default App;
