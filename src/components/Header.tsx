import { useEffect, useRef, useState } from 'react';
import { BOOKING_HREF, company, navLinks } from '../data/company';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useScrollLock } from '../hooks/useScrollLock';
import { Button } from './Button';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useScrollLock(menuOpen);
  useFocusTrap(headerRef, menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // A desktop resize must not leave the page scroll-locked behind a hidden panel.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 60rem)');
    const onChange = () => {
      if (query.matches) setMenuOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} ref={headerRef}>
      <div className="header__bar shell">
        <a className="wordmark" href="#top" aria-label={`${company.name} — на главную`}>
          <span className="wordmark__name">Reality</span>
          <span className="wordmark__sub" aria-hidden="true">
            Detailing Studio
          </span>
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="header__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button href={BOOKING_HREF} className="header__cta">
            Записаться
          </Button>
          <button
            className="header__burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`burger${menuOpen ? ' burger--open' : ''}`} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`menu${menuOpen ? ' menu--open' : ''}`}
        inert={!menuOpen}
        aria-label="Меню"
        aria-modal="true"
        role="dialog"
      >
        <nav className="menu__inner shell">
          <ul className="menu__links">
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ transitionDelay: `${60 + index * 40}ms` }}>
                <a className="menu__link" href={link.href} onClick={() => setMenuOpen(false)}>
                  <span className="menu__index">{String(index + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={BOOKING_HREF} size="lg" className="menu__cta" onClick={() => setMenuOpen(false)}>
            Записаться
          </Button>
        </nav>
      </div>
    </header>
  );
}
