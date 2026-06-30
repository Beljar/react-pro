import React from "react";

import { Filter } from "../model/useTasks";

import styles from "./TaskFilter.module.css";

interface ITaskFilter {
  value: Filter;
  onChange: (value: Filter) => void;
}

const FILTER_TEXTS = {
  [Filter.ALL]: "Все",
  [Filter.COMPLETED]: "Выполнены",
  [Filter.INCOMPLETE]: "Не выполнены",
};

const FILTER_VALUES = Object.values(Filter) as Filter[];

export const TaskFilter: React.FC<ITaskFilter> = ({ value, onChange }) => {
  const onClick = () => {
    const index = FILTER_VALUES.indexOf(value);
    const nextIndex = (index + 1) % FILTER_VALUES.length;
    onChange(FILTER_VALUES[nextIndex]);
  };

  return (
    <button className={styles.btn} onClick={onClick}>
      {FILTER_TEXTS[value]}
    </button>
  );
};
