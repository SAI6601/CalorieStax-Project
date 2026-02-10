import { motion } from 'framer-motion';
import { Flame, Footprints, Utensils } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Layout from '../components/Layout';

const Dashboard = () => {
  const data = [
    { name: 'Mon', calories: 2100 }, { name: 'Tue', calories: 1800 },
    { name: 'Wed', calories: 2400 }, { name: 'Thu', calories: 1950 },
    { name: 'Fri', calories: 2300 }, { name: 'Sat', calories: 1700 }, { name: 'Sun', calories: 2000 },
  ];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <Layout>
      <motion.div variants={container} initial="hidden" animate="show">
        <div className="mb-8">
          <motion.h1 variants={item} className="text-4xl font-bold text-white mb-2">Hello, User 👋</motion.h1>
          <motion.p variants={item} className="text-gray-400">Here is your daily nutrition overview.</motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Calories', val: '1,250', max: '2,000', icon: Flame, color: 'text-stax-teal', bg: 'bg-stax-teal', percent: '65%' },
            { label: 'Protein', val: '85g', max: '180g', icon: Utensils, color: 'text-purple-400', bg: 'bg-purple-500', percent: '45%' },
            { label: 'Steps', val: '4,302', max: '10k', icon: Footprints, color: 'text-blue-400', bg: 'bg-blue-500', percent: '30%' }
          ].map((stat, i) => (
            <motion.div key={i} variants={item} className="glass-card p-6 rounded-2xl relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-white mt-1">{stat.val}</h3>
                </div>
                <div className={`p-3 rounded-xl ${stat.color} bg-gray-800/50`}> <stat.icon size={24} /> </div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: stat.percent }} transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full ${stat.bg}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="glass-panel p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-6">Weekly Trends</h3>
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
                <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff', borderRadius: '12px' }} />
                <Area type="monotone" dataKey="calories" stroke="#2dd4bf" fillOpacity={1} fill="url(#colorCalories)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};
export default Dashboard;