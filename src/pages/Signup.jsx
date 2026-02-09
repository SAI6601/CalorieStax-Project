// src/pages/Signup.jsx
import { ArrowLeft, Lock, Mail, Ruler, User, Weight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12 relative">
      
       {/* Background Decoration */}
       <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-stax-teal rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-lg w-full bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 shadow-2xl relative z-10">
        
        <Link to="/" className="text-gray-400 hover:text-stax-teal transition mb-6 inline-flex items-center gap-2 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400">Join CalorieStax to start tracking</p>
        </div>

        <form className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input type="text" className="w-full bg-gray-900/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-stax-teal focus:border-stax-teal block pl-10 p-2.5" placeholder="John Doe" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input type="email" className="w-full bg-gray-900/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-stax-teal focus:border-stax-teal block pl-10 p-2.5" placeholder="you@example.com" />
            </div>
          </div>

          {/* Physical Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Height (cm)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Ruler className="h-5 w-5 text-gray-500" />
                </div>
                <input type="number" className="w-full bg-gray-900/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-stax-teal focus:border-stax-teal block pl-10 p-2.5" placeholder="175" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Weight (kg)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Weight className="h-5 w-5 text-gray-500" />
                </div>
                <input type="number" className="w-full bg-gray-900/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-stax-teal focus:border-stax-teal block pl-10 p-2.5" placeholder="70" />
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input type="password" className="w-full bg-gray-900/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-stax-teal focus:border-stax-teal block pl-10 p-2.5" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" className="w-full bg-stax-teal hover:bg-teal-400 text-gray-900 font-bold py-3 px-4 rounded-lg transition duration-300 mt-6">
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-stax-teal hover:text-teal-400">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;