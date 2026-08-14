import { startTransition } from 'react';

import { Button } from 'shared/ui';

import type { StepProps } from '../model';

import styles from './styles.module.scss';

export const Step2 = ({ state, formAction, isPending }: StepProps) => {
  return (
    <div className={styles.stepContent}>
      <input type="hidden" name="email" value={state.data?.email || ''} />

      <p className={styles.fieldLabel}>Выберите, что хотите получать</p>
      <div className={styles.optionList}>
        <label className={styles.checkboxCard} htmlFor="newsletter">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            defaultChecked
            disabled={state.success}
          />
          <span>
            <strong>Рассылка</strong>
            <small>Актуальные новости и обновления</small>
          </span>
        </label>

        <label className={styles.checkboxCard} htmlFor="promo">
          <input
            type="checkbox"
            id="promo"
            name="promo"
            defaultChecked
            disabled={state.success}
          />
          <span>
            <strong>Акции</strong>
            <small>Спецпредложения и ограниченные предложения</small>
          </span>
        </label>

        <label className={styles.checkboxCard} htmlFor="partner">
          <input
            type="checkbox"
            id="partner"
            name="partner"
            defaultChecked
            disabled={state.success}
          />
          <span>
            <strong>Контент партнёров</strong>
            <small>Материалы от проверенных партнёров</small>
          </span>
        </label>
      </div>

      {isPending && (
        <div className={styles.loading_text}>Оформляем подписку</div>
      )}

      {state.error && !isPending && (
        <p className={styles.error}>{state.error}</p>
      )}

      {state.success ? (
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>
          <h3 className={styles.successTitle}>Готово!</h3>
          <p className={styles.successText}>
            Спасибо за подписку. Мы будем держать вас в курсе лучших материалов.
          </p>
        </div>
      ) : (
        <div className={styles.actions}>
          <Button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              const data = new FormData();
              data.set('step', '-1');
              data.set('email', state.data?.email || '');
              startTransition(() => formAction(data));
            }}
            variant="secondary"
          >
            Назад
          </Button>
          <Button type="submit" disabled={isPending}>
            Подписаться
          </Button>
        </div>
      )}
    </div>
  );
};
