import axios, { type AxiosResponse } from 'axios';

import type { IUserMe } from '../type';

export const userMeGet = (token: string): Promise<AxiosResponse<IUserMe>> =>
  axios.get('https://api.v2.react-learning.ru/users/me', {
    headers: {
      Authorization: token,
    },
  });
