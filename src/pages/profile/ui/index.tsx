import { Button } from 'shared/ui';

import { useAuth } from 'features/authRouting';
import { UserInfo } from 'features/userInfo';

import styles from './styles.module.scss';

export const ProfilePage = () => {
  const { accessToken, logout } = useAuth();

  return (
    <div className={styles.container}>
      <UserInfo accessToken={accessToken} />
      <Button onClick={logout}>Выйти</Button>
    </div>
  );
};
