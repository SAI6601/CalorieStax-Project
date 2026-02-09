// src/components/Layout.jsx
import { Brain, Calculator, LayoutDashboard, LogOut, Menu, ShoppingBag, X } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Calculator, label: 'Calculator', path: '/calculator' },
    { icon: ShoppingBag, label: 'Food Shop', path: '/shop' },
    { icon: Brain, label: 'AI Coach', path: '/coach' },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed md:relative z-30 w-64 h-full bg-gray-800 border-r border-gray-700 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-bold tracking-widest uppercase text-center">
            CALORIE<span className="text-stax-teal">STAX</span>
          </h2>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-stax-teal text-gray-900 font-bold' 
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-4">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg transition-colors">
            <LogOut size={20} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
          <h1 className="font-bold">Dashboard</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Page Content */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;