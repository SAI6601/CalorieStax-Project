// src/pages/Dashboard.jsx
import { Flame, Footprints, Utensils } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Layout from '../components/Layout';

const Dashboard = () => {
  // Dummy Data for the Chart
  const data = [
    { name: 'Mon', calories: 2100 },
    { name: 'Tue', calories: 1800 },
    { name: 'Wed', calories: 2400 },
    { name: 'Thu', calories: 1950 },
    { name: 'Fri', calories: 2300 },
    { name: 'Sat', calories: 1700 },
    { name: 'Sun', calories: 2000 },
  ];

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Hello, User 👋</h1>
        <p className="text-gray-400">Here is your daily nutrition overview.</p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Calories Consumed</p>
              <h3 className="text-3xl font-bold text-white mt-1">1,250</h3>
            </div>
            <div className="p-2 bg-stax-teal/20 rounded-lg text-stax-teal">
              <Flame size={24} />
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-stax-teal h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Target: 2,000 kcal</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Protein Intake</p>
              <h3 className="text-3xl font-bold text-white mt-1">85g</h3>
            </div>
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
              <Utensils size={24} />
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Target: 180g</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Steps Walked</p>
              <h3 className="text-3xl font-bold text-white mt-1">4,302</h3>
            </div>
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
              <Footprints size={24} />
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Target: 10,000 steps</p>
        </div>
      </div>

      {/* CHART SECTION */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Weekly Calorie Trend</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
                itemStyle={{ color: '#2dd4bf' }}
              />
              <Area 
                type="monotone" 
                dataKey="calories" 
                stroke="#2dd4bf" 
                fillOpacity={1} 
                fill="url(#colorCalories)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;