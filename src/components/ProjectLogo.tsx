import type { Project } from '../config';
import AssetImage from './AssetImage';

/** Just the logo: no plate, border or background. Proportions are preserved (object-contain / auto sizing). */
export default function ProjectLogo({
  project,
  className = '',
  eager = false,
  decorative = false,
}: {
  project: Project;
  className?: string;
  eager?: boolean;
  /** Duplicate copies in the looping ribbon are hidden from assistive tech. */
  decorative?: boolean;
}) {
  return (
    <div className={`logo-plate ${className}`}>
      <AssetImage
        src={project.logo}
        alt={decorative ? '' : project.alt}
        width={240}
        height={150}
        priority={eager}
        className={`logo-plate-img ${project.silhouette ? 'logo-silhouette' : ''}`}
        fallback={
          <span className="font-display text-2xl font-bold text-white-60" aria-hidden="true">
            {project.name}
          </span>
        }
      />
    </div>
  );
}
