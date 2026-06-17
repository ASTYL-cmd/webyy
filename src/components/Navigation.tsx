import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { companyInfo, navigation } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 px-[4vw] py-6 flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? 'bg-void/85 backdrop-blur-2xl border-b border-border py-4'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-sm font-extrabold tracking-[0.3em] uppercase text-white gradient-text"
        >
          {companyInfo.name}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-10 list-none">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[0.72rem] font-normal tracking-[0.1em] uppercase text-white-60 hover:text-white link-underline transition-colors"
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
        className={`fixed inset-0 z-[60] bg-void/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
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
