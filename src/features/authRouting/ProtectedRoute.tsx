import type React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './model/useAuth';

interface IProtectedRoute {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const authContext = useAuth();

  if (!authContext.accessToken) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
