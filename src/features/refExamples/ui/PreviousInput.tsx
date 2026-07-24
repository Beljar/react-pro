/* eslint-disable react-hooks/refs */
import { useEffect, useRef, useState } from 'react';

export const PreviousInput = () => {
  const [value, setValue] = useState<string>('');
  const valuesRef = useRef<string>('');
  useEffect(() => {
    valuesRef.current = value;
  }, [value]);
  return (
    <>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p>Previous: {valuesRef.current}</p>
    </>
  );
};
