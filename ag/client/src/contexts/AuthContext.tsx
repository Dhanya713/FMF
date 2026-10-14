import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types';
import { getCurrentUserApi, loginApi, signupApi, removeToken, updateUserInterestsApi } from '../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<{ message: string; user: User; token?: string; requiresVerification?: boolean; verificationToken?: string; verificationUrl?: string }>;
  loginAsDemo: () => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  updateInterests: (interests: string[]) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(() => localStorage.getItem('findmyflow_token'));
  const [loading, setLoading] = useState<boolean>(true);

  const refreshUser = async () => {
    const storedToken = localStorage.getItem('findmyflow_token');
    if (!storedToken) {
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const res = await getCurrentUserApi();
      setUser(res.user);
    } catch (err) {
      console.warn('Failed to restore session:', err);
      removeToken();
      setUser(null);
      setTokenState(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (email: string, password: string) => {
    // Clear any previously cached user before loading new account data
    setUser(null);
    setLoading(true);
    try {
      const res = await loginApi({ email, password });
      setUser(res.user);
      setTokenState(res.token);
    } finally {
      setLoading(false);
    }
  };

  const loginAsDemo = async () => {
    return login('demo@findmyflow.com', 'password123');
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const res = await signupApi({ name, email, password });
      if (res.token) {
        setUser(res.user);
        setTokenState(res.token);
      }
      return res;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    removeToken();
    setUser(null);
    setTokenState(null);
    // Force a full page navigation to clear all cached component state
    // so that stale data from the previous user cannot appear for the next user.
    window.location.href = '/';
  };

  const updateInterests = async (interests: string[]) => {
    const res = await updateUserInterestsApi(interests);
    setUser(res.user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        loginAsDemo,
        logout,
        refreshUser,
        updateInterests
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
