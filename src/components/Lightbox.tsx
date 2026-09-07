import { useCallback, useEffect, useRef, type MouseEvent, type TouchEvent } from 'react';
import { createPortal } from 'react-dom';
import type { Work } from '../data/works';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useScrollLock } from '../hooks/useScrollLock';
import './Lightbox.css';

type Props = {
  items: Work[];
  /** null when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

const SWIPE_THRESHOLD = 48;

export function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const open = index !== null;

  useScrollLock(open);
  useFocusTrap(dialogRef, open);

  const go = useCallback(
    (delta: number) => {
      if (index === null || items.length === 0) return;
      onNavigate((index + delta + items.length) % items.length);
    },
    [index, items.length, onNavigate],
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        go(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        go(-1);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, go, onClose]);

  if (index === null) return null;

  const current = items[index];
  if (!current) return null;

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;

    const delta = (event.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(delta < 0 ? 1 : -1);
  };

  // Anything that is not the image itself or a control counts as "outside".
  const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('.lightbox__image, .lightbox__close, .lightbox__arrow')) return;
    onClose();
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Просмотр изображения: ${current.title}`}
      ref={dialogRef}
      onClick={onOverlayClick}
    >
      <div className="lightbox__backdrop" aria-hidden="true" />

      <div className="lightbox__bar">
        <p className="lightbox__counter" aria-live="polite">
          <span className="lightbox__counter-current">{String(index + 1).padStart(2, '0')}</span>
          <span className="lightbox__counter-total">/ {String(items.length).padStart(2, '0')}</span>
        </p>
        <button className="lightbox__close" onClick={onClose} aria-label="Закрыть просмотр">
          <span aria-hidden="true">Закрыть</span>
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
        </button>
      </div>

      <figure className="lightbox__figure" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <img
          key={current.id}
          className="lightbox__image"
          src={current.src}
          width={current.width}
          height={current.height}
          alt={current.alt}
          decoding="async"
        />
        <figcaption className="lightbox__caption">{current.title}</figcaption>
      </figure>

      {items.length > 1 ? (
        <div className="lightbox__nav">
          <button className="lightbox__arrow" onClick={() => go(-1)} aria-label="Предыдущее изображение">
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
              <path d="M13 3L6 10l7 7" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </button>
          <button className="lightbox__arrow" onClick={() => go(1)} aria-label="Следующее изображение">
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
              <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>,
    document.body,
  );
}
