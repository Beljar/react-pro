import { useEffect, useState } from 'react';

import { type IUserMe, userMeGet } from 'entities/user';

interface IUseUserInfo {
  accessToken: string;
}

export const useUserInfo = ({ accessToken }: IUseUserInfo) => {
  const [userInfo, setUserInfo] = useState<IUserMe | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    userMeGet(accessToken)
      .then(({ data }) => setUserInfo(data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);
  return { userInfo, isLoading };
};
