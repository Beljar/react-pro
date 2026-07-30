import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { lsActions } from 'shared/utils';

import { AuthContext } from './AuthContext';
import type { IAuthData } from './model/types';

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

  const login = (authData: IAuthData) => {
    lsActions.put('auth', authData);
    setContextValue(authData);
  };

  const logout = () => {
    lsActions.delete('auth');
    setContextValue(initialContextValue);
  };

  return (
    <AuthContext.Provider value={{ ...contextValue, login }}>
      {children}
    </AuthContext.Provider>
  );
};
