import React, { type ReactNode } from 'react';

export interface ConfirmDialogOptions {
  title: string;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
}

export interface ConfirmDialogContextType {
  showConfirmDialog: (options: ConfirmDialogOptions) => Promise<boolean>;
}

export const ConfirmDialogContext = React.createContext<
  ConfirmDialogContextType | undefined
>(undefined);
