import { FormWithAsyncSave } from 'features/react19Examples';

import styles from './styles.module.scss';

export const React19ExamplesPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>React 19 Examples</h1>
      </div>

      <div className={styles.section}>
        <h2>Компонент FormWithAsyncSave</h2>
        <div className={styles.demo}>
          <FormWithAsyncSave />
        </div>
      </div>
    </div>
  );
};
