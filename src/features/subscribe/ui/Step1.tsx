import { Button, TextInput } from 'shared/ui';

import type { StepProps } from '../model';

import styles from './styles.module.scss';

export const Step1 = ({ state, isPending }: StepProps) => {
  return (
    <div className={styles.stepContent}>
      <label className={styles.fieldLabel} htmlFor="email">
        Email адрес
      </label>
      <TextInput
        id="email"
        name="email"
        className={styles.input}
        defaultValue={state.data?.email || ''}
        placeholder="you@example.com"
        error={state.error}
      />
      <Button type="submit" disabled={isPending}>
        Далее
      </Button>
      {isPending && (
        <div className={styles.loading_text}>Проверяем ваш email</div>
      )}
    </div>
  );
};
