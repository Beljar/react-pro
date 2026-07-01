import { FilterButton } from "shared/ui/FilterButton";

import { Filter, TaskList, useTasks } from "features/taskList";

import { mockTasks } from "entities/task/mocks";

import styles from "./TaskWidget.module.css";

const FILTER_OPTIONS = [
  {
    label: "Все",
    value: Filter.ALL,
  },
  {
    label: "Выполнены",
    value: Filter.COMPLETED,
  },
  {
    label: "Не выполнены",
    value: Filter.INCOMPLETE,
  },
];

export const TaskWidget = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks(mockTasks);

  return (
    <div className={styles.container}>
      <div>
        <FilterButton<Filter>
          value={filter}
          onChange={setFilter}
          options={FILTER_OPTIONS}
        />
      </div>
      <div>
        <TaskList tasks={tasks} actions={{ onDelete: removeTask }} />
      </div>
    </div>
  );
};
