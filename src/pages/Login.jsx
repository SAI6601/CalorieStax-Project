import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Apple, ArrowRight, Chrome, Eye, EyeOff, Lock, Mail, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { appleProvider, auth, googleProvider } from '../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // --- FORGOT PASSWORD STATE ---
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [isResetting, setIsResetting] = useState(false);

  // --- ANIMATION VARIANTS ---
  const inputVariants = {
    rest: { scale: 1, borderColor: "rgba(55, 65, 81, 1)" },
    focus: { scale: 1.02, borderColor: "#2dd4bf", boxShadow: "0px 0px 8px rgba(45, 212, 191, 0.3)" }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(45, 212, 191, 0.4)" },
    tap: { scale: 0.95 }
  };

  // --- LOGIN LOGIC ---
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("Please verify your email first! Check your inbox.");
        await auth.signOut();
        setIsLoading(false);
        return;
      }
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (providerName) => {
    setError("");
    setIsLoading(true);
    try {
      const provider = providerName === 'google' ? googleProvider : appleProvider;
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (err) {
      console.error("Login Failed:", err);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- RESET PASSWORD LOGIC ---
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      setResetMessage("Please enter your email.");
      return;
    }
    setIsResetting(true);
    setResetMessage("");
    
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetMessage("Success! Check your email for the reset link.");
      setTimeout(() => {
        setShowResetModal(false);
        setResetMessage("");
      }, 3000);
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/user-not-found') {
        setResetMessage("No account found with this email.");
      } else {
        setResetMessage("Error sending email. Try again.");
      }
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex text-white overflow-hidden font-sans relative">
      
      {/* LEFT SIDE: Visuals */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 bg-gradient-to-br from-gray-800 to-black"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1770&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 text-2xl font-bold tracking-widest uppercase">
          CALORIE<span className="text-stax-teal">STAX</span>
        </div>
        <div className="relative z-10 mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-6xl font-black leading-tight mb-6"
          >
            Welcome <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-stax-teal to-teal-400">Back.</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-md">
            Your fitness data is waiting. Sign in to sync your workouts, meals, and progress.
          </p>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Interactive Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-900 relative z-0">
        <div className="w-full max-w-md">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-bold mb-2">Sign In</h2>
            <p className="text-gray-400 mb-8">Enter your credentials to access your account.</p>
          </motion.div>

          <form onSubmit={handleEmailLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <motion.div className="relative" initial="rest" whileFocus="focus" whileHover="focus" variants={inputVariants}>
                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                <motion.input 
                  type="email" required 
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-12 py-3 outline-none text-white transition-all" 
                  placeholder="you@example.com" 
                />
              </motion.div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-300">Password</label>
                {/* FORGOT PASSWORD BUTTON */}
                <button 
                  type="button"
                  onClick={() => setShowResetModal(true)}
                  className="text-sm text-stax-teal hover:text-teal-400 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              <motion.div className="relative" initial="rest" whileFocus="focus" whileHover="focus" variants={inputVariants}>
                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                <motion.input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-12 py-3 outline-none text-white transition-all pr-12" 
                  placeholder="••••••••" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-white transition-colors outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </motion.div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg flex items-center gap-2 text-sm"
                >
                  <AlertCircle size={16}/> {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button 
              type="submit" 
              variants={buttonVariants} whileHover="hover" whileTap="tap"
              disabled={isLoading} 
              className="w-full bg-stax-teal text-gray-900 font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 shadow-lg shadow-teal-500/20"
            >
              {isLoading ? 'Authenticating...' : <>Sign In <ArrowRight size={20}/></>}
            </motion.button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-gray-900 text-gray-500">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.button 
              onClick={() => handleSocialLogin('google')}
              className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 py-2.5 rounded-xl transition-colors hover:bg-gray-700"
            >
              <Chrome size={20}/> Google
            </motion.button>
            <motion.button 
              onClick={() => handleSocialLogin('apple')}
              className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 py-2.5 rounded-xl transition-colors hover:bg-gray-700"
            >
              <Apple size={20}/> Apple
            </motion.button>
          </div>

          <p className="mt-8 text-center text-gray-400">
            No account? <Link to="/signup" className="text-stax-teal font-bold hover:underline">Sign Up Now</Link>
          </p>
        </div>
      </div>

      {/* --- FORGOT PASSWORD MODAL --- */}
      <AnimatePresence>
        {showResetModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 border border-gray-700 w-full max-w-md p-6 rounded-2xl relative shadow-2xl"
            >
              <button 
                onClick={() => setShowResetModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold mb-2">Reset Password</h3>
              <p className="text-gray-400 mb-6">Enter your email and we'll send you a link to get back into your account.</p>

              <form onSubmit={handlePasswordReset}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                    <input 
                      type="email" required
                      value={resetEmail} onChange={(e) => setResetEmail(e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-12 py-3 outline-none text-white focus:border-stax-teal transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {resetMessage && (
                   <div className={`p-3 rounded-lg mb-4 text-sm flex items-center gap-2 ${resetMessage.includes("Success") ? "bg-teal-500/10 text-stax-teal" : "bg-red-500/10 text-red-500"}`}>
                     <AlertCircle size={16}/> {resetMessage}
                   </div>
                )}

                <button 
                  type="submit" 
                  disabled={isResetting}
                  className="w-full bg-stax-teal text-gray-900 font-bold py-3 rounded-xl hover:bg-teal-400 transition-all flex justify-center"
                >
                  {isResetting ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Login;