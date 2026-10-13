import { projects } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageLayout from './PageLayout';
import ProjectCard from './ProjectCard';
import ProjectRibbon from './ProjectRibbon';
import Wordmark from './Wordmark';
import CtaButton from './CtaButton';

export default function ProjectsPage() {
  usePageMeta(
    'Our Projects — Webyy',
    'Brands and projects from Webyy: ASTYL, Flyo.ai, Mother\u2019s Muffins, Stylin and HJP Studio.',
    '/projects'
  );
  const { ref, isVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  return (
    <PageLayout>
      <section aria-labelledby="projects-heading" className="px-[4vw] pt-32 pb-12 md:pt-44 md:pb-16">
        <div ref={ref} className={`mx-auto max-w-[1200px] reveal ${isVisible ? 'visible' : ''}`}>
          <div className="mb-4 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-blue">
            <span className="h-[1px] w-6 bg-gradient-to-r from-blue to-purple" />
            Our Projects
          </div>
          <h1 id="projects-heading" className="mb-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05]">
            Work from <Wordmark className="align-baseline" />
          </h1>
          <p className="max-w-2xl text-[1.05rem] leading-[1.85] text-white-60">
            A look at the brands and projects we&apos;ve worked on, from fashion and apparel to travel, bakery and
            photography.
          </p>
        </div>
      </section>

      <div className="pb-12 md:pb-16">
        <ProjectRibbon />
      </div>

      <section aria-label="Project list" className="px-[4vw] pb-24 md:pb-32">
        <ul className="mx-auto flex max-w-[1200px] list-none flex-wrap justify-center gap-6">
          {projects.map((project, i) => (
            <li key={project.id} className="project-grid-item">
              <ProjectCard project={project} index={i} />
            </li>
          ))}
        </ul>

        <div
          ref={ctaRef}
          className={`glass-card mx-auto mt-16 flex max-w-[1200px] flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center md:justify-between md:p-12 reveal ${ctaVisible ? 'visible' : ''}`}
        >
          <div className="max-w-xl">
            <h2 className="mb-2 text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.15]">Have a project in mind?</h2>
            <p className="text-[0.98rem] leading-[1.8] text-white-60">
              Tell us about your business and we&apos;ll help you build a strong online presence.
            </p>
          </div>
          <CtaButton href="/#contact" variant="primary" className="self-start md:self-auto">
            Start a Project
          </CtaButton>
        </div>
      </section>
    </PageLayout>
  );
}
