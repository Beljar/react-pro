import type React from 'react';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../Button';

import styles from './ConfirmDialog.module.css';

interface ConfirmDialogComponentProps {
  title: string;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  theme?: 'light' | 'dark';
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialogComponent = ({
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  theme = 'light',
  onConfirm,
  onCancel,
}: ConfirmDialogComponentProps) => {

  const dialogRoot = document.getElementById('confirm-dialog-root');

  if (!dialogRoot) {
    console.warn('Confirm dialog root element not found');
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={`${styles.dialog} ${styles[`theme-${theme}`]}`}>
        <h2 className={styles.title}>{title}</h2>
        {description && <div className={styles.description}>{description}</div>}
        <div className={styles.actions}>
          <Button onClick={onCancel} variant="secondary">
            {cancelText}
          </Button>
          <Button onClick={onConfirm} variant="primary">
            {confirmText}
          </Button>
        </div>
      </div>
    </div>,
    dialogRoot
  );
};
