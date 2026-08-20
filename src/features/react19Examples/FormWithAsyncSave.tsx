import clsx from 'clsx';
import { useActionState, useEffect, useState } from 'react';

import styles from './FormWithAsyncSave.module.css';

type State = {
  status: 'idle' | 'success';
  error: string | null;
};

const INITIAL_STATE: State = {
  status: 'idle',
  error: null,
};

const BUTTON_TEXT = {
  idle: 'Save',
  pending: 'Saving…',
  success: 'Saved!',
};

const submit = async (
  previousState: State,
  formData: FormData | 'reset'
): Promise<State> => {
  if (formData === 'reset') return INITIAL_STATE;

  const value = formData.get('value') as string;

  if (!value?.trim()) {
    return { ...previousState, status: 'idle', error: 'Введите значение' };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { status: 'success', error: null };
};

const RESET_TIME_MS = 5000;

export const FormWithAsyncSave = () => {
  const [time, setTime] = useState(RESET_TIME_MS / 1000);
  const [state, formAction, isPending] = useActionState(submit, INITIAL_STATE);

  useEffect(() => {
    if (state.status === 'success') {
      const interval = setInterval(() => {
        setTime((prevTime) => (prevTime - 1 > 0 ? prevTime - 1 : 0));
      }, 1000);
      const timeout = setTimeout(() => {
        formAction('reset');
      }, RESET_TIME_MS);

      return () => {
        setTime(5);
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [state.status]);

  return (
    <form action={formAction} className={styles.form}>
      <input
        type="text"
        name="value"
        defaultValue=""
        disabled={isPending}
        placeholder="Введите текст"
        className={styles.input}
      />

      <button type="submit" disabled={isPending} className={styles.button}>
        {BUTTON_TEXT[state.status]}
      </button>

      {state.status === 'idle' && state.error && (
        <p className={styles.error}>{state.error}</p>
      )}

      <p
        className={clsx(
          { [styles.success]: state.status === 'success' },
          { [styles.saving]: isPending },
          styles.status
        )}
      >{`Текущий статус: ${isPending ? 'pending' : state.status}`}</p>
      {state.status === 'success' ? (
        <p>{`Статус сбросится через: ${time}`}</p>
      ) : null}
    </form>
  );
};
