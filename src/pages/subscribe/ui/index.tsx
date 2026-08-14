import { SubscribeForm } from 'features/subscribe';

import styles from './styles.module.scss';

export const SubscribePage = () => {
  return (
    <div className={styles.container}>
      <SubscribeForm />
    </div>
  );
};
