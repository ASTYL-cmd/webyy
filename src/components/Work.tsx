import { Globe, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { LucideIcon } from 'lucide-react';
import AssetImage from './AssetImage';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingBag,
};

interface ProjectTileProps {
  project: (typeof portfolio)[0];
  index: number;
}

function ProjectTile({ project, index }: ProjectTileProps) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = iconMap[project.icon] ?? Globe;
  const delayClass =
    index % 4 === 1 ? 'reveal-delay-1' : index % 4 === 2 ? 'reveal-delay-2' : index % 4 === 3 ? 'reveal-delay-3' : '';

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — open live site in a new tab`}
      className={`group glass-card lift relative flex flex-col items-center justify-center gap-4 rounded-2xl px-6 py-8 reveal ${isVisible ? 'visible' : ''} ${delayClass}`}
    >
      {/* Logo: fixed display area, object-fit: contain */}
      <div className="w-full h-20 md:h-24 flex items-center justify-center transition-transform duration-[var(--dur-2)] ease-[var(--ease)] group-hover:scale-105">
        <AssetImage
          src={project.logo}
          alt={project.alt}
          width={160}
          height={96}
          className="max-h-full max-w-[70%] w-auto h-auto"
          fallback={
            <div className="w-14 h-14 bg-gradient-to-br from-blue-glow to-purple-glow border border-border-bright rounded-xl flex items-center justify-center">
              {Icon && <Icon size={24} className="text-blue" />}
            </div>
          }
        />
      </div>

      {/* Project Name */}
      <span className="text-[0.85rem] font-semibold tracking-tight text-white text-center">
        {project.title}
      </span>

      {/* Small "Open" arrow (always visible on touch, fades in on hover/focus for pointers) */}
      <span className="absolute top-3 right-3 inline-flex items-center gap-1 py-1 px-2 rounded-full border border-border text-[0.6rem] tracking-[0.12em] uppercase text-white-60 transition-opacity duration-[var(--dur-1)] [@media(hover:hover)]:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:text-accent group-hover:border-accent" aria-hidden="true">
        Open
        <ArrowUpRight size={11} />
      </span>
    </a>
  );
}

export default function Work() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="work" className="py-20 md:py-32 bg-void">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div>
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
              Selected Work
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
              My
              <br />
              <span className="text-white-20">projects</span>
            </h2>
            <p className="mt-4 text-base text-white-60 leading-[1.7] max-w-lg">
              These are some of the projects developed and redesigned by the Webyy team.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 py-3 px-6 text-[0.72rem] font-normal tracking-wide bg-white-04 border border-border text-white rounded-full backdrop-blur-sm hover:bg-white-08 hover:border-white-20 transition-all self-start md:self-auto btn-hover-lift"
          >
            Start a Project
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Project Tiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolio.map((project, index) => (
            <ProjectTile key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
