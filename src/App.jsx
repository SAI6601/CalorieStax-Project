import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Import Pages
import Calculator from './pages/Calculator';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Login />} />          {/* Default is now Login */}
        <Route path="/signup" element={<Signup />} />
        
        {/* PROTECTED ROUTES (Ideally) */}
        <Route path="/home" element={<LandingPage />} /> {/* User goes here AFTER login */}
        
        {/* APP FEATURES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/tracker" element={<Dashboard />} /> {/* Alias for tracker link */}
      </Routes>
    </Router>
  );
}

export default App;