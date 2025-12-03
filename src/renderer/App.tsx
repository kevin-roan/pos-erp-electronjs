import { Link, MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './auth/signin';
// import { useState } from 'react';

function Init() {
  return (
    <div>
      <div>POS - ERP</div>
      <Link to="/signin">Login</Link>
    </div>
  );
}

export default function App() {
  // const [authenticated, setAuthenticated] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}
