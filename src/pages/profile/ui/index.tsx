import { useNavigate } from 'react-router-dom';

import { Button } from 'shared/ui';

import { useAuth } from 'features/authRouting';
import { UserInfo } from 'features/userInfo';

import styles from './styles.module.scss';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { accessToken, logout } = useAuth();

  const logoutHandler = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className={styles.container}>
      <UserInfo accessToken={accessToken} />
      <Button onClick={logoutHandler}>Выйти</Button>
    </div>
  );
};
