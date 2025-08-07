import { useState } from 'react';

export const useAuth = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    isLoggedIn: false
  });

  const handleLogin = () => {
    setUserProfile({
      name: 'John Doe',
      email: 'john@example.com',
      isLoggedIn: true
    });
  };

  const handleLogout = () => {
    setUserProfile({
      name: '',
      email: '',
      isLoggedIn: false
    });
  };

  return {
    userProfile,
    handleLogin,
    handleLogout
  };
};