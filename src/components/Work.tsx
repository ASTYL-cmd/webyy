import {
  Globe,
  Leaf,
  ShoppingBag,
  Building2,
  ArrowUpRight,
} from 'lucide-react';
import { portfolio } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Leaf,
  ShoppingBag,
  Building2,
};

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
              Recent
              <br />
              <span className="text-white-20">projects</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 py-3 px-6 text-[0.72rem] font-normal tracking-wide bg-white-04 border border-border text-white rounded-full backdrop-blur-sm hover:bg-white-08 hover:border-white-20 transition-all self-start md:self-auto"
          >
            View All Work
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5px]">
          {portfolio.map((project, index) => {
            const { ref, isVisible } = useScrollReveal();
            const Icon = iconMap[project.icon];
            const isFirst = index === 0;
            const delayClass = index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : index === 3 ? 'reveal-delay-3' : '';

            return (
              <div
                key={project.id}
                ref={ref}
                className={`group relative overflow-hidden cursor-pointer bg-surface reveal ${isVisible ? 'visible' : ''} ${delayClass} ${
                  isFirst ? 'md:col-span-2' : ''
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] ${
                    isFirst ? 'aspect-[21/9]' : 'aspect-video'
                  }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <div className="filter drop-shadow-[0_0_60px_rgba(79,142,247,0.4)]">
                      {Icon && <Icon size={80} className="text-white/10" />}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent flex flex-col justify-end p-6 md:p-10">
                    <div className="text-[0.62rem] tracking-[0.2em] uppercase text-blue mb-2">
                      {project.type}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[0.75rem] text-white-60">
                      {project.year} · {project.award}
                    </p>
                  </div>

                  {/* Hover View Button */}
                  <div className="absolute inset-0 bg-void/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="py-3 px-6 bg-gradient-primary rounded-full text-white text-[0.72rem] font-semibold tracking-[0.1em] translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
