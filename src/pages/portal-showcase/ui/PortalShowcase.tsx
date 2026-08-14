import { useState } from 'react';

import { useConfirmDialog, useTheme } from 'shared/context';
import { Button } from 'shared/ui/Button';
import { Tooltip, TooltipPosition } from 'shared/ui/Tooltip';

import styles from './PortalShowcase.module.css';

export const PortalShowcase = () => {
  const { theme, toggleTheme } = useTheme();
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
    <div className={`${styles.container} ${styles[`theme-${theme}`]}`}>
      <div className={styles.header}>
        <h1>Portal Components Showcase</h1>
        <Button onClick={toggleTheme} variant="secondary">
          Переключить тему ({theme === 'light' ? 'dark' : 'light'})
        </Button>
      </div>

      <div className={styles.section}>
        <h2>Tooltip Component</h2>
        <p>Наведите на элементы, чтобы увидеть тултип:</p>

        <div className={styles.tooltipDemo}>
          <Tooltip content="I'm at the top!" position={TooltipPosition.TOP} theme={theme}>
            <Button variant="secondary">Hover (Top)</Button>
          </Tooltip>

          <Tooltip
            content="I'm at the bottom!"
            position={TooltipPosition.BOTTOM}
            theme={theme}
          >
            <Button variant="secondary">Hover (Bottom)</Button>
          </Tooltip>

          <Tooltip content="I'm on the left!" position={TooltipPosition.LEFT} theme={theme}>
            <Button variant="secondary">Hover (Left)</Button>
          </Tooltip>

          <Tooltip content="I'm on the right!" position={TooltipPosition.RIGHT} theme={theme}>
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
