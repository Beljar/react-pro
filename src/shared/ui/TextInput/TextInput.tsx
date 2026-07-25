import clsx from 'clsx';
import type { InputHTMLAttributes, Ref } from 'react';

import styles from './TextInput.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
  ref?: Ref<HTMLInputElement>;
}

export const TextInput = ({ className, error, ...props }: TextInputProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={clsx(styles.input, className, {
          [styles.error]: !!error,
        })}
        {...props}
      />
      {error && <p className={styles.error_text}>{error}</p>}
    </div>
  );
};
