import { useAuth } from 'features/authRouting/useAuth';
import { UserInfo } from 'features/userInfo';

import styles from './styles.module.scss';

export const ProfilePage = () => {
  const { accessToken } = useAuth();
  return (
    <div className={styles.container}>
      <UserInfo accessToken={accessToken} />
    </div>
  );
};
