import {
  Globe,
  ShoppingBag,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { portfolio } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingBag,
};

interface ProjectCardProps {
  project: (typeof portfolio)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = iconMap[project.icon];
  const delayClass = index === 1 ? 'reveal-delay-2' : '';

  return (
    <div
      ref={ref}
      className={`group relative bg-surface-2 border border-border rounded-2xl overflow-hidden transition-all duration-400 hover:border-blue/30 reveal ${isVisible ? 'visible' : ''} ${delayClass}`}
    >
      {/* Screenshot Area */}
      <div className="relative overflow-hidden aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-500">
        <div
          className="absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center"
          style={{ background: `linear-gradient(to bottom right, ${project.gradient.includes('blue') ? '#4F8EF7' : '#8B5CF6'}, #0d0d0d)` }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          />
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue to-purple rounded-2xl flex items-center justify-center shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
              {Icon && <Icon size={36} className="text-white" />}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-blue">
            {project.type}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
          {project.title}
        </h3>
        <p className="text-[0.82rem] text-white-60 leading-[1.7] mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="py-1 px-3 bg-white-04 border border-border rounded-full text-[0.6rem] tracking-[0.1em] text-white-60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit Button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-primary rounded-full text-white text-[0.8rem] font-semibold tracking-wide btn-hover-lift shadow-glow-blue group/btn"
        >
          Visit Project
          <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function Work() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="work" className="py-20 md:py-32 bg-void pt-4">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div>
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
              Selected Work
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
              Our
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

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
