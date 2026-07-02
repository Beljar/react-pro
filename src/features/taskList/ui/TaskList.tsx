import React, { useMemo } from 'react';

import { FilterButton } from 'shared/ui/FilterButton';

import { TaskCard } from 'entities/task';
import { mockTasks } from 'entities/task/mocks';

import { Filter, useTasks } from '../model';

import styles from './TaskList.module.css';

const FILTER_OPTIONS = [
  {
    label: 'Все',
    value: Filter.ALL,
  },
  {
    label: 'Выполнены',
    value: Filter.COMPLETED,
  },
  {
    label: 'Не выполнены',
    value: Filter.INCOMPLETE,
  },
];

export const TaskList: React.FC = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks(mockTasks);

  const actions = useMemo(() => {
    return {
      onDelete: removeTask,
    };
  }, [removeTask]);

  return (
    <>
      <div>
        <FilterButton<Filter>
          value={filter}
          onChange={setFilter}
          options={FILTER_OPTIONS}
        />
      </div>
      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} actions={actions} />
        ))}
      </div>
    </>
  );
};
