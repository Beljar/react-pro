import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { lsActions } from 'shared/utils';

import { AuthContext } from './AuthContext';

interface IAuthContexProvider {
  children: React.ReactNode;
}
const initialContextValue = {
  user: {
    id: '',
    email: '',
  },
  accessToken: '',
  login: () => {},
  logout: () => {},
};
export const AuthContextProvider = ({ children }: IAuthContexProvider) => {
  const [contextValue, setContextValue] = useState(() => {
    const contextValueFromStore = lsActions.get('auth') || {};
    return { ...contextValueFromStore, ...initialContextValue };
  });

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
