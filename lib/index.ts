import { useEffect, useState } from 'react';

export const useConsole = () => {
  const [message, setMessage] = useState();
  useEffect(() => {
    console.log(message);
  }, [message]);

  return setMessage;
};
