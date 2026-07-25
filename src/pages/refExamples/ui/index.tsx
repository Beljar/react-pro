import { ClickTimer } from 'features/refExamples';
import { FocusTracker, PreviousInput } from 'features/refExamples/ui';

import styles from './styles.module.scss';

export const RefExamplesPage = () => {
  return (
    <div className={styles.page}>
      <ClickTimer />
      <div className={styles.container}>
        <h2>Previous Input</h2>
        <PreviousInput />
      </div>
      <div className={styles.container}>
        <h2>Focus Tracker</h2>
        <FocusTracker />
      </div>
    </div>
  );
};
