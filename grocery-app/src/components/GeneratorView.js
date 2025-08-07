import React from 'react';
import { DollarSign, Users, Calendar, ShoppingCart, RefreshCw, Save, AlertTriangle } from 'lucide-react';

const GeneratorView = ({ 
  formData, 
  setFormData, 
  groceryList, 
  totalCost, 
  isGenerating, 
  generateGroceryList, 
  saveList,
  userProfile 
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-emerald-600" />
            Plan Your Shopping
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget (€)</label>
              <input 
                type="number" 
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g. 40"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Preference</label>
              <select 
                value={formData.diet}
                onChange={(e) => setFormData({...formData, diet: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select diet type</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="high-protein">High Protein</option>
                <option value="low-carb">Low Carb</option>
                <option value="default">No Preference</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Allergies (Optional)</label>
              <input 
                type="text" 
                value={formData.allergies}
                onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g. nuts, dairy"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  People
                </label>
                <input 
                  type="number" 
                  value={formData.people}
                  onChange={(e) => setFormData({...formData, people: parseInt(e.target.value)})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  min="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Days
                </label>
                <input 
                  type="number" 
                  value={formData.days}
                  onChange={(e) => setFormData({...formData, days: parseInt(e.target.value)})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  min="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meals/Day</label>
                <input 
                  type="number" 
                  value={formData.mealsPerDay}
                  onChange={(e) => setFormData({...formData, mealsPerDay: parseInt(e.target.value)})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  min="1" max="6"
                />
              </div>
            </div>
            
            <button 
              onClick={generateGroceryList}
              disabled={!formData.budget || !formData.diet || isGenerating}
              className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Generate Smart List
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Generated List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Shopping List</h2>
            {groceryList.length > 0 && userProfile.isLoggedIn && (
              <button 
                onClick={saveList}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save List
              </button>
            )}
          </div>
          
          {groceryList.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Generate a list to see your optimized shopping items</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {groceryList.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500 text-sm ml-2">({item.amount})</span>
                    </div>
                    <span className="font-semibold text-emerald-600">€{item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">Total Cost:</span>
                  <span className="text-xl font-bold text-emerald-600">€{totalCost.toFixed(2)}</span>
                </div>
                
                {formData.budget && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Budget:</span>
                    <span className="text-sm text-gray-600">€{formData.budget}</span>
                  </div>
                )}
                
                {formData.budget && totalCost > parseFloat(formData.budget) && (
                  <div className="flex items-center gap-2 mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-red-700 text-sm">Budget exceeded by €{(totalCost - parseFloat(formData.budget)).toFixed(2)}</span>
                  </div>
                )}
                
                {formData.budget && totalCost < parseFloat(formData.budget) && (
                  <div className="flex items-center gap-2 mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <span className="text-green-700 text-sm">Under budget by €{(parseFloat(formData.budget) - totalCost).toFixed(2)}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratorView;