import { createContext, useContext } from 'react';

import type { IAuthContext } from './model/types';

export const AuthContext = createContext<IAuthContext>({
  accessToken: '',
  user: {
    id: '',
    email: '',
  },
  login: () => {},
  logout: () => {},
});
