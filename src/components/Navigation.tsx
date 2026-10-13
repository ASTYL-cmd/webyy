import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Instagram } from 'lucide-react';
import { companyInfo, navigation } from '../config';
import Wordmark from './Wordmark';
import CtaButton from './CtaButton';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const onHome = path === '/';
  // Key of the nav item to highlight: a section ("/#services") on the homepage, otherwise the page route.
  const active = onHome ? (section ? `/#${section}` : '/') : path;
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLLIElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Glass-on-scroll + scroll-progress bar: one passive, rAF-throttled listener.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled((prev) => {
        const next = y > 80;
        return prev === next ? prev : next;
      });
      const max = document.documentElement.scrollHeight - window.innerHeight;
      navRef.current?.style.setProperty('--sp', max > 0 ? String(Math.min(1, y / max)) : '0');
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Active section tracking (homepage only; other pages highlight by route)
  useEffect(() => {
    if (!onHome) return;
    const ids = navigation.filter((n) => n.href.startsWith('/#')).map((n) => n.href.slice(2));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSection(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    // Back at the very top: highlight Home again
    const onTop = () => window.scrollY < 200 && setSection(null);
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, [onHome]);

  // "Home" while already on the homepage: scroll to top instead of reloading
  const handleClick = (href: string, close?: boolean) => (e: React.MouseEvent) => {
    if (close) setMobileOpen(false);
    if (href === '/' && onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Slide the indicator under the active link (transform only)
  useLayoutEffect(() => {
    const list = listRef.current;
    const ind = indicatorRef.current;
    if (!list || !ind) return;
    const place = () => {
      const link = list.querySelector<HTMLElement>(`a[data-nav="${active}"]`);
      if (!link) {
        ind.style.opacity = '0';
        return;
      }
      ind.style.opacity = '1';
      ind.style.transform = `translateX(${link.offsetLeft}px) scaleX(${link.offsetWidth})`;
    };
    place();
    window.addEventListener('resize', place, { passive: true });
    return () => window.removeEventListener('resize', place);
  }, [active]);

  // Mobile menu: lock background scroll, Escape closes, focus moves in on open and back to the button on close,
  // and the menu closes itself if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => menuRef.current?.querySelector<HTMLElement>('a')?.focus(), 80);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        burgerRef.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => mq.matches && setMobileOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 px-[4vw] flex items-center justify-between transition-[padding,background-color,border-color] duration-[var(--dur-2)] ease-[var(--ease)] ${
          scrolled ? 'glass-nav py-4' : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div
          className="scroll-progress"
          style={{ opacity: scrolled ? 1 : 0 }}
          aria-hidden="true"
        />

        {/* Logo */}
        <a href="/" onClick={handleClick('/')} aria-label="Webyy home" className="flex items-center">
          <Wordmark className="text-[1.6rem] lg:text-[1.9rem]" />
        </a>

        {/* Desktop Navigation */}
        <ul ref={listRef} className="hidden lg:flex gap-8 xl:gap-10 list-none relative">
          <li ref={indicatorRef} className="nav-indicator" aria-hidden="true" role="presentation" style={{ opacity: 0 }} />
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-nav={item.href}
                onClick={handleClick(item.href)}
                aria-current={active === item.href ? (item.href.includes('#') ? 'true' : 'page') : undefined}
                className={`text-[0.72rem] font-normal tracking-[0.1em] uppercase hover:text-white transition-colors ${
                  active === item.href ? 'text-white' : 'text-white-60'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Instagram Icon */}
          <a
            href={companyInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-border rounded-full flex items-center justify-center text-white-60 hover:border-blue hover:text-blue transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={14} />
          </a>

          {/* CTA Button */}
          <CtaButton href="/#contact" size="sm">
            Start a Project
          </CtaButton>
        </div>

        {/* Mobile menu button: one toggle that morphs hamburger <-> X (stays above the menu panel) */}
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="burger lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="burger-lines" aria-hidden="true">
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </span>
        </button>
      </nav>

      {/* Mobile menu panel (sits under the header, so the header's toggle is always the close control) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        {navigation.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            style={{ '--i': i } as React.CSSProperties}
            onClick={handleClick(item.href, true)}
            aria-current={active === item.href ? (item.href.includes('#') ? 'true' : 'page') : undefined}
            className={`mobile-item text-2xl font-bold tracking-tight transition-colors hover:text-blue ${
              active === item.href ? 'text-blue' : 'text-white'
            }`}
          >
            {item.label}
          </a>
        ))}

        <div className="mobile-item mt-6 flex gap-3" style={{ '--i': navigation.length } as React.CSSProperties}>
          <a
            href={companyInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white-60 transition-all hover:border-blue hover:text-blue"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
