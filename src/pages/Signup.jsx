import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import { AlertCircle, ArrowRight, CheckCircle, Eye, EyeOff, Lock, Mail, Ruler, User, Weight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // NEW: Toggle State
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    height: "",
    weight: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch("https://lottie.host/58461377-6576-4933-9c03-35df73833308/2Hq4Kq4v9g.json")
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  const handleSignup = async (e) => { 
    e.preventDefault(); 
    setError("");
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: formData.fullName });
      await sendEmailVerification(user);

      alert("Account created! A verification link has been sent to " + formData.email + ". Please check your inbox.");
      navigate('/'); 

    } catch (err) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError("That email is already taken. Try logging in.");
      } else if (err.code === 'auth/weak-password') {
        setError("Password should be at least 6 characters.");
      } else {
        setError(err.message.replace("Firebase: ", ""));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex text-white overflow-hidden relative">
      
      {/* LEFT SIDE: Visuals */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative items-center justify-center p-12"
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="text-2xl font-bold tracking-widest uppercase mb-8">
            CALORIE<span className="text-stax-teal">STAX</span>
          </div>
          <div className="w-full max-w-lg drop-shadow-2xl">
            {animationData && <Lottie animationData={animationData} loop={true} className="w-full h-auto" />}
          </div>
          <div className="mt-8">
            <h1 className="text-4xl font-black leading-tight">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-stax-teal to-teal-200">Movement.</span>
            </h1>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-900">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-lg">
          
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              Create Account <CheckCircle className="text-stax-teal h-6 w-6" />
            </h2>
            <p className="text-gray-400">Start tracking your health in seconds.</p>
          </motion.div>

          <form onSubmit={handleSignup} className="space-y-4">
            
            <motion.div variants={itemVariants}>
               <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
               <div className="relative group">
                 <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-stax-teal transition-colors"/>
                 <input 
                   type="text" name="fullName" required
                   value={formData.fullName} onChange={handleChange}
                   className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none transition-all" 
                   placeholder="John Doe" 
                 />
               </div>
            </motion.div>

            <motion.div variants={itemVariants}>
               <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
               <div className="relative group">
                 <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-stax-teal transition-colors"/>
                 <input 
                   type="email" name="email" required
                   value={formData.email} onChange={handleChange}
                   className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none transition-all" 
                   placeholder="john@example.com" 
                 />
               </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Height (cm)</label>
                <div className="relative group">
                  <Ruler className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-stax-teal transition-colors"/>
                  <input 
                    type="number" name="height"
                    value={formData.height} onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none transition-all" 
                    placeholder="175" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Weight (kg)</label>
                <div className="relative group">
                  <Weight className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-stax-teal transition-colors"/>
                  <input 
                    type="number" name="weight"
                    value={formData.weight} onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none transition-all" 
                    placeholder="70" 
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
               <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
               <div className="relative group">
                 <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-stax-teal transition-colors"/>
                 
                 {/* NEW: Dynamic Type & Toggle Button */}
                 <input 
                   type={showPassword ? "text" : "password"} 
                   name="password" required
                   value={formData.password} onChange={handleChange}
                   className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl pl-12 pr-12 py-3.5 focus:ring-2 focus:ring-stax-teal outline-none transition-all" 
                   placeholder="••••••••" 
                 />

                 <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-white transition-colors outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
               </div>
            </motion.div>

            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm flex items-center gap-2 bg-red-400/10 p-3 rounded-lg">
                <AlertCircle size={16}/> {error}
              </motion.div>
            )}

            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isLoading}
              className="w-full bg-stax-teal text-gray-900 font-bold py-4 rounded-xl hover:bg-teal-400 transition-all mt-6 flex justify-center items-center gap-2"
            >
              {isLoading ? 'Creating Account...' : <>Create Account <ArrowRight size={20}/></>}
            </motion.button>
          </form>

          <motion.p variants={itemVariants} className="mt-8 text-center text-gray-400">
            Already a member? <Link to="/" className="text-stax-teal font-bold hover:underline transition-all">Sign In</Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;