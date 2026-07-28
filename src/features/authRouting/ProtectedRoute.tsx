import type React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './useAuth';

interface IProtectedRoute {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const authContext = useAuth();
  console.log(authContext);

  if (!authContext.accessToken) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
