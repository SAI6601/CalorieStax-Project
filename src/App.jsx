import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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
        {/* PUBLIC AUTH ROUTES */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* PRIVATE HUB ROUTE (User lands here after login) */}
        <Route path="/home" element={<LandingPage />} />
        
        {/* FEATURE ROUTES */}
        <Route path="/tracker" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/shop" element={<Shop />} />
        
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;