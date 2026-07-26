import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import React from 'react';

import styles from './TextInput.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, error, ...props }: TextInputProps, ref) => {
    return (
      <div className={styles.wrapper}>
        <input
          className={clsx(styles.input, className, {
            [styles.error]: !!error,
          })}
          ref={ref}
          {...props}
        />
        {error && <p className={styles.error_text}>{error}</p>}
      </div>
    );
  }
);
