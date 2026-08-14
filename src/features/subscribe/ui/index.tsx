import { useActionState } from 'react';

import { submit } from '../model';
import { Progress } from './Progress';
import { Step1 } from './Step1';
import { Step2 } from './Step2';

import styles from './styles.module.scss';

export const SubscribeForm = () => {
  const [state, formAction, isPending] = useActionState(submit, {
    step: 1,
    data: { newsletter: true, promo: true, partner: true },
    error: null,
    success: false,
  });

  return (
    <div className={styles.card}>
      <form action={formAction} className={styles.form}>
        <input type="hidden" name="step" value={state.step} />

        <div className={styles.header}>
          <p className={styles.eyebrow}>Будьте в курсе</p>
          <h2 className={styles.title}>Подпишитесь на обновления</h2>
          <p className={styles.subtitle}>
            Получайте полезные новости, акции и материалы от партнёров в одном
            месте.
          </p>
        </div>

        <div className={styles.progress}>
          <Progress step={state.step} stepsCount={2} />
        </div>

        {state.step === 1 && (
          <Step1 state={state} formAction={formAction} isPending={isPending} />
        )}

        {state.step === 2 && (
          <Step2 state={state} formAction={formAction} isPending={isPending} />
        )}
      </form>
    </div>
  );
};
