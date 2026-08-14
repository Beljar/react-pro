import type React from 'react';

import { useUserInfo } from '../model';
interface IUserInfo {
  accessToken: string;
}
export const UserInfo: React.FC<IUserInfo> = ({ accessToken }) => {
  const { isLoading, userInfo } = useUserInfo({ accessToken });

  if (isLoading) return <div>Загрузка</div>;

  return <div>{`Имя пользователя: ${userInfo?.name}`}</div>;
};
