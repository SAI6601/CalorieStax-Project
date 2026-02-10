import { motion } from 'framer-motion';
import { Plus, Search, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const products = [
    { id: 1, name: 'Quinoa Bowl', calories: 450, price: 12.99, category: 'Meals', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80' },
    { id: 2, name: 'Avocado Toast', calories: 320, price: 8.50, category: 'Breakfast', img: 'https://images.unsplash.com/photo-1588137372308-15f75323a4dd?w=500&q=80' },
    { id: 3, name: 'Berry Smoothie', calories: 180, price: 6.00, category: 'Drinks', img: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500&q=80' },
    { id: 4, name: 'Grilled Chicken', calories: 500, price: 15.00, category: 'Meals', img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&q=80' },
    { id: 5, name: 'Greek Yogurt', calories: 120, price: 4.50, category: 'Breakfast', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80' },
    { id: 6, name: 'Green Salad', calories: 200, price: 9.00, category: 'Meals', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80' },
  ];

  const filtered = products.filter(p => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <div><h1 className="text-4xl font-bold text-white mb-2">Food Shop</h1><p className="text-gray-400">Curated nutrition.</p></div>
        <button className="btn-primary flex items-center gap-2"><ShoppingCart size={20}/> Cart (0)</button>
      </div>

      <div className="glass-panel p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
          <input type="text" placeholder="Search for meals..." className="glass-input pl-12" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="flex gap-2">
          {['All', 'Meals', 'Breakfast', 'Drinks'].map(cat => (
            <button key={cat} onClick={() => setCategory(cat)} className={`px-5 py-2.5 rounded-xl font-bold transition-all ${category === cat ? 'bg-stax-teal text-gray-900' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>{cat}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -5 }} className="glass-card rounded-2xl overflow-hidden group">
            <div className="h-48 overflow-hidden relative">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">{p.calories} kcal</div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div><h3 className="text-xl font-bold text-white">{p.name}</h3><p className="text-gray-400 text-xs uppercase tracking-wider">{p.category}</p></div>
                <span className="text-stax-teal font-bold text-xl">${p.price.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 rounded-xl border border-gray-600 hover:bg-stax-teal hover:border-stax-teal hover:text-gray-900 font-bold transition-all flex justify-center items-center gap-2"><Plus size={18}/> Add to Cart</button>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
};
export default Shop;