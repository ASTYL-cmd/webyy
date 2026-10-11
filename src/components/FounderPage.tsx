import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Instagram } from 'lucide-react';
import { owner } from '../config';
import Logo from './Logo';
import PortraitFrame from './PortraitFrame';

const focus = [
  'Modern design',
  'Responsive websites',
  'Clean interfaces',
  'Performance',
  'SEO-conscious development',
];

export default function FounderPage() {
  useEffect(() => {
    document.title = 'Atul Mishra — Founder & Owner of WEBYY';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Meet Atul Mishra, Founder & Owner of WEBYY, a website development brand focused on quality, usability and continuous improvement.'
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-in min-h-screen bg-void text-white-custom font-sans antialiased">
      <header className="glass-nav fixed top-0 inset-x-0 z-50 px-[4vw] py-4 flex items-center justify-between">
        <a href="/" aria-label="WEBYY home">
          <Logo className="h-10 lg:h-12" />
        </a>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="hidden sm:inline-flex items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase text-white-60 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Home
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 py-2.5 px-5 text-[0.72rem] font-medium tracking-[0.08em] bg-gradient-to-br from-blue-glow to-purple-glow border border-border-bright rounded-full btn-hover-lift"
          >
            Start a Project
          </a>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-[4vw] pt-32 pb-24 md:pt-44">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,420px)_1fr] gap-14 md:gap-20 items-center">
          <PortraitFrame priority />

          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
              About the Owner
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] mb-3">
              Meet the Founder
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight">{owner.name}</h2>
            <p className="text-[0.75rem] tracking-[0.12em] uppercase text-white-60 mt-1 mb-8">
              {owner.role}
            </p>

            <div className="space-y-4 mb-8 max-w-xl mx-auto md:mx-0">
              {owner.bio.map((line) => (
                <p key={line} className="text-[1rem] text-white-60 leading-[1.85]">
                  {line}
                </p>
              ))}
            </div>

            <ul className="flex flex-wrap gap-2 justify-center md:justify-start mb-10 list-none">
              {focus.map((f) => (
                <li
                  key={f}
                  className="glass-card py-1.5 px-4 rounded-full text-[0.72rem] tracking-[0.06em] text-white"
                >
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={owner.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card lift inline-flex items-center gap-2 py-3.5 px-6 rounded-full text-[0.8rem] text-white hover:border-accent"
              >
                <Instagram size={15} />
                {owner.instagramHandle}
                <ArrowUpRight size={14} />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 py-3.5 px-8 text-[0.82rem] font-semibold bg-gradient-primary text-white rounded-full btn-hover-lift shadow-glow-blue"
              >
                Work With Us <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-[0.7rem] text-white-60">
        © {new Date().getFullYear()} WEBYY. All rights reserved.
      </footer>
    </div>
  );
}
