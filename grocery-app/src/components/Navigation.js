import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Navigation = ({ currentView, setCurrentView, userProfile, handleLogin, handleLogout }) => {
  return (
    <nav className="bg-emerald-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          <h1 className="text-xl font-bold">Smart Grocery Planner</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentView('generator')}
            className={`px-4 py-2 rounded transition-colors ${
              currentView === 'generator' ? 'bg-emerald-700' : 'hover:bg-emerald-500'
            }`}
          >
            Generate List
          </button>
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`px-4 py-2 rounded transition-colors ${
              currentView === 'dashboard' ? 'bg-emerald-700' : 'hover:bg-emerald-500'
            }`}
          >
            Dashboard
          </button>
          
          {userProfile.isLoggedIn ? (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">{userProfile.name}</span>
              <button 
                onClick={handleLogout}
                className="text-xs bg-emerald-700 px-2 py-1 rounded hover:bg-emerald-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="bg-emerald-700 px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;