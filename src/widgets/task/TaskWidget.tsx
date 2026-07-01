import { TaskList } from "features/taskList";

import styles from "./TaskWidget.module.css";

export const TaskWidget = () => {
  return (
    <div className={styles.container}>
      <TaskList />
    </div>
  );
};
