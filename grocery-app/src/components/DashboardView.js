import React from 'react';
import { User, ShoppingCart, DollarSign, Save, Edit, Trash2 } from 'lucide-react';
import StatsCard from './StatsCard';

const DashboardView = ({ 
  savedLists, 
  userStats, 
  deleteList, 
  reuseList, 
  userProfile 
}) => {
  if (!userProfile.isLoggedIn) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center py-12">
          <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login Required</h2>
          <p className="text-gray-600 mb-6">Please log in to view your dashboard and saved lists</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Total Lists" 
          value={userStats.totalLists} 
          icon={ShoppingCart} 
          color="emerald" 
        />
        <StatsCard 
          title="Avg Spend" 
          value={`€${userStats.avgSpend.toFixed(2)}`} 
          icon={DollarSign} 
          color="blue" 
        />
        <StatsCard 
          title="Total Saved" 
          value={`€${userStats.totalSaved.toFixed(2)}`} 
          icon={Save} 
          color="green" 
        />
      </div>
      
      {/* Saved Lists */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Saved Lists</h3>
        
        {savedLists.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No saved lists yet. Generate and save your first list!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {savedLists.map((list) => (
              <div key={list.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-gray-500">{list.date}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        {list.diet || 'No preference'}
                      </span>
                      <span className="text-sm text-gray-600">
                        {list.people} people • {list.days} days
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold text-emerald-600">€{list.total.toFixed(2)}</span>
                      <span className="text-sm text-gray-500">of €{list.budget} budget</span>
                      <span className="text-sm text-gray-500">{list.items.length} items</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => reuseList(list)}
                      className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg hover:bg-emerald-200 transition-colors flex items-center gap-1 text-sm"
                    >
                      <Edit className="w-3 h-3" />
                      Reuse
                    </button>
                    <button 
                      onClick={() => deleteList(list.id)}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-1 text-sm"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardView;