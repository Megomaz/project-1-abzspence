import React, { useState } from 'react';
import Navigation from './components/Navigation.js';
import GeneratorView from './components/GeneratorView.js';
import DashboardView from './components/DashboardView.js';
import { useAuth } from './hooks/useAuth.js';
import { useGroceryList } from './hooks/useGroceryList.js';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('generator');
  const { userProfile, handleLogin, handleLogout } = useAuth();
  const groceryListHook = useGroceryList();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentView={currentView}
        setCurrentView={setCurrentView}
        userProfile={userProfile}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      
      {currentView === 'generator' ? (
        <GeneratorView {...groceryListHook} userProfile={userProfile} />
      ) : (
        <DashboardView {...groceryListHook} userProfile={userProfile} />
      )}
    </div>
  );
};

export default App;