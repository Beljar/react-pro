/* eslint-disable react-hooks/refs */
import { useEffect, useRef, useState } from 'react';

import { TextInput } from 'shared/ui';

import styles from './styles.module.scss';

export const PreviousInput = () => {
  const [value, setValue] = useState<string>('');
  const valuesRef = useRef<string>('');
  useEffect(() => {
    valuesRef.current = value;
  }, [value]);
  return (
    <div className={styles.container}>
      <div>
        <TextInput
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <span>Previous: {valuesRef.current}</span>
      </div>
    </div>
  );
};
