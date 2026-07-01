import React from "react";

import styles from "./FilterButton.module.css";

interface IOption<T> {
  label: string;
  value: T;
}

interface IFilterButton<T> {
  value: string;
  options: IOption<T>[];
  onChange: (value: T) => void;
}

export const FilterButton = <T,>({
  value,
  options,
  onChange,
}: IFilterButton<T>) => {
  const onClick = () => {
    const index = options.findIndex((option) => option.value === value);
    const nextIndex = (index + 1) % options.length;
    onChange(options[nextIndex].value);
  };

  return (
    <button className={styles.btn} onClick={onClick}>
      {options.find((option) => option.value === value)?.label}
    </button>
  );
};
