import { Activity, Calculator, Menu, ShoppingCart, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-white min-h-screen bg-gray-900">
      
      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop" 
            alt="Healthy food background"
            className="h-full w-full object-cover"
          />
          {/* Dark Overlay - Critical for the STAX look */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* NAVBAR */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-widest uppercase border-2 border-white px-2 py-1">
            CALORIE<span className="font-light">STAX</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
            {['TRACKER', 'CALCULATOR', 'FOOD SHOP', 'COACH'].map((item) => (
              <a key={item} href="#" className="hover:text-stax-teal transition duration-300 relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-stax-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-stax-teal transition" />
            {/* REPLACING THE OLD BUTTON WITH THIS LINK */}
            <Link to="/login" className="flex items-center gap-2 border border-white px-6 py-2 text-sm font-bold uppercase hover:bg-white hover:text-black transition duration-300">
            <User size={16}/> Sign In
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto pb-20">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Future <br />
              of <span className="text-stax-teal">Nutrition</span> Is Here.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-10 leading-relaxed border-l-4 border-stax-teal pl-6">
              Track calories, order healthy meals, and get personalized AI coaching.
              Stop guessing and start transforming your health today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-stax-teal text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-teal-400 transition shadow-lg flex items-center justify-center gap-2">
                <Activity size={18} /> Start Tracking
              </button>
              
              <button className="border border-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition flex items-center justify-center gap-2">
                <Calculator size={18} /> Calculate BMI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;