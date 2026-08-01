import { useContext } from 'react';

import { AuthContext } from '../AuthContext';

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      'useAuthContext должен использоваться только внутри AuthProvider'
    );
  }

  return authContext;
};
