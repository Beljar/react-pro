import { useNavigate } from 'react-router-dom';

import type { IAuthData } from 'features/authRouting/model/types';
import { useAuth } from 'features/authRouting/useAuth';
import { Login } from 'features/login';

import styles from './styles.module.scss';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onLoginSuccess = (authData: IAuthData) => {
    login(authData);
    navigate('/profile', { replace: true });
  };

  return (
    <div className={styles.container}>
      <h1>Вход</h1>
      <Login onSuccess={onLoginSuccess} />
    </div>
  );
};
