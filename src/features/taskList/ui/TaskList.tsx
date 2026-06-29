import React from "react";

import { mockTasks } from "entities/task/mocks";

import { useTasks } from "../model";
import { TaskFilter } from "./TaskFilter";
import { TaskCard } from "entities/task";

import styles from "./TaskList.module.css";

export const TaskList: React.FC = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks(mockTasks);

  return (
    <div className={styles.container}>
      <TaskFilter value={filter} onChange={setFilter} />
      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskCard
            task={task}
            actions={{ onDelete: () => removeTask(task.id) }}
          />
        ))}
      </div>
    </div>
  );
};
