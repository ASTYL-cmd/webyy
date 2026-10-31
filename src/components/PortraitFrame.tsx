import { useEffect, useRef, useState } from 'react';
import { assets } from '../config';
import { hasFinePointer, prefersReducedMotion } from '../hooks/useScrollReveal';
import AssetImage from './AssetImage';

/** Rectangular 4:5 portrait in a glass frame: glow, settle-in, shine sweep, soft pointer tilt. */
export default function PortraitFrame({ priority = false }: { priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  // Frame takes the photo's own aspect ratio so nothing is cropped (clamped so extreme shapes can't break the layout).
  const [ratio, setRatio] = useState(4 / 5);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--ry', nx * 6 + 'deg');
        el.style.setProperty('--rx', -ny * 5 + 'deg');
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--rx', '0deg');
    };
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', leave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, []);

  return (
    <div className="portrait w-full max-w-[420px] mx-auto">
      <div className="portrait-glow" aria-hidden="true" />
      <div ref={ref} className="portrait-frame glass-card rounded-[1.75rem] p-2.5">
        <div
          className="portrait-shine relative w-full overflow-hidden rounded-[1.25rem] bg-surface-2 flex items-center justify-center"
          style={{ aspectRatio: String(ratio) }}
        >
          <AssetImage
            src={assets.owner}
            alt="Portrait of Atul Mishra"
            width={800}
            height={1000}
            fit="cover"
            priority={priority}
            onLoad={(img) => {
              if (img.naturalWidth && img.naturalHeight) {
                setRatio(Math.min(1.2, Math.max(0.55, img.naturalWidth / img.naturalHeight)));
              }
            }}
            className="portrait-img absolute inset-0 w-full h-full object-top"
            fallback={
              <span className="font-display text-7xl font-bold gradient-text" aria-hidden="true">
                A
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}
