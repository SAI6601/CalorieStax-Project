// src/pages/Shop.jsx
import { Plus, Search, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  // MOCK DATA - We will replace this with a database call later
  const products = [
    { id: 1, name: 'Quinoa Bowl', calories: 450, price: 12.99, category: 'Meals', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Avocado Toast', calories: 320, price: 8.50, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1588137372308-15f75323a4dd?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Berry Smoothie', calories: 180, price: 6.00, category: 'Drinks', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Grilled Chicken', calories: 500, price: 15.00, category: 'Meals', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'Greek Yogurt', calories: 120, price: 4.50, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80' },
    { id: 6, name: 'Green Salad', calories: 200, price: 9.00, category: 'Meals', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80' },
  ];

  const filteredProducts = products.filter(item => 
    (category === 'All' || item.category === category) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Food Shop</h1>
          <p className="text-gray-400">Healthy meals curated for your goals.</p>
        </div>

        {/* Cart Summary */}
        <button className="bg-stax-teal text-gray-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-teal-400 transition">
          <ShoppingCart size={20} />
          <span>Cart (0)</span>
        </button>
      </div>

      {/* SEARCH & FILTER BAR */}
      <div className="bg-gray-800 p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-3 text-gray-500" size={20} />
          <input 
            type="text" 
            placeholder="Search for meals..." 
            className="w-full bg-gray-900 text-white rounded-lg pl-10 pr-4 py-2.5 border border-gray-700 focus:ring-stax-teal focus:border-stax-teal"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['All', 'Meals', 'Breakfast', 'Drinks'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                category === cat 
                  ? 'bg-stax-teal text-black' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group hover:border-stax-teal transition duration-300">
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {product.calories} kcal
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{product.category}</p>
                </div>
                <span className="text-stax-teal font-bold text-lg">${product.price.toFixed(2)}</span>
              </div>
              
              <button className="w-full mt-4 bg-gray-700 hover:bg-white hover:text-black text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold transition-all duration-300">
                <Plus size={18} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Shop;