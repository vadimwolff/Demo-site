import { useEffect } from 'react';

let lockCount = 0;

/**
 * Locks background scrolling while an overlay is open. Reference-counted so the
 * lightbox and the mobile menu cannot unlock each other, and compensates for the
 * scrollbar width to avoid a layout shift on desktop.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const { body, documentElement } = document;
    if (lockCount === 0) {
      const gap = window.innerWidth - documentElement.clientWidth;
      body.dataset.scrollLocked = 'true';
      if (gap > 0) body.style.paddingRight = `${gap}px`;
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        delete body.dataset.scrollLocked;
        body.style.paddingRight = '';
      }
    };
  }, [active]);
}
