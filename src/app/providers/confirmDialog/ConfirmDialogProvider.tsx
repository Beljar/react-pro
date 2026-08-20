import { type ReactNode, useCallback, useState } from 'react';

import { ConfirmDialogContext, type ConfirmDialogOptions,useTheme } from 'shared/context';
import { ConfirmDialogComponent } from 'shared/ui/ConfirmDialog';



interface DialogState extends ConfirmDialogOptions {
  resolve?: (value: boolean) => void;
}

export const ConfirmDialogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const {theme} = useTheme();
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
          theme={theme}
        />
      )}
    </ConfirmDialogContext.Provider>
  );
};
