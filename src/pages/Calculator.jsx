import { motion } from 'framer-motion';
import { Activity, Calculator as CalcIcon } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

const Calculator = () => {
  const [formData, setFormData] = useState({
    age: '', gender: 'male', weight: '', height: '', activity: '1.2', goal: 'maintain'
  });
  const [result, setResult] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr = (10 * formData.weight) + (6.25 * formData.height) - (5 * formData.age);
    formData.gender === 'male' ? (bmr += 5) : (bmr -= 161);
    
    const tdee = bmr * parseFloat(formData.activity);
    let target = tdee;
    if (formData.goal === 'cut') target -= 500;
    if (formData.goal === 'bulk') target += 500;

    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), target: Math.round(target) });
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Macro Calculator</h1>
            <p className="text-gray-400">Calculate your precise daily nutritional needs.</p>
          </div>

          <form onSubmit={calculateCalories} className="glass-panel p-8 rounded-2xl space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Age</label>
                <input type="number" required className="glass-input" onChange={(e) => setFormData({...formData, age: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Gender</label>
                <select className="glass-input appearance-none" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Height (cm)</label>
                <input type="number" required placeholder="175" className="glass-input" onChange={(e) => setFormData({...formData, height: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Weight (kg)</label>
                <input type="number" required placeholder="70" className="glass-input" onChange={(e) => setFormData({...formData, weight: e.target.value})} />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Activity Level</label>
              <select className="glass-input" onChange={(e) => setFormData({...formData, activity: e.target.value})}>
                <option value="1.2">Sedentary (Office job)</option>
                <option value="1.375">Light Exercise (1-2 days/week)</option>
                <option value="1.55">Moderate Exercise (3-5 days/week)</option>
                <option value="1.725">Heavy Exercise (6-7 days/week)</option>
                <option value="1.9">Athlete (2x per day)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Goal</label>
              <div className="grid grid-cols-3 gap-2">
                {['cut', 'maintain', 'bulk'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({...formData, goal: type})}
                    className={`p-3 rounded-xl capitalize text-sm transition-all border ${
                      formData.goal === type ? 'bg-stax-teal border-stax-teal text-gray-900 font-bold shadow-lg' : 'border-gray-700 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
              <CalcIcon size={20} /> Calculate Macros
            </button>
          </form>
        </motion.div>

        <div className="flex flex-col justify-center">
          {!result ? (
            <div className="text-center text-gray-500 py-20 border-2 border-dashed border-gray-800 rounded-3xl">
              <Activity size={48} className="mx-auto mb-4 opacity-20" />
              <p>Enter your details to see results</p>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
              <div className="bg-gradient-to-br from-stax-teal to-teal-700 p-10 rounded-3xl shadow-2xl text-center relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-teal-900 font-extrabold uppercase tracking-widest mb-2">Daily Target</p>
                  <h2 className="text-7xl font-black text-white mb-2 drop-shadow-md">{result.target}</h2>
                  <p className="text-teal-100 font-medium">Calories / Day</p>
                </div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl">
                  <p className="text-gray-400 text-sm mb-1">BMR</p>
                  <p className="text-2xl font-bold text-white">{result.bmr}</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <p className="text-gray-400 text-sm mb-1">Maintenance</p>
                  <p className="text-2xl font-bold text-white">{result.tdee}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Calculator;