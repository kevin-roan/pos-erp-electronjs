import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Init() {
  return (
    <div>
      <div>POS - ERP</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
      </Routes>
    </Router>
  );
}
