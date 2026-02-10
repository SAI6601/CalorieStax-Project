import { motion } from 'framer-motion';
import { Apple, Chrome, Droplets, Flame, Footprints, Utensils } from 'lucide-react'; // Added icons for social & fitness
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); navigate('/home'); }, 1500);
  };

  // Floating Animation for cards
  const float = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex overflow-hidden">
      
      {/* LEFT SIDE: Floating 3D Dashboard (The "Salesai" Look adapted for Fitness) */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 relative items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stax-teal/20 via-gray-900 to-gray-900"></div>
        
        <div className="relative z-10 w-[120%] h-[120%] flex flex-col items-center justify-center gap-6 rotate-[-12deg] translate-x-10">
          
          {/* Row 1 of Floating Cards */}
          <motion.div variants={float} animate="animate" className="flex gap-6">
            <div className="bg-gray-800/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl w-48">
              <div className="flex justify-between mb-2"><span className="text-gray-400 text-xs">Calories</span><Flame size={16} className="text-orange-500"/></div>
              <div className="text-2xl font-bold text-white">1,250</div>
              <div className="h-1.5 bg-gray-700 rounded-full mt-3 overflow-hidden"><div className="w-[70%] h-full bg-orange-500"></div></div>
            </div>
            <div className="bg-stax-teal/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl w-56 transform translate-y-8">
              <div className="flex justify-between mb-2"><span className="text-teal-900 text-xs font-bold uppercase">Protein Goal</span><Utensils size={16} className="text-teal-900"/></div>
              <div className="text-3xl font-black text-gray-900">140g</div>
              <div className="text-teal-900 text-xs mt-1">Target hit! 🥩</div>
            </div>
          </motion.div>

          {/* Row 2 of Floating Cards */}
          <motion.div variants={float} animate="animate" transition={{ delay: 1 }} className="flex gap-6 translate-x-8">
             <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl w-52">
               <div className="flex items-center gap-3 mb-3">
                 <div className="bg-blue-100 p-2 rounded-lg"><Droplets size={20} className="text-blue-500"/></div>
                 <div><div className="text-gray-900 font-bold">Hydration</div><div className="text-xs text-gray-500">Daily Water</div></div>
               </div>
               <div className="text-2xl font-bold text-gray-900">2.5 L</div>
             </div>
             <div className="bg-gray-800/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl w-48 transform -translate-y-4">
              <div className="flex justify-between mb-2"><span className="text-gray-400 text-xs">Steps</span><Footprints size={16} className="text-stax-teal"/></div>
              <div className="text-2xl font-bold text-white">8,432</div>
              <div className="h-1.5 bg-gray-700 rounded-full mt-3 overflow-hidden"><div className="w-[85%] h-full bg-stax-teal"></div></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE: Clean Login Form */}
      <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Sign in to CalorieStax</h1>
            <p className="text-gray-400">Welcome back! Please enter your details.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-stax-teal focus:border-transparent outline-none transition-all placeholder-gray-500" 
                  placeholder="Enter your email" 
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-stax-teal focus:border-transparent outline-none transition-all placeholder-gray-500" 
                  placeholder="••••••••" 
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-400 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-stax-teal focus:ring-stax-teal" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-stax-teal hover:text-teal-400 font-medium">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-stax-teal text-gray-900 font-bold py-3.5 rounded-xl hover:bg-teal-400 transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-teal-500/20"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-800"></div>
            <span className="px-4 text-xs text-gray-500 uppercase font-medium">Or login with</span>
            <div className="flex-1 border-t border-gray-800"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 text-white py-2.5 rounded-xl hover:bg-gray-700 transition">
              <Chrome size={20} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 text-white py-2.5 rounded-xl hover:bg-gray-700 transition">
              <Apple size={20} /> Apple
            </button>
          </div>

          <p className="mt-8 text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-stax-teal font-bold hover:underline">
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;