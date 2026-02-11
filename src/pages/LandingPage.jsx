import { signOut } from 'firebase/auth';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Calculator, LogOut, ShoppingBag, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth

const LandingPage = () => {
  const navigate = useNavigate();
  
  // Get current user info (if available)
  const user = auth.currentUser;
  const userName = user?.displayName || "Athlete";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect back to Login
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const features = [
    {
      title: "Calorie Tracker",
      desc: "Log your daily meals, track macros, and monitor your progress.",
      icon: Activity,
      link: "/tracker",
      color: "bg-blue-600",
      delay: 0.1
    },
    {
      title: "BMI Calculator",
      desc: "Calculate your ideal weight and metabolic rate instantly.",
      icon: Calculator,
      link: "/calculator",
      color: "bg-purple-600",
      delay: 0.2
    },
    {
      title: "Diet Shop",
      desc: "Order healthy meal preps and supplements directly.",
      icon: ShoppingBag,
      link: "/shop",
      color: "bg-stax-teal",
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-gray-800">
        <div className="text-2xl font-bold tracking-widest uppercase flex items-center gap-2">
          CALORIE<span className="text-stax-teal">STAX</span>
        </div>
        
        <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-gray-400">
                <User size={18} />
                <span className="text-sm">{user?.email}</span>
            </div>
            <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 bg-gray-800 hover:bg-red-500/20 hover:text-red-400 px-4 py-2 rounded-lg transition-all"
            >
            <LogOut size={18} /> <span className="hidden sm:inline">Logout</span>
            </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Side */}
        <div className="md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-stax-teal font-bold tracking-wider mb-2">DASHBOARD</h2>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              HELLO, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{userName.toUpperCase()}.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              You are signed in. Ready to crush your goals today? Select a tool from the hub to get started.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid Side */}
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          {features.map((item, index) => (
            <Link to={item.link} key={index}>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-stax-teal/50 hover:bg-gray-800 transition-all shadow-lg"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-xl ${item.color} text-white shadow-lg group-hover:shadow-${item.color}/50 transition-all`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-stax-teal transition">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
                
                <div className="bg-gray-700/30 p-3 rounded-full group-hover:bg-stax-teal group-hover:text-black transition-all">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;