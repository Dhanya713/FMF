import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading your profile...</p>
      </div>
    );
  }

  if (!isAuthenticated || (user && user.isVerified === false)) {
    return <Navigate to="/login" state={{ from: location, isUnverified: Boolean(user && user.isVerified === false) }} replace />;
  }

  return <>{children}</>;
};
