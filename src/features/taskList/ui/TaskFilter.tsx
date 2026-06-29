import React from "react";

import { Filter } from "../model/useTasks";

interface ITaskFilter {
  value: Filter;
  onChange: (value: Filter) => void;
}

const isFilter = (value: string): value is Filter => {
  return Object.values(Filter).includes(value as Filter);
};

export const TaskFilter: React.FC<ITaskFilter> = ({ value, onChange }) => {
  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const targetValue = ev.target.value;
    const filterValue = isFilter(targetValue) ? targetValue : Filter.ALL;
    onChange(filterValue);
  };
  return (
    <div>
      <select
        name="filter-task"
        id="filter-task"
        onChange={handleChange}
        value={value}
      >
        <option value={Filter.ALL}>Все</option>
        <option value={Filter.COMPLETED}>Выполнены</option>
        <option value={Filter.INCOMPLETE}>Не выполнены</option>
      </select>
    </div>
  );
};
