import clsx from "clsx";
import React from "react";

import type { Task } from "../model";

import styles from "./TaskCard.module.css";

interface ITaskProps {
  task: Task;
  actions?: {
    onDelete?: () => void;
  };
}

export const TaskCard: React.FC<ITaskProps> = ({ task, actions }) => {
  const { title, completed } = task;
  const { onDelete } = actions || {};
  return (
    <div className={styles.task}>
      <div className={clsx(styles.header, { [styles.completed]: completed })}>
        <div>{completed ? "Выполнено" : "Не выполнено"}</div>
        {actions ? (
          <div>
            {onDelete ? <button onClick={onDelete}>Удалить</button> : null}
          </div>
        ) : null}
      </div>
      <div className={styles.title}>
        <span className={styles.title_text} title={title}>
          {title}
        </span>
      </div>
    </div>
  );
};
