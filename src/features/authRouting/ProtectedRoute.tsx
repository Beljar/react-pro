import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from './model/useAuth';

export const ProtectedRoute = () => {
  const authContext = useAuth();

  if (!authContext.accessToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
