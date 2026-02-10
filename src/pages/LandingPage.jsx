import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calculator, ShoppingCart, User } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="font-sans text-white min-h-screen bg-gray-900 overflow-hidden relative">
      {/* Dynamic Background */}
      <motion.div 
        initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053" alt="Background" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-black/40"></div>
      </motion.div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-widest uppercase border-2 border-white px-2 py-1">
          CALORIE<span className="font-light text-stax-teal">STAX</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          {['TRACKER', 'CALCULATOR', 'SHOP', 'COACH'].map(item => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-stax-teal transition-colors">{item}</Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="flex items-center gap-2 border border-white px-6 py-2 text-sm font-bold uppercase hover:bg-white hover:text-black transition">
            <User size={16}/> Sign In
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex flex-col justify-center h-[80vh] px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            THE FUTURE <br /> OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-stax-teal to-teal-200 text-glow">NUTRITION</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mb-10 border-l-4 border-stax-teal pl-6">
            Track calories, order healthy meals, and get personalized AI coaching. Stop guessing. Start transforming.
          </p>
          <div className="flex gap-4">
            <Link to="/dashboard">
              <button className="btn-primary flex items-center gap-2 text-lg"> <Activity size={20} /> Start Tracking </button>
            </Link>
            <Link to="/calculator">
              <button className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-xl font-bold uppercase transition flex items-center gap-2"> <Calculator size={20} /> BMI Calc </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default LandingPage;