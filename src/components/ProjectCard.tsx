import type { Project } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectLogo from './ProjectLogo';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const delay = ['', 'reveal-delay-1', 'reveal-delay-2'][index % 3];

  const body = (
    <>
      <ProjectLogo project={project} className="project-logo aspect-[16/10] w-full" />
      <div className="flex flex-col gap-3 pt-6">
        <span className="self-start rounded-full border border-border-bright bg-blue-glow px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {project.category}
        </span>
        <h3 className="text-xl font-bold tracking-tight text-white">{project.name}</h3>
        <p className="text-[0.92rem] leading-[1.75] text-white-60">{project.description}</p>
      </div>
    </>
  );

  const cls = `project-card group glass-card lift flex h-full flex-col rounded-3xl p-4 reveal ${isVisible ? 'visible' : ''} ${delay}`;

  // Only render a link when a verified destination is supplied in config.
  return project.url ? (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name} — open in a new tab`}
      className={cls}
    >
      {body}
    </a>
  ) : (
    <article ref={ref as React.RefObject<HTMLElement>} className={cls}>
      {body}
    </article>
  );
}
