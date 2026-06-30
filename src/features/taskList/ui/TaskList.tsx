import React, { type ComponentProps } from "react";

import { type Task, TaskCard } from "entities/task";

import styles from "./TaskList.module.css";

type TTaskProps = ComponentProps<typeof TaskCard>;

interface ITaskList extends Omit<TTaskProps, "task"> {
  tasks: Task[];
}

export const TaskList: React.FC<ITaskList> = ({ tasks, ...taskProps }) => {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskCard task={task} {...taskProps} />
      ))}
    </div>
  );
};
