import { type ReactNode, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { TooltipPosition } from './TooltipPosition';

import styles from './Tooltip.module.css';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: TooltipPosition;
  theme?: 'light' | 'dark';
}

export const Tooltip = ({
  content,
  children,
  position = TooltipPosition.TOP,
  theme = 'light',
}: TooltipProps) => {

  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const elementRef = useRef<HTMLDivElement>(null);
  const tooltipPortalRoot = document.getElementById('tooltip-root');

  useLayoutEffect(() => {
    if (!isVisible || !elementRef.current || !tooltipPortalRoot) return;

    const elementRect = elementRef.current.getBoundingClientRect();
    const tooltipElement = tooltipPortalRoot.querySelector(
      '[data-tooltip-content]'
    ) as HTMLElement;
    if (!tooltipElement) return;

    const tooltipRect = tooltipElement.getBoundingClientRect();
    const gap = 8;
    let top = 0;
    let left = 0;

    switch (position) {
      case TooltipPosition.TOP:
        top = elementRect.top - tooltipRect.height - gap;
        left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
        break;
      case TooltipPosition.BOTTOM:
        top = elementRect.bottom + gap;
        left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
        break;
      case TooltipPosition.LEFT:
        top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
        left = elementRect.left - tooltipRect.width - gap;
        break;
      case TooltipPosition.RIGHT:
        top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
        left = elementRect.right + gap;
        break;
    }

    setTooltipStyle({
      position: 'fixed',
      top: `${top}px`,
      left: `${left}px`,
    });
  }, [isVisible, position, tooltipPortalRoot]);

  if (!tooltipPortalRoot) {
    console.warn('Tooltip root element not found');
    return <div ref={elementRef}>{children}</div>;
  }

  return (
    <>
      <div
        ref={elementRef}
        className={styles.tooltipTrigger}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible &&
        ReactDOM.createPortal(
          <div
            className={`${styles.tooltipContent} ${styles[`theme-${theme}`]}`}
            style={tooltipStyle}
            data-tooltip-content
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            {content}
          </div>,
          tooltipPortalRoot
        )}
    </>
  );
};
