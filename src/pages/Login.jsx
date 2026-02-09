// src/pages/Login.jsx
import { ArrowLeft, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 relative">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-stax-teal rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Login Card */}
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 shadow-2xl relative z-10">
        
        <Link to="/" className="text-gray-400 hover:text-stax-teal transition mb-6 inline-flex items-center gap-2 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to continue your fitness journey</p>
        </div>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input 
                type="email" 
                className="w-full bg-gray-900/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-stax-teal focus:border-stax-teal block pl-10 p-3 placeholder-gray-500 transition" 
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input 
                type="password" 
                className="w-full bg-gray-900/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-stax-teal focus:border-stax-teal block pl-10 p-3 placeholder-gray-500 transition" 
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-stax-teal hover:bg-teal-400 text-gray-900 font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-[1.02]">
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-bold text-stax-teal hover:text-teal-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;