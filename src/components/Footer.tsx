import { Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';
import { companyInfo, navigation } from '../config';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-16 md:py-20">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="text-2xl font-extrabold tracking-[0.2em] gradient-text">
              {companyInfo.name}
            </div>
            <span className="text-[0.55rem] tracking-[0.3em] text-white-60 font-normal mt-1">
              Digital Experience Studio · Est. {companyInfo.founded}
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-6 md:gap-10">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.72rem] tracking-[0.1em] uppercase text-white-60 hover:text-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/term"
              className="text-[0.72rem] tracking-[0.1em] uppercase text-white-60 hover:text-blue transition-colors"
            >
              Terms
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-white-60 hover:border-blue hover:text-blue hover:shadow-glow-purple transition-all"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href={companyInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-white-60 hover:border-blue hover:text-blue hover:shadow-glow-purple transition-all"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href={companyInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-white-60 hover:border-blue hover:text-blue hover:shadow-glow-purple transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={companyInfo.social.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-white-60 hover:border-blue hover:text-blue hover:shadow-glow-purple transition-all"
              aria-label="Dribbble"
            >
              <Dribbble size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[0.7rem] text-white-20">
          <div>
            © {new Date().getFullYear()}{' '}
            <span className="text-blue">{companyInfo.name} Studio</span>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span>Crafted with obsession ·</span>
            <span className="text-blue">{companyInfo.locations[0]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
