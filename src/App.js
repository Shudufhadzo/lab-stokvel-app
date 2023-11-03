import React from 'react'; // Add this line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import CreateProfile from './CreateProfile';
import EmailVerification from './EmailVerification';
import Landing from './Landing';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/createaccount" element={<CreateAccount />} />
                <Route path="/createprofile" element={<CreateProfile />} />
                <Route path="/emailverification" element={<EmailVerification />} />
                <Route path="/landing" element={<Landing />} />
            </Routes>
        </Router>
    );
}

export default App;
