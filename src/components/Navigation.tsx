import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { companyInfo, navigation } from '../config';
import Logo from './Logo';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLLIElement>(null);

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

  // Active section tracking
  useEffect(() => {
    const ids = navigation.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Slide the indicator under the active link (transform only)
  useLayoutEffect(() => {
    const list = listRef.current;
    const ind = indicatorRef.current;
    if (!list || !ind) return;
    const place = () => {
      const link = active ? list.querySelector<HTMLElement>(`a[href="#${active}"]`) : null;
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
        <a href="#hero" aria-label="WEBYY home" className="flex items-center">
          <Logo className="h-10 lg:h-12" />
        </a>

        {/* Desktop Navigation */}
        <ul ref={listRef} className="hidden lg:flex gap-10 list-none relative">
          <li ref={indicatorRef} className="nav-indicator" aria-hidden="true" role="presentation" style={{ opacity: 0 }} />
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href.slice(1) ? 'true' : undefined}
                className={`text-[0.72rem] font-normal tracking-[0.1em] uppercase hover:text-white transition-colors ${
                  active === item.href.slice(1) ? 'text-white' : 'text-white-60'
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 py-2.5 px-5 text-[0.72rem] font-medium tracking-[0.08em] bg-gradient-to-br from-blue-glow to-purple-glow border border-border-bright text-white rounded-full transition-all duration-300 hover:from-blue-glow/50 hover:to-purple-glow/50 hover:border-blue/60 hover:-translate-y-0.5"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden flex flex-col gap-1 p-1"
          aria-label="Open menu"
        >
          <span className="w-6 h-[1px] bg-white-60 block transition-all" />
          <span className="w-6 h-[1px] bg-white-60 block transition-all" />
          <span className="w-6 h-[1px] bg-white-60 block transition-all" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`glass fixed inset-0 z-[60] bg-void/95 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full invisible'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute top-5 left-[4vw]">
          <Logo className="h-10" />
        </div>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 p-2 text-white-60 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold tracking-tight text-white hover:text-blue transition-colors"
          >
            {item.label}
          </a>
        ))}

        {/* Social Icons in Mobile */}
        <div className="flex gap-3 mt-8">
          <a
            href={companyInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-white-60 hover:border-blue hover:text-blue transition-all"
          >
            <Instagram size={18} />
          </a>
          <a
            href={companyInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-white-60 hover:border-blue hover:text-blue transition-all"
          >
            <Twitter size={18} />
          </a>
          <a
            href={companyInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-white-60 hover:border-blue hover:text-blue transition-all"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
