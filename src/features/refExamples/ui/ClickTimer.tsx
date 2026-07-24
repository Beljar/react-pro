import { useEffect, useRef } from 'react';

import type { ClickData } from '../model';

export const ClickTimer = () => {
  const clickRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });
  useEffect(() => {
    document.addEventListener('click', () => {
      if (clickRef.current.startTime === null) {
        clickRef.current.startTime = Date.now();
      }
      clickRef.current.clickCount += 1;
      console.log(
        `Clicks: ${clickRef.current.clickCount}, Time passed: ${Date.now() - clickRef.current.startTime}ms`
      );
    });
  }, []);
  return <></>;
};
