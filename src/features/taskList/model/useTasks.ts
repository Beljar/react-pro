import { useEffect, useState } from 'react';

import { type Task } from 'entities/task';

export enum Filter { ALL = 'all', COMPLETED = 'completed', INCOMPLETE = 'incomplete' };

export function useTasks(initial: Task[]): {
    tasks: Task[];                   // отфильтрованные задачи
    filter: Filter;                  // текущий фильтр
    setFilter: (f: Filter) => void;  // смена фильтра
    removeTask: (id: string) => void; // удаление задачи по ID
} {
    const [filter, setFilter] = useState<Filter>(Filter.ALL)
    const [tasks, setTasks] = useState<Task[]>(initial);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(initial);

    const setFilterCb = (value: Filter) => {
        setFilter(value)
        if (value === Filter.ALL) {
            setFilteredTasks(tasks)
            return
        }
        setFilteredTasks(tasks.filter(({ completed }) =>
            (value === Filter.COMPLETED) ? completed : !completed
        ))
    }

    const removeTask = (id: string) => {
        setTasks(prev => prev.filter((task) => task.id !== id))
        setFilteredTasks(prev => prev.filter((task) => task.id !== id))
    }

    return {
        tasks: filteredTasks,
        filter,
        setFilter: setFilterCb,
        removeTask,
    }
}
