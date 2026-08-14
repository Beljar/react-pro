export interface IAuthData {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
}

export interface IAuthMActions {
  login: (authInfo: IAuthData) => void;
  logout: () => void;
}

export type IAuthContext = IAuthData & IAuthMActions;
