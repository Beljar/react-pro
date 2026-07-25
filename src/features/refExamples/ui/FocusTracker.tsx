import { useRef } from 'react';

import { Button } from 'shared/ui/Button/Button';
import { TextInput } from 'shared/ui/TextInput/TextInput';

import styles from './styles.module.scss';

export const FocusTracker = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const counterRef = useRef<number>(0);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      counterRef.current += 1;
      console.log(`Focus count: ${counterRef.current}`);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container}>
      <TextInput ref={inputRef} onFocus={handleFocus} />
      <TextInput onFocus={handleFocus} />
      <Button className={styles.button} onClick={handleClick}>
        Focus
      </Button>
    </div>
  );
};
