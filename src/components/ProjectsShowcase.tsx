import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectRibbon from './ProjectRibbon';
import CtaButton from './CtaButton';

/** Homepage block: animated logo ribbon + link to the Our Projects page (replaces the old tile grid). */
export default function ProjectsShowcase() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects-showcase" aria-labelledby="showcase-heading" className="py-20 md:py-28 bg-void overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14 reveal ${isVisible ? 'visible' : ''}`}
        >
          <div>
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
              Selected Work
            </div>
            <h2 id="showcase-heading" className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Brands we&apos;ve
              <br />
              <span className="text-white-20">worked on</span>
            </h2>
          </div>
          <CtaButton href="/projects" variant="glass" className="self-start md:self-auto">
            See Our Projects
          </CtaButton>
        </div>
      </div>
      <ProjectRibbon />
    </section>
  );
}
