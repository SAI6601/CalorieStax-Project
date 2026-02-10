import { motion } from 'framer-motion';
import { CheckCircle, Target } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = (e) => { e.preventDefault(); navigate('/'); };

  const float = { animate: { y: [0, -15, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } } };

  return (
    <div className="min-h-screen bg-gray-900 flex overflow-hidden">
      
      {/* LEFT SIDE: Visuals */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-bl from-gray-800 to-gray-900 relative items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/20 via-gray-900 to-gray-900"></div>
        
        <div className="relative z-10 w-[120%] h-[120%] flex flex-col items-center justify-center gap-6 rotate-[12deg] -translate-x-10">
          
          <motion.div variants={float} animate="animate" className="flex gap-6">
            <div className="bg-white text-gray-900 p-5 rounded-2xl shadow-2xl w-56">
               <div className="flex items-center gap-3 mb-2">
                 <div className="bg-green-100 p-2 rounded-full"><CheckCircle size={20} className="text-green-600"/></div>
                 <div className="font-bold">Account Active</div>
               </div>
               <div className="text-sm text-gray-500">Your journey begins now.</div>
            </div>
          </motion.div>

          <motion.div variants={float} animate="animate" transition={{ delay: 0.5 }} className="flex gap-6 translate-x-12">
            <div className="bg-gray-800/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl w-64">
              <div className="flex justify-between mb-4"><span className="text-gray-400 text-xs uppercase tracking-wider">Target Goal</span><Target size={18} className="text-stax-teal"/></div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-white">70 kg</span>
                <span className="text-stax-teal text-sm mb-1">(-5kg)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* RIGHT SIDE: Signup Form */}
      <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
            <p className="text-gray-400">Start tracking your health in seconds.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
               <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
               <input type="text" className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none transition-all" placeholder="John Doe" />
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
               <input type="email" className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none transition-all" placeholder="john@example.com" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Height (cm)</label>
                <input type="number" className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none" placeholder="175" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Weight (kg)</label>
                <input type="number" className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none" placeholder="70" />
              </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
               <input type="password" className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none transition-all" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full bg-stax-teal text-gray-900 font-bold py-3.5 rounded-xl hover:bg-teal-400 transition-all mt-4 shadow-lg shadow-teal-500/20">
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/" className="text-stax-teal font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;