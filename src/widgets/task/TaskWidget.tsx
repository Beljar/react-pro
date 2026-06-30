import { TaskFilter, TaskList, useTasks } from "features/taskList";

import { mockTasks } from "entities/task/mocks";

import styles from "./TaskWidget.module.css";

export const TaskWidget = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks(mockTasks);

  return (
    <div className={styles.container}>
      <div>
        <TaskFilter value={filter} onChange={setFilter} />
      </div>
      <div>
        <TaskList tasks={tasks} actions={{ onDelete: removeTask }} />
      </div>
    </div>
  );
};
