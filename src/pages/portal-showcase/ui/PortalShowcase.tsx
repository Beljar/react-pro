import { useState } from 'react';

import { Button } from 'shared/ui/Button';
import { useConfirmDialog } from 'shared/ui/ConfirmDialog';
import { Tooltip, TooltipPosition } from 'shared/ui/Tooltip';

import styles from './PortalShowcase.module.css';

export const PortalShowcase = () => {
  const { showConfirmDialog } = useConfirmDialog();
  const [deleteCount, setDeleteCount] = useState(0);

  const handleDelete = async () => {
    const confirmed = await showConfirmDialog({
      title: 'Удалить элемент?',
      description: 'Это действие необратимо.',
      confirmText: 'Удалить',
      cancelText: 'Отменить',
    });

    if (confirmed) {
      setDeleteCount((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Portal Components Showcase</h1>

      <div className={styles.section}>
        <h2>Tooltip Component</h2>
        <p>Наведите на элементы, чтобы увидеть тултип:</p>

        <div className={styles.tooltipDemo}>
          <Tooltip content="I'm at the top!" position={TooltipPosition.TOP}>
            <Button variant="secondary">Hover (Top)</Button>
          </Tooltip>

          <Tooltip
            content="I'm at the bottom!"
            position={TooltipPosition.BOTTOM}
          >
            <Button variant="secondary">Hover (Bottom)</Button>
          </Tooltip>

          <Tooltip content="I'm on the left!" position={TooltipPosition.LEFT}>
            <Button variant="secondary">Hover (Left)</Button>
          </Tooltip>

          <Tooltip content="I'm on the right!" position={TooltipPosition.RIGHT}>
            <Button variant="secondary">Hover (Right)</Button>
          </Tooltip>
        </div>
      </div>

      <div className={styles.section}>
        <h2>ConfirmDialog Component</h2>

        <div className={styles.dialogDemo}>
          <Button onClick={handleDelete} variant="primary">
            Удалить элемент
          </Button>
          <p className={styles.stat}>
            Элементов удалено: <strong>{deleteCount}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
