import React, { createContext, useContext, useState, type ReactNode, useMemo, useEffect } from 'react';
import type { User } from '../apis/types';
import { useNavigate, useLocation } from 'react-router';
import { CircularProgress, Stack } from '@mui/material';

// Define the shape of the context
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  setUser: (userData: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // To prevent unnecessary navigation

  useEffect(() => {
    const authUser: string | null = localStorage.getItem('user');

    if (!authUser) {
      setLoading(false);
      return;
    }

    try {
      const user = JSON.parse(authUser) as User;

      if (user?.id) {
        setUserState(user);
      } else {
        localStorage.clear();
      }
    } catch (err) {
      localStorage.clear();
    } finally {
      setLoading(false);
    }
  }, []);

  // Separate navigation logic in a useEffect that listens to loading and user state
  useEffect(() => {
    if (!loading) {
      if (!user && location.pathname !== '/login') {
        navigate('/login');
      } else if (user && location.pathname === '/login') {
        navigate('/');
      }
    }
  }, [loading, user]);

  const login = (userData: User) => {
    setUserState(userData);
  };

  const logout = () => {
    localStorage.clear();
    setUserState(null);
    window.location.href = "/login";
  };

  const setUser = (userData: User | null) => {
    setUserState(userData);
  };

  const value = useMemo(
    () => ({
      isAuthenticated: !!user,
      user,
      login,
      logout,
      setUser,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : (
        <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', height: '100vh' }}>
          <CircularProgress />
        </Stack>
      )}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
