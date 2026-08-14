import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[styles.button, styles[variant], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
