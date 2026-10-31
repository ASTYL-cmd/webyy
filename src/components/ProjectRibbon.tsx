import { projects } from '../config';
import ProjectLogo from './ProjectLogo';

// One "set" = every logo once. A "half" repeats the set so it is wider than any screen;
// the track is two identical halves and slides exactly -50%, so the loop has no visible jump.
const SETS_PER_HALF = 3;

export default function ProjectRibbon() {
  return (
    <div>
      <div
        className="logo-ribbon"
        role="region"
        aria-label="Logos of projects built by Webyy"
      >
        <div className="logo-ribbon-track">
          {[0, 1].map((half) => (
            <ul key={half} className="logo-ribbon-half">
              {Array.from({ length: SETS_PER_HALF }).flatMap((_, setIdx) =>
                projects.map((p) => {
                  const duplicate = half === 1 || setIdx > 0;
                  return (
                    <li
                      key={`${half}-${setIdx}-${p.id}`}
                      className="logo-ribbon-item"
                      aria-hidden={duplicate || undefined}
                      data-dup={duplicate || undefined}
                    >
                      <ProjectLogo project={p} decorative={duplicate} className="ribbon-logo" />
                    </li>
                  );
                })
              )}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
