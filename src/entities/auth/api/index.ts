import axios, { type AxiosResponse } from 'axios';

import type { IAuthLoginPostQuery, IAuthLoginPostResponse } from '../model';

export const authLoginPost = async (
  data: IAuthLoginPostQuery
): Promise<AxiosResponse<IAuthLoginPostResponse>> => {
  return axios.post('https://api.v2.react-learning.ru/auth/login', data);
};
