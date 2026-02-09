// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator'; // <--- 1. Import This
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} /> {/* <--- 2. Add This */}
      </Routes>
    </Router>
  );
}

export default App;