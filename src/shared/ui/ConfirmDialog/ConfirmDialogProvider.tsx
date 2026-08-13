import { type ReactNode, useCallback, useState } from 'react';

import { ConfirmDialogComponent } from './ConfirmDialog';
import {
  ConfirmDialogContext,
  type ConfirmDialogOptions,
} from './ConfirmDialogContext';

interface DialogState extends ConfirmDialogOptions {
  resolve?: (value: boolean) => void;
}

export const ConfirmDialogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dialog, setDialog] = useState<DialogState | null>(null);

  const showConfirmDialog = useCallback(
    (options: ConfirmDialogOptions): Promise<boolean> => {
      return new Promise((resolve) => {
        setDialog({ ...options, resolve });
      });
    },
    []
  );

  const handleConfirm = () => {
    dialog?.resolve?.(true);
    setDialog(null);
  };

  const handleCancel = () => {
    dialog?.resolve?.(false);
    setDialog(null);
  };

  return (
    <ConfirmDialogContext.Provider value={{ showConfirmDialog }}>
      {children}
      {dialog && (
        <ConfirmDialogComponent
          title={dialog.title}
          description={dialog.description}
          confirmText={dialog.confirmText}
          cancelText={dialog.cancelText}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </ConfirmDialogContext.Provider>
  );
};
