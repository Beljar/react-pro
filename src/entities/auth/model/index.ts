export interface IAuthLoginPostQuery {
  email: string;
  password: string;
}

export interface IAuthLoginPostResponse {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
}
