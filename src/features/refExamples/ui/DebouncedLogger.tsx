import { useRef, useState } from 'react';

export const DebouncedLogger = () => {
  const [value, setValue] = useState<string>('');
  const debouncedTimeoutRef = useRef<number | null>(null);
  const debounceLog = (value: string) => {
    if (debouncedTimeoutRef.current) {
      clearTimeout(debouncedTimeoutRef.current);
    }
    debouncedTimeoutRef.current = setTimeout(() => {
      console.log(value);
    }, 1000);
  };
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debounceLog(e.target.value);
        }}
        placeholder="Дебаунс логгер"
      />
    </div>
  );
};
