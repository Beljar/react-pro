import { useEffect, useRef } from 'react';

import type { ClickData } from '../model';

export const ClickTimer = () => {
  const clickRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });

  const clickHandler = () => {
    if (clickRef.current.startTime === null) {
      clickRef.current.startTime = Date.now();
    }
    clickRef.current.clickCount += 1;
    console.log(
      `Clicks: ${clickRef.current.clickCount}, Time passed: ${Date.now() - clickRef.current.startTime}ms`
    );
  };
  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
      clickRef.current = {
        startTime: null,
        clickCount: 0,
      };
    };
  }, []);
  return <></>;
};
