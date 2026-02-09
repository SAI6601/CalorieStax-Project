// src/pages/Calculator.jsx
import { Activity, Calculator as CalcIcon, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

const Calculator = () => {
const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: '1.2',
    goal: 'maintain'
});

const [result, setResult] = useState(null);

const calculateCalories = (e) => {
    e.preventDefault();
    // Mifflin-St Jeor Equation
    let bmr = (10 * formData.weight) + (6.25 * formData.height) - (5 * formData.age);
    
    if (formData.gender === 'male') {
    bmr += 5;
    } else {
        bmr -= 161;
    }

    const tdee = bmr * parseFloat(formData.activity);
    
    // Adjust based on goal
    let targetCalories = tdee;
    if (formData.goal === 'cut') targetCalories -= 500;
    if (formData.goal === 'bulk') targetCalories += 500;

    setResult({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        target: Math.round(targetCalories)
    });
    };

    return (
    <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: THE FORM */}
        <div>
            <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Macro Calculator</h1>
            <p className="text-gray-400">Calculate your precise daily nutritional needs.</p>
        </div>

        <form onSubmit={calculateCalories} className="space-y-6 bg-gray-800 p-6 rounded-xl border border-gray-700">
            
            <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm text-gray-400 mb-1">Age</label>
                <input
                    type="number"
                    required
                    className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg p-3 focus:ring-stax-teal focus:border-stax-teal"
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-sm text-gray-400 mb-1">Gender</label>
                <select
                    className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg p-3 focus:ring-stax-teal"
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm text-gray-400 mb-1">Height (cm)</label>
                <input
                    type="number"
                    required
                    placeholder="175"
                    className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg p-3 focus:ring-stax-teal"
                    onChange={(e) => setFormData({...formData, height: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-sm text-gray-400 mb-1">Weight (kg)</label>
                <input
                    type="number"
                    required
                    placeholder="70"
                    className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg p-3 focus:ring-stax-teal"
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                />
            </div>
            </div>

            <div>
                <label className="block text-sm text-gray-400 mb-1">Activity Level</label>
                <select
                className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg p-3 focus:ring-stax-teal"
                onChange={(e) => setFormData({...formData, activity: e.target.value})}
                >
                <option value="1.2">Sedentary (Office job)</option>
                <option value="1.375">Light Exercise (1-2 days/week)</option>
                <option value="1.55">Moderate Exercise (3-5 days/week)</option>
                <option value="1.725">Heavy Exercise (6-7 days/week)</option>
                <option value="1.9">Athlete (2x per day)</option>
                </select>
            </div>

            <div>
                <label className="block text-sm text-gray-400 mb-1">Goal</label>
                <div className="grid grid-cols-3 gap-2">
                {['cut', 'maintain', 'bulk'].map((type) => (
                    <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({...formData, goal: type})}
                    className={`p-2 rounded-lg border capitalize text-sm transition-colors ${
                    formData.goal === type 
                        ? 'bg-stax-teal border-stax-teal text-gray-900 font-bold' 
                        : 'border-gray-600 text-gray-400 hover:border-gray-400'
                    }`}
                    >
                    {type}
                    </button>
                ))}
                </div>
            </div>

            <button 
                type="submit" 
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
                <CalcIcon size={20} /> Calculate Macros
            </button>
            </form>
        </div>

        {/* RIGHT COLUMN: THE RESULTS */}
        <div className="flex flex-col justify-center">
            {!result ? (
            <div className="text-center text-gray-500 py-20 bg-gray-800/50 rounded-xl border border-dashed border-gray-700">
                <Activity size={48} className="mx-auto mb-4 opacity-50" />
                <p>Enter your details to see your <br/> personalized plan.</p>
            </div>
            ) : (
            <div className="space-y-6 animate-fade-in-up">

              {/* Main Result Card */}
                <div className="bg-gradient-to-br from-stax-teal to-teal-600 p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-teal-900 font-bold uppercase tracking-widest mb-2">Daily Target</p>
                    <h2 className="text-6xl font-black text-white mb-2">{result.target}</h2>
                    <p className="text-teal-100 font-medium">Calories / Day</p>
                </div>
                {/* Decorative background circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                </div>

              {/* BMR & TDEE Grid */}
                <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">BMR (Basal Rate)</p>
                    <p className="text-2xl font-bold text-white">{result.bmr}</p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">TDEE (Maintenance)</p>
                    <p className="text-2xl font-bold text-white">{result.tdee}</p>
                </div>
                </div>

              {/* Action Button */}
            <button className="w-full bg-gray-800 border-2 border-stax-teal text-stax-teal font-bold py-4 rounded-xl hover:bg-stax-teal hover:text-black transition flex items-center justify-center gap-2">
                Save to Profile <ChevronRight size={20} />
            </button>
            </div>
        )}
        </div>

    </div>
    </Layout>
    );
};

export default Calculator;