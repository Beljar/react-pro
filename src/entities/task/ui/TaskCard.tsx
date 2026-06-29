import clsx from "clsx";
import React from "react";

import type { Task } from "../model";

import styles from "./TaskCard.module.css";

interface ITaskProps {
  task: Task;
}

export const TaskCard: React.FC<ITaskProps> = ({ task }) => {
  const { title, completed } = task;
  return (
    <div className={styles.task}>
      <div className={clsx(styles.status, { [styles.completed]: completed })}>
        {completed ? "Выполнено" : "Не выполнено"}
      </div>
      <div className={styles.title}>
        <span className={styles.title_text}>{title}</span>
      </div>
    </div>
  );
};
