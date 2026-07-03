import { useCallback, useMemo, useState } from 'react';

import { type Task } from 'entities/task';

export enum Filter {
  ALL = 'all',
  COMPLETED = 'completed',
  INCOMPLETE = 'incomplete',
}

export function useTasks(initial: Task[]): {
  tasks: Task[]; // отфильтрованные задачи
  filter: Filter; // текущий фильтр
  setFilter: (f: Filter) => void; // смена фильтра
  removeTask: (id: string) => void; // удаление задачи по ID
} {
  const [filter, setFilter] = useState<Filter>(Filter.ALL);
  const [tasks, setTasks] = useState<Task[]>(initial);

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === Filter.ALL) {
      return tasks;
    }
    return tasks.filter(({ completed }) =>
      filter === Filter.COMPLETED ? completed : !completed
    );
  }, [tasks, filter]);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
  };
}
