import { Signup } from 'features/singup';

import styles from './styles.module.scss';

export const SignupPage = () => {
  return (
    <div className={styles.container}>
      <h1>Регистрация</h1>
      <Signup />
    </div>
  );
};
